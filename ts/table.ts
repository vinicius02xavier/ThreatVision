import type { CVE } from "./types";
import { showDetails } from "./modal.js";

export function renderTable(cves: CVE[]): void {
  const tbody = document.getElementById("cve-table-body") as HTMLTableSectionElement | null;

  if (!tbody) return;

  tbody.innerHTML = "";

  cves.forEach(cve => {
    const row = document.createElement("tr");

    row.classList.add("cve-row");
    row.classList.add(`severity-${cve.severity.toLowerCase()}`);

    row.dataset.cveId = cve.id;

    row.innerHTML = `
      <td>${cve.id}</td>
      <td>${cve.cvss}</td>
      <td>${cve.severity}</td>
      <td>${new Date(cve.published).toLocaleDateString()}</td>
    `;

    row.addEventListener("click", () => {
        showDetails(cve);
    }); 

    tbody.appendChild(row);
  });
}

export function clearTable(): void {
  const tbody = document.getElementById("cve-table-body") as HTMLTableSectionElement | null;

  if (!tbody) return;

  tbody.innerHTML = "";
}