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
            const $this = $(this);
            const target = parseInt($this.data("count-target"));
            const delay = parseInt($this.data("count-delay"));
            let count = 0;
            const duration = 1000; // 총 시간 (1초)
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
        }
      },
    });
});
