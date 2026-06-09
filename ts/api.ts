import type { CVE } from "./types";


const baseUrl = "https://services.nvd.nist.gov/rest/json/cves/2.0";


export async function fetchCVEs(): Promise<CVE[]> {
    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        return data.vulnerabilities.map(
            (item: any): CVE => {
                const cve = item.cve;
                const metric = cve.metrics?.cvssMetricV31?.[0] ?? cve.metrics?.cvssMetricV30?.[0] ?? cve.metrics?.cvssMetricV2?.[0];
                const cvss = metric?.cvssData;
                const severity =
                    metric?.cvssData?.baseSeverity ??
                    metric?.baseSeverity ??
                    "Unknown";

                return {
                    id: cve.id,
                    description: cve.descriptions?.[0]?.value || "Sem descrição",
                    cvss: cvss?.baseScore ?? 0,
                    severity,
                    published: cve.published
                };
            }
        );
    } catch (error) {
        console.error("Erro ao buscar CVEs:", error);

        return [];
    }
}