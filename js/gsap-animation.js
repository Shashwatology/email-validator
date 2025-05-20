// gsap-animations.js
import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Navbar entry animation
  gsap.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Hero section text fade
  gsap.from(".hero-text", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  // Ticket slide-in
  gsap.to(".ticket-image", {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".ticket-scroll-section",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });
});
