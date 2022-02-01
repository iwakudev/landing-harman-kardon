document.addEventListener("DOMContentLoaded", function() {
  function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
      $('.navbar.fixed-top').toggleClass('mobile');
    }
  }

  $(window).on("load", mobileViewUpdate);
  $(window).on("resize", mobileViewUpdate);

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
});