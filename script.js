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

let dotIndex = 0;
dotAnimation();
function dotAnimation() {
  let dots = document.getElementsByClassName("dot1");
  dotIndex++;
  if (dotIndex > dots.length) {dotIndex = 1}
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[dotIndex-1].className += " active";
  setTimeout(dotAnimation, 1000);
}

let dotIndex2 = 0;
dotAnimation2();
function dotAnimation2() {
  let dots = document.getElementsByClassName("dot2");
  dotIndex2++;
  if (dotIndex2 > dots.length) {dotIndex2 = 1}
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[dotIndex2-1].className += " active";
  setTimeout(dotAnimation2, 1000);
}

let dotIndex3 = 0;
dotAnimation3();
function dotAnimation3() {
  let dots = document.getElementsByClassName("dot3");
  dotIndex3++;
  if (dotIndex3 > dots.length) {dotIndex3 = 1}
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[dotIndex3-1].className += " active";
  setTimeout(dotAnimation3, 1000);
}


