import { fetchCVEs } from "./api.js";
import { renderSeverityChart } from "./charts.js";
import { updateStats } from "./dashboard.js";
import { initializeFavorites } from "./favorites.js";
import { initializeModal } from "./modal.js";
import { renderTable } from "./table.js";
async function main() {
    try {
        showLoading();
        console.log("ThreatVision iniciado.");
        let cves;
        try {
            cves = await fetchCVEs();
        }
        catch (error) {
            console.warn("Falha ao carregar API, usando dados locais", error);
            cves = getMockData();
        }
        updateStats(cves);
        renderTable(cves);
        renderSeverityChart(cves);
        initializeModal();
        initializeFavorites();
        hideLoading();
        console.log(`ThreatVision carregado com ${cves.length} vulnerabilidades.`);
    }
    catch (error) {
        console.error("Erro ao iniciar a aplicação:", error);
        showError("Não foi possível carregar dados de vulnerabilidades.");
    }
}
function showLoading() {
    const tbody = document.getElementById("cve-table-body");
    if (!tbody)
        return;
    tbody.innerHTML = `
    <tr>
      <td colspan="5">Carregando dados...</td>
    </tr>
  `;
}
function hideLoading() {
    console.log("Dados carregados.");
}
function showError(message) {
    const tbody = document.getElementById("cve-table-body");
    if (!tbody)
        return;
    tbody.innerHTML = `
    <tr>
      <td colspan="5">${message}</td>
    </tr>
  `;
}
function getMockData() {
    return [
        {
            id: "CVE-2026-1234",
            description: "Remote code execution vulnerability in web application.",
            cvss: 9.8,
            severity: "Critical",
            published: "2026-06-01"
        },
        {
            id: "CVE-2026-5678",
            description: "Privilege escalation vulnerability.",
            cvss: 8.4,
            severity: "High",
            published: "2026-05-28"
        },
        {
            id: "CVE-2026-9012",
            description: "Information disclosure vulnerability.",
            cvss: 6.5,
            severity: "Medium",
            published: "2026-05-20"
        }
    ];
}
document.addEventListener("DOMContentLoaded", () => {
    main();
});
//# sourceMappingURL=main.js.map