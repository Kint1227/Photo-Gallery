const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = '/images/cover_episode-${i}.jpg';
  image.alt = 'Cover for Episode ${i} of the Compressed.fm podcast';
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {
    // popup stuff
    popup.style.transforms = 'translateY(0)';
    selectedImage.src = '/images/cover_episode-${i}.jpg';
    selectedImage.Image.alt = 'cover for Episode ${i} of the compressed.fm podcast';
  });

  gallery.appendChild(image);
});

popup.addEventListener('click', () => {
  popup.style.transform = 'translateY(-100%)';
  popup.src = '';
  popup.alt = '';
})
