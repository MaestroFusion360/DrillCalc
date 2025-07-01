if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/DrillCalc/sw.js", {
      scope: "/DrillCalc/",
    });
  });
}
