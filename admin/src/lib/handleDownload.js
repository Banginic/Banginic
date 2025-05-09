function handleDownload(fileUrl) {
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "cv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default handleDownload;
