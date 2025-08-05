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
    backgroundColor:"#000",
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
    y:1000,
    duration:2,
    delay:2,
})