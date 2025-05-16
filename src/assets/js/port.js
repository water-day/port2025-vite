import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -110 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            // start: "top+=50 top", // ← 스크롤이 좀 더 내려간 후에 시작
            start: "top top", // ← 전체 요소가 뷰포트 상단에 닿을 때 시작
    end: () => "+=" + document.querySelector(".port__wrap").offsetWidth, // ← 동적으로 설정
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}