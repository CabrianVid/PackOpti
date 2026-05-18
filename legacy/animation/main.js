document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) {
    return;
  }

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  // Reset state
  gsap.set("#stage-erp, #stage-optibox, #stage-ship", { opacity: 0 });
  gsap.set(".item", { opacity: 0, z: 100 });
  gsap.set(".erp-item", { opacity: 0, y: 6 });
  gsap.set(".ship-box", { opacity: 0, scale: 0.9 });
  gsap.set(".truck", { x: 0 });

  // 1. ERP Order Generation
  tl.to("#stage-erp", { opacity: 1, duration: 0.3 })
    .to("#stage-erp", { scale: 1.02, duration: 0.2, yoyo: true, repeat: 1 })
    .from(".erp-window", { y: 20, opacity: 0, duration: 0.6 })
    .to(".erp-row.highlight", { backgroundColor: "#bae6fd", scale: 1.05, duration: 0.3 })
    .to(".erp-item", { opacity: 1, y: 0, stagger: 0.18, duration: 0.3 })
    .to({}, { duration: 0.4 })

  // 2. OptiBox
    .to("#stage-erp", { opacity: 0, duration: 0.25 })
    .to("#stage-optibox", { opacity: 1, duration: 0.3 })
    .from(".app-mockup", { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")

  // 3. OptiBox Logic (Cards pop in)
    .from(".card", { scale: 0.8, opacity: 0, stagger: 0.2, duration: 0.4, ease: "back.out" })

  // 4. Colorful Packing Sequence (Instructional)
    .to(".item.blue", { opacity: 1, z: 0, duration: 0.4 })
    .to(".item.green", { opacity: 1, z: 0, duration: 0.4 }, "-=0.1")
    .to(".item.red", { opacity: 1, z: 0, duration: 0.4 }, "-=0.1")
    .to(".item.yellow", { opacity: 1, z: 0, duration: 0.4 }, "-=0.1")

  // 5. Highlight Best Option
    .to(".card.best", {
      borderColor: "#ffb703",
      backgroundColor: "#fffbeb",
      scale: 1.1,
      duration: 0.4
    })
    .to(".wireframe-box", { scale: 1.03, duration: 0.3, yoyo: true, repeat: 1 })
    .to({}, { duration: 0.5 })
    .to("#stage-optibox", { opacity: 0, duration: 0.25 })

  // 6. Ship the package
    .to("#stage-ship", { opacity: 1, duration: 0.3 })
    .to(".ship-box", { opacity: 1, scale: 1, duration: 0.3 })
    .to(".truck", { x: 12, duration: 0.4, yoyo: true, repeat: 1 }, "-=0.2")
    .to({}, { duration: 0.4 })
    .to("#stage-ship", { opacity: 0, duration: 0.25 });
});