export function initializeFavorites(): void {
    const favoriteBtns = document.querySelectorAll<HTMLButtonElement>(".favorite-btn");

    favoriteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const cveId = btn.dataset.cveId;

            if (!cveId) return;

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
        })
    })
}

function getFavorites(): string[] {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function saveFavorites(favorites: string[]): void {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function toggleFavorite(cveId: string): void {
    let favorites = getFavorites();

    if(favorites.includes(cveId)) {
        favorites = favorites.filter(id => id !== cveId);
    }
    else {
        favorites.push(cveId);
    }

    saveFavorites(favorites);
}

export function isFavorite(cveId: string): boolean {
    return getFavorites().includes(cveId);
}