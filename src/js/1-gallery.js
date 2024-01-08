
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { images } from './gallery';

console.log(images);

const gallaryList = document.querySelector('.gallery');
const typset = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                loading="lazy"
                class="gallery__image"
                src="${preview}"               
                alt="${description}"
            />
        </a>
    </li>`;
}).join('');

  gallaryList.innerHTML = typset;
  const lightbox = new SimpleLightbox('.gallery a', {
//   caption: true,
  captionDelay: 250,
  fadeSpeed: 250,
//   captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
}); 
