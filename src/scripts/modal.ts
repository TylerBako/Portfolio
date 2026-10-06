/**
 * Close a full-screen .modal dialog when the backdrop is clicked.
 *
 * The dialog fills the viewport, so a click that both starts and ends on it
 * (not on the panel) is a backdrop click. Tracking pointerdown avoids closing
 * when a drag starts inside the panel and ends outside it.
 */
export function closeOnBackdropClick(dialog: HTMLDialogElement) {
  let downOnBackdrop = false;
  dialog.addEventListener('pointerdown', (e) => { downOnBackdrop = e.target === dialog; });
  dialog.addEventListener('click', (e) => {
    if (downOnBackdrop && e.target === dialog) dialog.close();
    downOnBackdrop = false;
  });
}
