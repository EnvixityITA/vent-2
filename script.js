document.addEventListener("DOMContentLoaded", () => {
  const messageElement = document.getElementById("message");
  const button = document.getElementById("showMessage");

  // QUI metti il messaggio che vuoi far leggere alla persona
  const customMessage = "Ciao, questo sito l'ho fatto per dirti che ci tengo tantissimo a te ❤️";

  // Se preferisci più messaggi, usa un array:
  // const messages = [
  //   "Messaggio 1 per te...",
  //   "Messaggio 2 per te...",
  //   "Messaggio 3 per te..."
  // ];
  // E scegli l'indice che vuoi mostrare:
  // const customMessage = messages[0];

  button.addEventListener("click", () => {
    messageElement.textContent = customMessage;
  });
});
