import type { CVE } from "./types";
import { isFavorite } from "./favorites.js";


export function renderTable(cves: CVE[]): void {
  const tbody = document.getElementById("cve-table-body") as HTMLTableSectionElement | null;

  if (!tbody) return;

  tbody.innerHTML = "";

  cves.forEach(cve => {
    const row = document.createElement("tr");

    row.classList.add("cve-row");
    row.classList.add(`severity-${cve.severity.toLowerCase()}`);
    row.dataset.cveId = cve.id;

    const favorited = isFavorite(cve.id);

    row.innerHTML = `
      <td>${cve.id}</td>
      <td>${cve.cvss}</td>
      <td>${cve.severity}</td>
      <td>${new Date(cve.published).toLocaleDateString()}</td>
      <td class="favorite-cell">
        <input
          type="checkbox"
          class="favorite-checkbox"
          data-cve-id="${cve.id}"
          aria-pressed="${favorited}"
          ${favorited ? "checked" : ""}
        />
      </td>
    `;

    row.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest(".favorite-checkbox")) {
        return;
      }

      toggleDetailsRow(row, cve, tbody);
    });

    tbody.appendChild(row);
  });
}


function toggleDetailsRow(row: HTMLTableRowElement, cve: CVE, tbody: HTMLTableSectionElement) {
  const next = row.nextElementSibling as HTMLTableRowElement | null;

  if (next && next.classList.contains("details-row")) {
    next.remove();
    return;
  }

  const open = tbody.querySelector(".details-row");

  if (open) open.remove();

  const detailsRow = document.createElement("tr");

  detailsRow.classList.add("details-row");

  detailsRow.innerHTML = `
    <td colspan="5">
      <div class="details-content">
        <h4>${cve.id}</h4>
        <p>${cve.description}</p>
        <div class="details-meta">
          <span><strong>CVSS:</strong> ${cve.cvss}</span>
          <span><strong>Severity:</strong> ${cve.severity}</span>
          <span><strong>Published In:</strong> ${new Date(cve.published).toLocaleDateString()}</span>
        </div>
      </div>
    </td>
  `;

  if (row.nextSibling) {
    tbody.insertBefore(detailsRow, row.nextSibling);
  } else {
    tbody.appendChild(detailsRow);
  }
}


export function clearTable(): void {
  const tbody = document.getElementById("cve-table-body") as HTMLTableSectionElement | null;

  if (!tbody) return;

  tbody.innerHTML = "";
}