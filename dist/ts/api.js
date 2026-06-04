export async function fetchCVEs() {
    return [
        {
            id: "CVE-2026-1234",
            description: "Remote Code Execution",
            cvss: 9.8,
            severity: "Critical",
            published: "2026-06-01"
        },
        {
            id: "CVE-2026-5678",
            description: "Privilege Escalation",
            cvss: 8.1,
            severity: "High",
            published: "2026-05-29"
        },
        {
            id: "CVE-2026-9012",
            description: "Information Disclosure",
            cvss: 6.3,
            severity: "Medium",
            published: "2026-05-20"
        }
    ];
}
//# sourceMappingURL=api.js.map