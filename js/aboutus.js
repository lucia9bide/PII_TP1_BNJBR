const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let offset = 0;
const cardWidth = document.querySelector(".reseñaImg").offsetWidth + 10;

nextBtn.addEventListener("click", () => {
  if (offset > -(carousel.scrollWidth - carousel.clientWidth)) {
    offset -= cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (offset < 0) {
    offset += cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});