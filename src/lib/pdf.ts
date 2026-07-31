const PAGE_MARGIN_MM = 12;
const BLOCK_GAP_MM = 4;

export async function exportElementToPdf(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) return;

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas-pro"), import("jspdf")]);

  const captureOptions = {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true,
    // Chromium treats html2canvas's rasterized inline SVGs (our Lucide icons) as
    // tainting the canvas even though they're same-origin, which blocks toDataURL().
    // Dropping them from the capture keeps export working; the illustration still
    // renders its gradient, code, and spirit-animal label without the icon glyph.
    foreignObjectRendering: false,
    ignoreElements: (node: Element) => node.tagName?.toLowerCase() === "svg",
  } as const;

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const contentWidth = pageWidth - PAGE_MARGIN_MM * 2;
  const usableHeight = pageHeight - PAGE_MARGIN_MM * 2;

  // Each top-level "data-pdf-block" (masthead, hero, dimension scores, each result section, ...)
  // is captured and placed independently, walking a cursor down the current page and starting a
  // fresh page whenever a whole block wouldn't fit — rather than screenshotting the entire report
  // as one tall image and slicing it by raw pixel height, which cuts lines of text in half
  // wherever a page boundary happens to land.
  const blocks = Array.from(element.querySelectorAll<HTMLElement>("[data-pdf-block]"));
  const targets = blocks.length > 0 ? blocks : [element];

  // Tracks how far down the CURRENT page we've drawn; always starts a fresh page at the top
  // margin, so cursorY === PAGE_MARGIN_MM is the reliable signal for "this page is still empty."
  let cursorY = PAGE_MARGIN_MM;

  for (const block of targets) {
    const canvas = await html2canvas(block, captureOptions);
    const imgData = canvas.toDataURL("image/jpeg", 0.92);
    const imgHeight = (canvas.height * contentWidth) / canvas.width;

    if (imgHeight > usableHeight) {
      // Rare: a single block (e.g. an unusually long paragraph) is taller than one whole page,
      // so it genuinely has to span pages. Start it at the top of a fresh page (unless the
      // current page is still empty) and slice it by full page height from there — the only
      // place a line can still get cut is inside this one oversized block, not at arbitrary
      // points across the whole document.
      if (cursorY > PAGE_MARGIN_MM) {
        pdf.addPage();
        cursorY = PAGE_MARGIN_MM;
      }

      let heightLeft = imgHeight;
      let position = PAGE_MARGIN_MM;
      pdf.addImage(imgData, "JPEG", PAGE_MARGIN_MM, position, contentWidth, imgHeight);
      heightLeft -= usableHeight;
      while (heightLeft > 0) {
        position = PAGE_MARGIN_MM + (heightLeft - imgHeight);
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", PAGE_MARGIN_MM, position, contentWidth, imgHeight);
        heightLeft -= usableHeight;
      }
      cursorY = pageHeight; // force the next block onto a new page
      continue;
    }

    if (cursorY > PAGE_MARGIN_MM && cursorY + imgHeight > pageHeight - PAGE_MARGIN_MM) {
      pdf.addPage();
      cursorY = PAGE_MARGIN_MM;
    }

    pdf.addImage(imgData, "JPEG", PAGE_MARGIN_MM, cursorY, contentWidth, imgHeight);
    cursorY += imgHeight + BLOCK_GAP_MM;
  }

  pdf.save(filename);
}
