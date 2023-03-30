import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

for (const image of galleryItems) {
  const imgEl = `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
 <img class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
  </div>`;

  galleryEl.insertAdjacentHTML("beforeend", imgEl);
}

galleryEl.onclick = function (event) {
  event.preventDefault();
  const bigImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  bigImg.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      bigImg.close();
    }
  });
};

//OR...all changed

// const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

// const images = galleryItems
//   .map(
//     (photo) =>
//       `<li class="gallery__item"><img class="gallery__image" src="${photo.preview}" data-source="${photo.original}" alt="${photo.description}"/></li>`
//   )
//   .join("");
// console.log(images);
// galleryEl.insertAdjacentHTML("beforeend", images);

//                           ("onclick")
// galleryEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   const bigImg = basicLightbox.create(
//     `<img src="${event.target.dataset.source}">`
//   );
//   bigImg.show();

//   galleryEl.addEventListener("keydown", (event) => {
//     if (event.code === "Escape") {
//       bigImg.close();
//     }
//   });
// });
