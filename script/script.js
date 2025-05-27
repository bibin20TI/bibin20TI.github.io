// Efek hover gambar profil
const gambar = document.querySelector('#gambar');

gambar.addEventListener('mouseenter', () => {
  gambar.classList.add('gambar');
});

gambar.addEventListener('mouseleave', () => {
  gambar.classList.remove('gambar');
});

// Galeri thumbnail klik
const container = document.querySelector('#container');
const gede = document.querySelector('.gede');

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('box')) {
    gede.src = event.target.src;
  }
});
