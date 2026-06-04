export function initializeModal() {
    const modal = document.getElementById("cve-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    if (!modal || !closeBtn)
        return;
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
export function showDetails(cve) {
    const detailsDiv = document.getElementById("cve-details");
    if (!detailsDiv)
        return;
    detailsDiv.innerHTML = `
    <h3>${cve.id}</h3>
    <p><strong>Description:</strong> ${cve.description}</p>
    <p><strong>CVSS Score:</strong> ${cve.cvss}</p>
    <p><strong>Severity:</strong> ${cve.severity}</p>
    <p><strong>Published:</strong> ${new Date(cve.published).toLocaleDateString()}</p>
  `;
    detailsDiv.style.display = "block";
}
export function hideDetails() {
    const detailsDiv = document.getElementById("cve-details");
    if (!detailsDiv)
        return;
    detailsDiv.style.display = "none";
}
//# sourceMappingURL=modal.js.map