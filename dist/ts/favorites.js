export function initializeFavorites() {
    const favoriteBtns = document.querySelectorAll(".favorite-btn");
    favoriteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const cveId = btn.dataset.cveId;
            if (!cveId)
                return;
            let favorites = getFavorites();
            if (favorites.includes(cveId)) {
                favorites = favorites.filter(id => id !== cveId);
                btn.classList.remove("favorited");
            }
            else {
                favorites.push(cveId);
                btn.classList.add("favorited");
            }
            saveFavorites(favorites);
        });
    });
}
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
//# sourceMappingURL=favorites.js.map