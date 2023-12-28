   var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    icons.addEventListener("click",() => {
      nav.classList.toggle("active");
  })
  