//swiper_next_prev_btn
$(".swiper-button-next").on("click", function () {
  const circle = $(".circle");
  circle.css("display", "block");
  circle.removeClass("animation");
  void circle[0].offsetWidth;
  circle.addClass("animation");

  const swiper_text = $(".swiper_text");
  swiper_text.css("display", "none");
  swiper_text.removeClass("circle_text");
  void swiper_text[0].offsetWidth;
  swiper_text.css("display", "block");
  swiper_text > h2.css("top", "block");
  swiper_text > p.css("display", "block");
  swiper_text.addClass("circle_text");
});
$(".swiper-button-prev").on("click", function () {
  const circle = $(".circle");
  circle.css("display", "block");
  circle.removeClass("animation");
  void circle[0].offsetWidth;
  circle.addClass("animation");
  $("#circle_text").css("display", "block");

  const swiper_text = $(".swiper_text");
  swiper_text.css("display", "none");
  swiper_text.removeClass("circle_text");
  void swiper_text[0].offsetWidth;
  swiper_text.css("display", "block");
  swiper_text > h2.css("top", "block");
  swiper_text > p.css("display", "block");
  swiper_text.addClass("circle_text");
});

// sec3 hover

$(".sec3_left_box").on("mouseenter", function () {
  $(".circle_word3").css("display", "none");
  $(".circle_word4").css("display", "none");
});
$(".sec3_left_box").on("mouseleave", function () {
  $(".circle_word3").css("display", "block");
  $(".circle_word4").css("display", "block");
});

// sec5 hover

$(".sec5_left_box").on("mouseenter", function () {
  $(".circle_word5").css("display", "none");
  $(".circle_word6").css("display", "none");
});
$(".sec5_left_box").on("mouseleave", function () {
  $(".circle_word5").css("display", "block");
  $(".circle_word6").css("display", "block");
});
