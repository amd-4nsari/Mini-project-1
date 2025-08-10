
gsap.to("#nav",{
    backgroundColor:"#000", 
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"too -11%",
        scrub:1,

    }

})
gsap.to("#main",{
    backgroundColor:"#0e210eff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }
})
gsap.from(".nav-left",{
    x:-1000,
    duration:2,
    delay:0,
})
gsap.from("#nav-links",{
    x:1000,
    duration:2,
    delay:1,
})

gsap.from("#page1 h1",{
    x:-1500,
    duration:2,
    delay:2,
})
gsap.from("#page1 a",{
    opacity:0,
    y:200,
    duration:2,
    delay:2,
})
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray("#line hr").forEach((line) => {
  gsap.fromTo(line,
    { width: "0%" },
    {
      width: "80%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

gsap.registerPlugin(ScrollToPlugin);

// Select all nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // stop instant jump

    let targetSection = this.getAttribute("href"); // e.g., "#home"

    gsap.to(window, {
      duration: 1, // scroll speed
      scrollTo: {
        y: targetSection, // element to scroll to
        offsetY: 50 // adjust if you have a fixed header
      },
      ease: "power2.inOut"
    });
  });
});
