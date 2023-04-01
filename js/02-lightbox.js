import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

// Создание разметки элементов галереи из массива данных
const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`).join('');

// Вставка разметки в список ul.gallery(html)
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Обработка кликов 
gallery.addEventListener('click', evt => {
  evt.preventDefault(); // Запрещаем переход по ссылке

  
 
    let instance = new SimpleLightbox('.gallery a', { captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  docClose: true,
  swipeClose: true,
  overlayOpacity:0.7,
  closeOnEscape: true, });
  instance.show();
});


