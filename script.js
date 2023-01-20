let slideIndex = 0;
showSlides();

function showSlides() {
  let dots = document.getElementsByClassName("dot");
  slideIndex++;
  if (slideIndex > dots.length) {slideIndex = 1}
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000);
}
