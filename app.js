// Scripted product-tour logic. No network calls anywhere in this file.

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

let creditsBalance = DEMO.credits;

function renderCreditsBanner() {
  document.querySelectorAll(".credits-value").forEach(el => {
    el.textContent = creditsBalance.toLocaleString();
  });
}

function renderPackages() {
  const grid = document.getElementById("pricing-grid");
  grid.innerHTML = DEMO.packages.map(p => `
    <div class="plan${p.featured ? " is-pro" : ""}">
      <h3>${escapeHtml(p.name)}</h3>
      <div class="price">${escapeHtml(p.price)}</div>
      <div>${escapeHtml(p.credits)}</div>
      <p>${escapeHtml(p.note)}</p>
    </div>
  `).join("");
}

function renderLibrary() {
  const list = document.getElementById("library-list");
  list.innerHTML = DEMO.library.map(item => `
    <div class="library-item${item.isNew ? " is-new" : ""}">
      <div>
        <div class="library-item__title">${escapeHtml(item.title)}</div>
        <div class="library-item__meta">${escapeHtml(item.date)}</div>
      </div>
      <button class="btn" data-export="${escapeHtml(item.title)}">Export PDF</button>
    </div>
  `).join("");
}

function renderClientUpdates() {
  document.getElementById("client-name").textContent = DEMO.client.name;
  const list = document.getElementById("updates-list");
  list.innerHTML = DEMO.client.updates.map(u => `
    <div class="update-item">
      <time>${escapeHtml(u.date)}</time>
      <div>${escapeHtml(u.text)}</div>
    </div>
  `).join("");
}

function switchTab(tabId) {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("is-active", t.dataset.tab === tabId));
  document.querySelectorAll(".panel").forEach(p => p.classList.toggle("is-active", p.id === `panel-${tabId}`));
}

function runGenerator(e) {
  e.preventDefault();
  const btn = document.getElementById("generate-btn");
  const status = document.getElementById("generate-status");
  const topic = document.getElementById("topic-input").value.trim() || "5 Ways to Improve Local SEO in 2026";

  btn.disabled = true;
  status.innerHTML = '<span class="spinner"></span> Checking credit balance...';

  setTimeout(() => {
    creditsBalance -= 100;
    renderCreditsBanner();
    status.innerHTML = '<span class="spinner"></span> Generating post (this can take a minute)...';
  }, 700);

  setTimeout(() => {
    status.innerHTML = '<span class="spinner"></span> Formatting and saving to your library...';
  }, 1900);

  setTimeout(() => {
    DEMO.library.unshift({ title: topic, date: "just now", isNew: true });
    renderLibrary();
    status.textContent = "Done — see it in your Blog Library below.";
    btn.disabled = false;
  }, 2900);
}

function handleExportClick(e) {
  const btn = e.target.closest("[data-export]");
  if (!btn) return;
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Exporting...";
  setTimeout(() => {
    btn.textContent = "Downloaded ✓";
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 1500);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCreditsBanner();
  renderPackages();
  renderLibrary();
  renderClientUpdates();

  document.querySelectorAll(".tab").forEach(t => {
    t.addEventListener("click", () => switchTab(t.dataset.tab));
  });
  document.getElementById("generator-form").addEventListener("submit", runGenerator);
  document.getElementById("library-list").addEventListener("click", handleExportClick);
  document.getElementById("redeem-btn").addEventListener("click", () => {
    const input = document.getElementById("redeem-input");
    const note = document.getElementById("redeem-note");
    if (!input.value.trim()) {
      note.textContent = "Enter a redemption code first.";
      return;
    }
    note.textContent = "This is a demo — no real code is validated here.";
  });
});
