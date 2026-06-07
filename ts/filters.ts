import type { CVE } from "./types";

export function filterCVEs(cves: CVE[], severity: string): CVE[] {
    if (severity === "all") {
        return cves;
    }

    return cves.filter(cve => cve.severity.toLowerCase() === severity.toLowerCase());
}