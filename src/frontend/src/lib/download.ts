function triggerDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  a.click();
}

export function downloadFile(src: string, filename: string) {
  triggerDownload(src, filename);
}

export async function downloadFiles(
  files: readonly { src: string; filename: string }[],
  delayMs = 300,
) {
  for (const { src, filename } of files) {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    triggerDownload(url, filename);
    URL.revokeObjectURL(url);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}
