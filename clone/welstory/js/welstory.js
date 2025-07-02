//swiper_next_prev_btn
$(".swiper-button-next").on("click", function () {
  const $circle = $(".circle");
  $circle.css("display", "block");
  $circle.removeClass("animation");
  void $circle[0].offsetWidth;
  $circle.addClass("animation");

  const $swiper_text = $(".swiper_text");
  $swiper_text.css("display", "none");
  $swiper_text.removeClass("circle_text");
  void $swiper_text[0].offsetWidth;
  $swiper_text.css("display", "block");
  $swiper_text > h2.css("top", "block");
  $swiper_text > p.css("display", "block");
  $swiper_text.addClass("circle_text");
});
$(".swiper-button-prev").on("click", function () {
  const $circle = $(".circle");
  $circle.css("display", "block");
  $circle.removeClass("animation");
  void $circle[0].offsetWidth;
  $circle.addClass("animation");
  $("#circle_text").css("display", "block");

  const $swiper_text = $(".swiper_text");
  $swiper_text.css("display", "none");
  $swiper_text.removeClass("circle_text");
  void $swiper_text[0].offsetWidth;
  $swiper_text.css("display", "block");
  $swiper_text > h2.css("top", "block");
  $swiper_text > p.css("display", "block");
  $swiper_text.addClass("circle_text");
});

// sec2 num_count
$(document).ready(function () {
  $(".num_count").each(function () {
    const $this = $(this);
    const target = parseInt($this.data("count-target"));
    const delay = parseInt($this.data("count-delay"));
    let count = 0;
    const duration = 1000; // 총 시간
    const step = Math.floor(duration / target);

    setTimeout(function () {
      const counter = setInterval(function () {
        if (count < target) {
          count++;
          $this.text(count);
        } else {
          clearInterval(counter);
        }
      }, step);
    }, delay);
  });
});

$(document).ready(function () {
  $(".num_count2").each(function () {
    const $this = $(this);
    const target = parseInt($this.data("count-target"));
    const delay = parseInt($this.data("count-delay"));
    let count = 0;
    const step = 1;

    setTimeout(function () {
      const counter = setInterval(function () {
        if (count < target) {
          count = count + 40;
          $this.text(count);
        } else if (count === 11000) {
          $this.text("11,000");
        } else {
          clearInterval(counter);
        }
      }, step);
    }, delay);
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger); //스크롤트리거 불러오기
  //sec2 gsap
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sec2",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
        duration: 0.2,
      },
    })
    .to(".sec2_left_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
    })
    .to(".sec2_right_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
    });
}); //지우면 안됨
