import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

// Создание разметки элементов галереи из массива данных
const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`).join('');

// Вставка разметки в список ul.gallery(html)
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Обработка кликов 
gallery.addEventListener('click', evt => {
  evt.preventDefault(); // Запрещаем переход по ссылке

  // Проверяем, клик по нужному элементу (img.gallery__image)
  const clickedImage = evt.target.closest('.gallery__image');
  if (!clickedImage) return;

  // ссылка на большое изображение из атрибута data-source
  const largeImageURL = clickedImage.dataset.source;

  // Создаем и открываем модальное окно с изображением, используем библиотеку basicLightbox
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${clickedImage.alt}">
  `, {
    onShow: (instance) => {
      document.addEventListener('keydown', closeModal);
    },
    onClose: (instance) => {'keydown', closeModal},
  });
  function closeModal(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
  instance.show();
  
//   // закрытие модального окна по нажатию клавиши Escape
//   const closeOnEscape = evt => {
//   if (evt.code === 'Escape') {
//     instance.close();
//     document.removeEventListener('keydown', closeOnEscape);
//   }
// };

// document.addEventListener('keydown', closeOnEscape);

});
  
