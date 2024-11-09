var typed = new Typed(".text",{
    strings:["guest posting expert ", "seo expert", "wordpress developer","Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});
// Adding scroll animation effect
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".review-section, .project-image");
  
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.remove("scroll-hidden");
        if (el.classList.contains("review-section")) {
          el.classList.add("scroll-animation-left");
        } else if (el.classList.contains("project-image")) {
          el.classList.add("scroll-animation-right");
        }
      }
    });
  });
  
  // Initially hide elements
  document.querySelectorAll(".review-section, .project-image").forEach((el) => {
    el.classList.add("scroll-hidden");
  });
  