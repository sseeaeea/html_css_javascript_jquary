document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  let countStarted1 = false;
  let countStarted2 = false;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sec2",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    })
    .to(".sec2_left_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
      onStart: function () {
        if (!countStarted1) {
          countStarted1 = true;

          $(".num_count").each(function () {
            const this_num1 = $(this);
            const target = parseInt(this_num1.data("count-target"));
            const delay = parseInt(this_num1.data("count-delay"));
            let count = 0;
            const duration = 1000;
            const step = Math.floor(duration / target);

            setTimeout(function () {
              const counter = setInterval(function () {
                if (count < target) {
                  count++;
                  this_num1.text(count);
                } else {
                  clearInterval(counter);
                }
              }, step);
            }, delay);
          });
        }
      },
    })
    .to(".sec2_right_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
      onStart: function () {
        if (!countStarted2) {
          countStarted2 = true;

          $(".num_count2").each(function () {
            const this_num2 = $(this);
            const target = parseInt(this_num2.data("count-target"));
            const delay = parseInt(this_num2.data("count-delay"));
            let count = 0;
            const step = 1;

            setTimeout(function () {
              const counter = setInterval(function () {
                if (count < target) {
                  count = count + 40;
                  this_num2.text(count);
                } else if (count === 11000) {
                  this_num2.text("11,000");
                } else {
                  clearInterval(counter);
                }
              }, step);
            }, delay);
          });
        }
      },
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sec3",
        start: "top 80%",
        end: "top 70%",
        onEnter: () => {
          $(".sec3_img").addClass("sec3_img_running");
        },
      },
    })
    .to(".sec3_left_box", {
      x: 200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box1", {
      x: -200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box2", {
      x: -200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box3", {
      x: -200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box4", {
      x: -200,
      opacity: 1,
      ease: "linear",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sec4",
        start: "top 80%",
        end: "top 70%",
        onEnter: () => {
          // 첫 번째 줄만 먼저 실행
          $(".sec4_up_con > a").css("background-size", "0% 1px, 100% 1px");
          $(".sec4_down_con > a").css("background-size", "100% 1px");

          // 두 번째 줄 (top 선)은 500ms 후에 실행
          setTimeout(() => {
            $(".sec4_up_con > a").css("background-size", "100% 1px, 100% 1px");
          }, 500);
        },
      },
    })
    .to(".sec4_container > h2", {
      y: -100,
      opacity: 1,
      ease: "linear",
    })
    .to(".sec4_up_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
    })
    .to(".sec4_down_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sec5",
        start: "top 80%",
        end: "top 70%",
        onEnter: () => {
          $(".sec5_img").addClass("sec5_img_running");
        },
      },
    })
    .to(".sec5_left_box", {
      x: 200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box5", {
      x: -200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box6", {
      x: -200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box7", {
      x: -200,
      opacity: 1,
      ease: "linear",
    })
    .to(".box8", {
      x: -200,
      opacity: 1,
      ease: "linear",
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sec6",
        start: "top 80%",
        end: "top 70%",
        onEnter: () => {
          $("#sec6_right_con_border1 > a").css("background-size", "100% 1px");
          $("#sec6_right_con_border2 > a").css("background-size", "100% 1px");
          $("#sec6_right_con_border3 > a").css("background-size", "100% 1px");
        },
      },
    })
    .to(".sec4_container > h2", {
      y: -100,
      opacity: 1,
      ease: "linear",
    })
    .to(".sec4_up_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
    })
    .to(".sec4_down_con", {
      y: -100,
      opacity: 1,
      ease: "linear",
    });
});
