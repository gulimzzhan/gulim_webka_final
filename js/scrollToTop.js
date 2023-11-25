window.addEventListener("scroll", function () {
     let scrollToTopButton = document.querySelector(".scrollTop");

     if (window.pageYOffset > 600) {
          scrollToTopButton.style.opacity = 100;
     } else {
          scrollToTopButton.style.opacity = 0;
     }
});

function scrollToTop() {
     window.scrollTo({
          top: 0,
     });
}
