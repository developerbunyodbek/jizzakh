//! SELECTORS
const elToTop = document.querySelector(".back-to-top");
// NAVBAR
const btn = document.querySelector("#checkbox");
const navbarList = document.querySelector(".navbar");
const navbar = document.querySelector(".header");
const navBtn = document.querySelector(".nav-btn");
// DARK
const dark = document.querySelector(".dark-button");
// CAROUSEL
const carousel = document.querySelector("[data-carousel]");
const slides = document.getElementsByClassName("carousel-cell");
const flkty = new Flickity(carousel, options);
// TABS
const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".tabs-div");

// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// HAMBURGER MENU
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("toggle");
  navbarList.classList.toggle("nav-active");
});

// TABS
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    content.forEach((content) => {
      content.classList.remove("active");
    });
    content[index].classList.add("active");
  });
});

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// NAVBAR
window.addEventListener("scroll", function () {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 10);
});

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

// SLIDER
flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    let image = slides[i];
    let x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

// TO TOP SCROLL
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    elToTop.classList.add("aktive");
  } else {
    elToTop.classList.remove("aktive");
  }
});

// AOS
AOS.init();
