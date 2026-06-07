export function filterCVEs(cves, severity) {
    if (severity === "all") {
        return cves;
    }
    return cves.filter(cve => cve.severity.toLowerCase() === severity.toLowerCase());
}
//# sourceMappingURL=filters.js.map