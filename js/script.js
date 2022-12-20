$(function () {
  $(".video-play").on("click", function () {
    $(this).parent().css("display", "none");
    $("#my-video_html5_api").click();
  });
  $("#carousel1").owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    margin: 10,
    nav: false,
    items: 1,
    animateOut: "animate__fadeOut",
    animateIn: "animate__fadeIn",
  });
});
