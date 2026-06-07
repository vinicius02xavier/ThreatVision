export function searchCVEs(cves, query) {
    const q = query.toLowerCase();
    return cves.filter(cve => cve.id.toLowerCase().includes(q) ||
        cve.description.toLowerCase().includes(q) ||
        cve.severity.toLowerCase().includes(q) ||
        cve.published.toLowerCase().includes(q));
}
export function saveSearchQuery(query) {
    let history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    history.unshift(query);
    history = history.slice(0, 10);
    localStorage.setItem("searchHistory", JSON.stringify(history));
}
export function getSearchHistory() {
    return JSON.parse(localStorage.getItem("searchHistory") || "[]");
}
//# sourceMappingURL=search.js.map