if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[t]) return;
    let f = {};
    const o = (e) => s(e, t),
      d = { module: { uri: t }, exports: f, require: o };
    i[t] = Promise.all(n.map((e) => d[e] || o(e))).then((e) => (r(...e), f));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "index.css", revision: "3baeefff606f0fb9d246c3994d929eef" },
        { url: "index.html", revision: "baa0fc033ff90be5e21a5b0b0bfb24f0" },
        { url: "main.js", revision: "1275ec277fbec8d58b38f823bd10e570" },
        { url: "registerSW.js", revision: "a0c2e0b745147b505d346f622f79793e" },
        {
          url: "assets/192x192.png",
          revision: "c1be28e7640651b19e90fe9b6aeee71a",
        },
        {
          url: "assets/512x512.png",
          revision: "7d967304636e836711750eb96415edf1",
        },
        {
          url: "manifest.webmanifest",
          revision: "52d3d354d4d515bab1514897552dd263",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
