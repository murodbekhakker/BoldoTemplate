// *****************************************hamburger*****************************************************
let hamburger = document.querySelector(".hamburger");
let navMenus = document.querySelector(".nav-menus");

hamburger.addEventListener("click", () => {
  navMenus.classList.toggle("active");
  if (navMenus.classList.contains("active")) {
    hamburger.classList.replace("fa-bars", "fa-x");
  } else {
    hamburger.classList.replace("fa-x", "fa-bars");
  }
});
// *****************************************dark-mode*****************************************************

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// *****************************************carousel******************************************************
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Cheksiz aylanish
    margin: 70, // Slaydlar orasidagi bo'sh joy
    nav: false, // Tugmachalarni o'chirish
    autoplay: true, // Avtomatik o'zgarish
    autoplayTimeout: 1000, // Har 3 soniyada slaydni o'zgartirish
    autoplayHoverPause: true, // Hover qilinganida to'xtash
    responsive: {
      0: {
        items: 2, // Mobil qurilmalarda 1 ta slayd
      },
      600: {
        items: 2, // Tablet qurilmalarda 2 ta slayd
      },
      1000: {
        items: 5, // Katta ekranlarda 3 ta slayd
      },
    },
  });
});
// ***************************************loading*********************************************************
const loading = document.getElementById("loading");

const loadingDuration = 1800; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
//******************************************bectop********************************************************
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function () {
  const scrollStep = -window.scrollY / (10 / 180);
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
};
