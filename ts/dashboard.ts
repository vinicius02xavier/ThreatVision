import type { CVE } from "./types";


export function calculateStats(cves: CVE[]): Dashboard {
    return cves.reduce((acc, cve) => {
        switch (cve.severity.toLowerCase()) {
            case "critical":
                acc.critical++;
                break;
            case "high":
                acc.high++;
                break;
            case "medium":
                acc.medium++;
                break;
            case "low":
                acc.low++;
                break;
        }
        return acc;
    },
        {
            total: cves.length,
            critical: 0,
            high: 0,
            medium: 0,
            low: 0
        });
}


export function updateStats(cves: CVE[]): void {
    const totalColumn = document.getElementById("total-count");
    const criticalColumn = document.getElementById("critical-count");
    const highColumn = document.getElementById("high-count");
    const mediumColumn = document.getElementById("medium-count");
    const lowColumn = document.getElementById("low-count");

    if (!totalColumn || !criticalColumn || !highColumn || !mediumColumn || !lowColumn) return;

    const stats = calculateStats(cves);

    totalColumn.textContent = cves.length.toString();
    criticalColumn.textContent = stats.critical.toString();
    highColumn.textContent = stats.high.toString();
    mediumColumn.textContent = stats.medium.toString();
    lowColumn.textContent = stats.low.toString();
}


export interface Dashboard {
    total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
}