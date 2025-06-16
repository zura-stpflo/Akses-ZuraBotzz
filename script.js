const audio = document.getElementById('audio');
const bgColorInput = document.getElementById('bgColor');

// Mulai audio setelah klik pertama
function startAudio() {
  audio.volume = 1;
  audio.play().catch(err => console.warn("Autoplay diblokir oleh browser:", err));
  document.body.removeEventListener('click', startAudio);
}

document.body.addEventListener('click', startAudio);

// Ganti background color saat dipilih
bgColorInput.addEventListener('input', function () {
  document.body.style.backgroundColor = this.value;
  document.body.style.backgroundImage = 'none'; // Hilangkan background.jpg jika diubah manual
});
