export async function exportElementToPdf(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) return;

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas-pro"), import("jspdf")]);

  const canvas = await html2canvas(element, {
    backgroundColor: getComputedStyle(document.body).backgroundColor || "#0a0a0a",
    scale: 1.5,
    useCORS: true,
    // Chromium treats html2canvas's rasterized inline SVGs (our Lucide icons) as
    // tainting the canvas even though they're same-origin, which blocks toDataURL().
    // Dropping them from the capture keeps export working; the illustration still
    // renders its gradient, code, and spirit-animal label without the icon glyph.
    foreignObjectRendering: false,
    ignoreElements: (node) => node.tagName?.toLowerCase() === "svg",
  });

  // JPEG at high quality is dramatically smaller than PNG for this gradient/text content
  // (multi-MB vs a few hundred KB), which matters a lot on a slow connection.
  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const pdf = new jsPDF({
    orientation: canvas.width > canvas.height ? "landscape" : "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
  pdf.save(filename);
}
