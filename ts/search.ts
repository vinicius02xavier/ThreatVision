import type { CVE } from "./types";


export function searchCVEs(cves: CVE[], query: string): CVE[] {
    const q = query.toLowerCase();

    return cves.filter(cve =>
        cve.id.toLowerCase().includes(q) ||
        cve.description.toLowerCase().includes(q) ||
        cve.severity.toLowerCase().includes(q) ||
        cve.published.toLowerCase().includes(q)
    );
}


export function saveSearchQuery(query: string): void {
    let history = JSON.parse(localStorage.getItem("searchHistory") || "[]");

    history.unshift(query);
    history = history.slice(0, 10);

    localStorage.setItem("searchHistory", JSON.stringify(history));
}


export function getSearchHistory(): string[] {
    return JSON.parse(localStorage.getItem("searchHistory") || "[]");
}