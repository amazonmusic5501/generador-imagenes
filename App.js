const API_URL = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";
const API_KEY = "TU_API_KEY_AQUI"; // la pondrás en el siguiente paso

const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generateBtn");
const statusEl = document.getElementById("status");
const resultImage = document.getElementById("resultImage");

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) {
    statusEl.textContent = "Escribe una descripción.";
    return;
  }

  statusEl.textContent = "Generando imagen...";
  resultImage.src = "";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  const blob = await response.blob();
  resultImage.src = URL.createObjectURL(blob);
  statusEl.textContent = "";
});
