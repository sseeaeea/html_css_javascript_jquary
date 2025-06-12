document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger); //스크롤트리거 불러오기

  // header
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header", //어느 영역에서 스크롤 트리거를 발생할건지
        start: "100% 0%", //첫번째값은 요소의 top, 두번째는 뷰포트의 top. 두 개의 선이 만나면 이때 애니메이션이 실행됨
        end: "100% 5%", //첫번째 값은 요소의 bottom, 두번째는 뷰포트의 bottom. 두개의 선이 만나면 이때 애니메이션이 끝남.
        scrub: 1, //되감기, 애니메이션 부드럽게 풀어주기
        duration: 0.3, //요소가 변할때 소요되는 시간
      },
    })
    .fromTo(
      "header",
      {
        //시작할때 모습
        backgroundColor: "rgba(255,255,255,1)",
        borderBottomColor: "rgba(255,255,255,0)",
      },
      {
        //끝났을때 모습
        backgroundColor: "rgba(0,0,0,0.4)",
        borderBottomColor: "rgba(0,255,255,1)",
      }
    )
    //header h1
    .to("h1", { color: "rgba(0,255,255,1)" }, "<") // '<' : 이전 타임라인 시작지점
    //header menu
    .to(
      "header li",
      {
        color: "rgba(0,255,255,1)",
        ease: "power1.out",
      },
      "<" //이전 타임라인 시작지점
    );

  //sec1
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec1",
        start: "80px 0%", //top: 80px지점, 뷰포트 : 0%지점, 이 지점이 맞닿으면 애니메이션이 실행
        end: "50% 30%", //bottom : 섹션높이의 반, 뷰포트 : 모니터의 30%지점. 이 지점이 맞닿으면 애니메이션이 끝남
        scrub: 1,
      },
    })
    .fromTo(
      ".sec1 h2",
      {
        opacity: 1,
        y: 0, //translateY와 같음
        scale: 1.2,
        ease: "linear",
      },
      {
        opacity: 0,
        y: 200, //숫자는 px단위를 기본값으로 함
        scale: 1,
        duration: 1,
      }
    );

  //sec2
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 20%",
        end: "top 20%",
        scrub: 1,
        duration: 0.2,
      },
    })
    .to(".sec2 li:nth-child(1)", {
      y: -100,
      ease: "linear",
    })
    .to(".sec2 li:nth-child(2)", {
      y: -100,
      ease: "linear",
    })
    .to(".sec2 li:nth-child(3)", {
      y: -100,
      ease: "linear",
    })
    .to(".sec2 li:nth-child(4)", {
      y: -100,
      ease: "linear",
    });

  // sec3 - circle

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 50%",
        end: "10% 0%",
        scrub: 1,
        markers: true,
      },
    })
    .fromTo(
      ".circle",
      {
        width: 0,
        height: 0,
        ease: "elastic",
        top: "3%",
      },
      {
        width: 2500,
        height: 2500,
        duration: 10,
        top: "10%",
      }
    )
    .fromTo(
      ".textbox",
      {
        top: "60%",
        duration: 5,
        ease: "elastic",
        opacity: 0,
      },
      {
        top: "40%",
        duration: 5,
        ease: "none",
        opacity: 1,
      }
    );

  //밑에 있는 괄호 건들면 x
});
