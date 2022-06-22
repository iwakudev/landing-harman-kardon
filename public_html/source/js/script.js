$(document).ready(function () {
  function mobileViewUpdate() {
    const viewportWidth = $(window).width();
    viewportWidth <= 768
      ? $(".navbar.fixed-top").addClass("mobile")
      : $(".navbar.fixed-top").removeClass("mobile");
  }

  $(window).on("load", mobileViewUpdate);
  $(window).on("resize", mobileViewUpdate);

  mobileViewUpdate();
});
