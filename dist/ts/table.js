import { isFavorite } from "./favorites.js";
import { showDetails } from "./modal.js";
export function renderTable(cves) {
    const tbody = document.getElementById("cve-table-body");
    if (!tbody)
        return;
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
        row.addEventListener("click", (event) => {
            const target = event.target;
            // ignore clicks on the favorite checkbox
            if (target.closest(".favorite-checkbox")) {
                return;
            }
            toggleDetailsRow(row, cve, tbody);
        });
        tbody.appendChild(row);
    });
}
function toggleDetailsRow(row, cve, tbody) {
    const next = row.nextElementSibling;
    // if the next row is already the details for this CVE, remove it (toggle)
    if (next && next.classList.contains("details-row")) {
        next.remove();
        return;
    }
    // remove any other open details row
    const open = tbody.querySelector(".details-row");
    if (open)
        open.remove();
    const detailsRow = document.createElement("tr");
    detailsRow.classList.add("details-row");
    detailsRow.innerHTML = `
    <td colspan="5">
      <div class="details-content">
        <h4>${cve.id}</h4>
        <p>${cve.description}</p>
        <div class="details-meta">
          <span><strong>CVSS:</strong> ${cve.cvss}</span>
          <span><strong>Severidade:</strong> ${cve.severity}</span>
          <span><strong>Publicado:</strong> ${new Date(cve.published).toLocaleDateString()}</span>
        </div>
      </div>
    </td>
  `;
    if (row.nextSibling) {
        tbody.insertBefore(detailsRow, row.nextSibling);
    }
    else {
        tbody.appendChild(detailsRow);
    }
}
export function clearTable() {
    const tbody = document.getElementById("cve-table-body");
    if (!tbody)
        return;
    tbody.innerHTML = "";
}
//# sourceMappingURL=table.js.map