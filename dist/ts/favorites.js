function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}
function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}
export function toggleFavorite(cveId) {
    let favorites = getFavorites();
    if (favorites.includes(cveId)) {
        favorites = favorites.filter(id => id !== cveId);
    }
    else {
        favorites.push(cveId);
    }
    saveFavorites(favorites);
}
export function isFavorite(cveId) {
    return getFavorites().includes(cveId);
}
export function renderFavorites(cves) {
    const favoritesList = document.getElementById("favorites-list");
    if (!favoritesList)
        return;
    const favorites = getFavorites();
    const favoriteItems = favorites
        .map(id => cves.find(cve => cve.id === id))
        .filter((cve) => Boolean(cve));
    if (favoriteItems.length === 0) {
        favoritesList.innerHTML = `<p class="text-muted">No favorites selected.</p>`;
        return;
    }
    favoritesList.innerHTML = favoriteItems.map(cve => `
            <div class="favorite-item" data-cve-id="${cve.id}">
                <strong>${cve.id}</strong>
                <p>${cve.severity} • ${new Date(cve.published).toLocaleDateString()}</p>
            </div>
        `).join("");
    favoritesList.querySelectorAll(".favorite-item").forEach(el => {
        el.addEventListener("click", () => {
            const id = el.getAttribute("data-cve-id");
            if (!id)
                return;
            const row = document.querySelector(`tr[data-cve-id="${id}"]`);
            if (!row)
                return;
            row.click();
            row.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });
}
//# sourceMappingURL=favorites.js.map