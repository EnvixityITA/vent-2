document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const button = document.getElementById("enterButton");
  const messageContainer = document.getElementById("messageContainer");
  const mainMessageElement = document.getElementById("mainMessage");

  // QUI decidi tu i contenuti del sito
  // Cambia queste stringhe come vuoi

  const titleText = "vent"; // titolo grande
  const subtitleText = "non dovevi arrivare qui."; // sottotitolo iniziale

  // Messaggio creepy / ARG che vuoi far leggere
  const mainMessage = `
    per me la vita ultimamente è veramente pesante,

    mi sta distruggendo...
  `;

  // Frasi che possono comparire in sottotitolo in modo “glitch”
  const glitchSubtitles = [
    "non gli sei mai importata.",
    "ti odiano.",
    "non sei nulla di speciale.",
    "rimarrai sola.",
    "finiscila qui."
  ];

  // Imposta il titolo e sottotitolo iniziali
  title.textContent = titleText;
  subtitle.textContent = subtitleText;

  // Effetto "glitch" random sul sottotitolo
  setInterval(() => {
    const original = subtitleText;
    const random = glitchSubtitles[Math.floor(Math.random() * glitchSubtitles.length)];
    subtitle.textContent = random;

    setTimeout(() => {
      subtitle.textContent = original;
    }, 900);
  }, 7000);

  // Quando cliccano "continua", mostra il messaggio
  button.addEventListener("click", () => {
    mainMessageElement.textContent = mainMessage.trim();
    messageContainer.classList.add("visible");
  });
});
