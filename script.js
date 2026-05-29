const input = document.getElementById('input-text');
const output = document.getElementById('output-text');
const button = document.getElementById('generate-btn');

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (!text) {
    output.textContent = 'Inserisci del testo prima.';
    return;
  }

  // Qui potresti aggiungere effetti “glitch/disturbed” se vuoi
  output.textContent = text;
});
