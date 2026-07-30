const filterButtons = document.querySelectorAll(".filter-btn");
const inventoryCards = document.querySelectorAll(".inventory-card");
const searchInput = document.getElementById("search");

function applyInventoryFilter() {
  const activeFilter =
    document.querySelector(".filter-btn.active")?.textContent.trim() || "All";
  const searchValue = (searchInput?.value || "").trim().toLowerCase();

  inventoryCards.forEach((card) => {
    const category = card.dataset.category || "";
    const name = (card.dataset.name || "").toLowerCase();
    const matchesCategory = activeFilter === "All" || category === activeFilter;
    const matchesSearch = !searchValue || name.includes(searchValue);

    card.hidden = !(matchesCategory && matchesSearch);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) =>
      btn.classList.toggle("active", btn === button),
    );
    applyInventoryFilter();
  });
});

searchInput?.addEventListener("input", applyInventoryFilter);

document.querySelectorAll(".mark-used").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".inventory-card");
    if (!card) return;

    card.classList.toggle("used");
    const isUsed = card.classList.contains("used");

    button.textContent = isUsed ? "Used" : "Mark used";
    button.disabled = isUsed;
    button.style.opacity = isUsed ? "0.7" : "1";
  });
});
