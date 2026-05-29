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
    non è un caso che tu sia arrivatə qui.

    (qui scrivi tutto il testo che vuoi, anche su più righe)
  `;

  // Frasi che possono comparire in sottotitolo in modo “glitch”
  const glitchSubtitles = [
    "ti stanno osservando.",
    "non tornare indietro.",
    "non dire a nessuno di questo posto.",
    "sei sicurə di essere solə?",
    "il rumore non viene da fuori."
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
