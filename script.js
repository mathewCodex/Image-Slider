"use Strict";
let slideIndex = 1;
showSlides(slideIndex);

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((el) => {
    el.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);
