const copyButton = document.getElementById("copyIp");
const copyMessage = document.getElementById("copyMessage");
const serverIp = "play.primemc.space";

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(serverIp);
    copyMessage.textContent = "Server IP copied.";
    copyButton.textContent = "COPIED";
    setTimeout(() => {
      copyMessage.textContent = "";
      copyButton.textContent = "COPY";
    }, 1800);
  } catch {
    copyMessage.textContent = "Copy failed — select the IP manually.";
  }
});
