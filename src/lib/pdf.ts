export async function exportElementToPdf(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) return;

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas-pro"), import("jspdf")]);

  const canvas = await html2canvas(element, {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true,
    // Chromium treats html2canvas's rasterized inline SVGs (our Lucide icons) as
    // tainting the canvas even though they're same-origin, which blocks toDataURL().
    // Dropping them from the capture keeps export working; the illustration still
    // renders its gradient, code, and spirit-animal label without the icon glyph.
    foreignObjectRendering: false,
    ignoreElements: (node) => node.tagName?.toLowerCase() === "svg",
  });

  // JPEG at high quality is dramatically smaller than PNG for this text/gradient content
  // (multi-MB vs a few hundred KB), which matters a lot on a slow connection.
  const imgData = canvas.toDataURL("image/jpeg", 0.92);

  // The captured content is one tall image (a full multi-section report, not just the hero
  // card), so it's split across standard A4 pages instead of one giant custom-sized page —
  // the same "slice a tall image across pages" technique jsPDF itself documents, done by
  // re-drawing the same image at a progressively more negative y-offset per page so only the
  // portion inside that page's bounds is visible.
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
}
