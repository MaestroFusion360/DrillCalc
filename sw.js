if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = i), (e.onload = s), document.head.appendChild(e));
        } else ((e = i), importScripts(i), s());
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[o]) return;
    let t = {};
    const l = (e) => i(e, o),
      c = { module: { uri: o }, exports: t, require: l };
    s[o] = Promise.all(n.map((e) => c[e] || l(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-8c29f6e4"], function (e) {
  "use strict";
  (self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "registerSW.js", revision: "a0c2e0b745147b505d346f622f79793e" },
        {
          url: "manifest.webmanifest",
          revision: "62b0770a5b7717e8471192cc75864df4",
        },
        { url: "main.js", revision: "9bad4574823cbb9216b7765073860d7e" },
        { url: "index.html", revision: "cd1c1789de79c5e14e8c98a39831e112" },
        { url: "index.css", revision: "45c72801fb543887667480dad8d1b904" },
        { url: "assets/icon.svg", revision: null },
        { url: "assets/favicon.ico", revision: null },
        { url: "assets/apple-touch-icon.png", revision: null },
        { url: "assets/512x512.png", revision: null },
        { url: "assets/192x192.png", revision: null },
        {
          url: "manifest.webmanifest",
          revision: "62b0770a5b7717e8471192cc75864df4",
        },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html")),
    ));
});
