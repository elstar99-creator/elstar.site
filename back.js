// Ambil path URL (folder atau file)
const path = window.location.pathname;

// Jika bukan "/" atau "/index.html", tampilkan tombol Back
if (path !== "/" && path !== "/index.html") {
  const backNav = document.createElement("div");
  backNav.innerHTML = `
    <nav class="back-navbar">
      <a href="/index.html" class="back-btn">⬅️ Kembali</a>
    </nav>
  `;
  document.body.prepend(backNav);
}
