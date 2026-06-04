import type { CVE } from "./types";
export declare function calculateStats(cves: CVE[]): Dashboard;
export declare function updateStats(cves: CVE[]): void;
export interface Dashboard {
    total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
}
//# sourceMappingURL=dashboard.d.ts.map