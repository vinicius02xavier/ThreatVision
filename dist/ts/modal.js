export function initializeModal() {
    const modal = document.getElementById("cve-modal");
    const closeBtn = document.getElementById("close-modal");
    if (!modal || !closeBtn)
        return;
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}
export function showDetails(cve) {
    const modal = document.getElementById("cve-modal");
    const modalId = document.getElementById("modal-cve-id");
    const modalDescription = document.getElementById("modal-description");
    const modalCvss = document.getElementById("modal-cvss");
    const modalSeverity = document.getElementById("modal-severity");
    const modalDate = document.getElementById("modal-date");
    if (!modal || !modalId || !modalDescription || !modalCvss || !modalSeverity || !modalDate) {
        return;
    }
    modalId.textContent = cve.id;
    modalDescription.textContent = cve.description;
    modalCvss.textContent = String(cve.cvss);
    modalSeverity.textContent = cve.severity;
    modalDate.textContent = new Date(cve.published).toLocaleDateString();
    if (!modal.open) {
        modal.showModal();
    }
}
export function hideDetails() {
    const modal = document.getElementById("cve-modal");
    if (!modal)
        return;
    modal.close();
}
//# sourceMappingURL=modal.js.map