import type { CVE } from "./types";


export function initializeModal(): void {
  const modal = document.getElementById("cve-modal") as HTMLDialogElement | null;
  const closeBtn = document.getElementById("close-modal");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.close();
  })
}


export function showDetails(cve: CVE): void {
  const modal = document.getElementById("cve-modal") as HTMLDialogElement | null;
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


export function hideDetails(): void {
  const modal = document.getElementById("cve-modal") as HTMLDialogElement | null;

  if (!modal) return;

  modal.close();
}