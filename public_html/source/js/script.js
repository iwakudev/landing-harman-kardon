$(document).ready(function () {
  function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
      $(".navbar.fixed-top").toggleClass("mobile");
    }
  }

  $(window).on("load", mobileViewUpdate);
  $(window).on("resize", mobileViewUpdate);

  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded", 
    duration: 1000,
    easing: "ease-in-out", 
    once: true,
  });
});
