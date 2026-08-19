document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");

  if (utmSource) {
    const waCta = document.getElementById("cta-whatsapp");
    if (waCta)
      waCta.href += (waCta.href.includes("?") ? "&" : "?") + "ref=" + utmSource;
  }
});
