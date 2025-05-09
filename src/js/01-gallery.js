// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const ul = document.querySelector('.gallery')

const markup = galleryItems.map(({preview,original,description})=>` 
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>` )


ul.insertAdjacentHTML('beforeend',markup.join(''))

new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom'
    });



console.log(galleryItems);
