$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".nav").classList.add("nav--visible");
    document
      .querySelector(".nav__button")
      .classList.add("nav__button--visible");
    document
      .querySelector(".nav__button")
      .classList.add("nav__button--visible");
    document.querySelector(".nav__close").classList.add("nav__close--visible");
    document.body.classList.add("lock");
  });

  var closeMenuButton = document.querySelector(".nav__close");
  closeMenuButton.addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("nav--visible");
    document
      .querySelector(".nav__button")
      .classList.remove("nav__button--visible");
    document
      .querySelector(".nav__button")
      .classList.remove("nav__button--visible");
    document
      .querySelector(".nav__close")
      .classList.remove("nav__close--visible");
    document.body.classList.remove("lock");
  });

  $(".tabs-content__item").not(":first").hide();
  $(".trends__wrapper .tabs__tab")
    .click(function () {
      $(".trends__wrapper .tabs__tab")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(".tabs-content__item").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("active");

  var reviewsSwiper = new Swiper(".reviews__swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    autoHeight: true,

    autoplay: {
      delay: 7000,
    },
  });

  $(".reviews__swiper").mouseenter(function () {
    reviewsSwiper.autoplay.stop();
    console.log("slider stopped");
  });

  $(".reviews__swiper").mouseleave(function () {
    reviewsSwiper.autoplay.start();
    console.log("slider started again");
  });
});
