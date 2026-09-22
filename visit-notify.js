/* Visit notifier: sends a Telegram message to the site owner when someone
   opens the portfolio. It does NOT collect names, IP addresses, or any
   personal details. Each message says only: time, which page, where the
   visitor came from (e.g. LinkedIn, Google), and phone or computer.

   Your own visits: open the site once with ?me at the end of the address
   (e.g. https://oghenefegorugbine.github.io/?me) and this browser will stop
   sending notifications. Open it with ?notme to turn them back on. */
(function () {
  "use strict";

  var BOT_TOKEN = "8593303072:AAHFT9ZFehhpz2e_EZpno6VYOJ8fCLz1o-I";
  var CHAT_ID = "7363256233";

  var OWNER_KEY = "portfolio-owner";
  var SESSION_KEY = "portfolio-visit-sent";

  function safeGet(store, key) {
    try { return store.getItem(key); } catch (e) { return null; }
  }
  function safeSet(store, key, val) {
    try { store.setItem(key, val); } catch (e) { /* ignore */ }
  }
  function safeRemove(store, key) {
    try { store.removeItem(key); } catch (e) { /* ignore */ }
  }

  var params = new URLSearchParams(window.location.search);
  if (params.has("me")) { safeSet(localStorage, OWNER_KEY, "1"); return; }
  if (params.has("notme")) { safeRemove(localStorage, OWNER_KEY); }

  // Skip: the owner's own browser, local testing, automated bots/crawlers.
  if (safeGet(localStorage, OWNER_KEY) === "1") return;
  var host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "" ) return;
  if (navigator.webdriver) return;
  if (/bot|crawl|spider|slurp|preview|lighthouse|headless/i.test(navigator.userAgent)) return;

  // One notification per visit, not one per page reload.
  if (safeGet(sessionStorage, SESSION_KEY)) return;
  safeSet(sessionStorage, SESSION_KEY, "1");

  var source = "Direct link or bookmark";
  if (document.referrer) {
    try {
      var refHost = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (refHost && refHost !== host) source = refHost;
    } catch (e) { /* keep default */ }
  }
  var device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "Phone/tablet" : "Computer";
  var when = new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
  var page = window.location.pathname + window.location.hash;

  var text =
    "New visit to your portfolio\n" +
    "Time: " + when + "\n" +
    "Page: " + (page || "/") + "\n" +
    "Came from: " + source + "\n" +
    "Device: " + device;

  var url =
    "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage" +
    "?chat_id=" + encodeURIComponent(CHAT_ID) +
    "&text=" + encodeURIComponent(text);

  // Fire-and-forget; nothing is shown to the visitor and errors are ignored.
  try {
    fetch(url, { method: "GET", mode: "no-cors", keepalive: true }).catch(function () {});
  } catch (e) { /* ignore */ }
})();
