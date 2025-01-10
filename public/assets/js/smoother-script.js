(function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(true)

  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
})()