const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".hero-right", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".first", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".last", {
    ...scrollRevealOption,
    delay: 1000,
  });

// gsap animations on menu section
gsap.from("#item1",{
  opacity:0,
  duration:1,
  delay:0.5,
  scrollTrigger:"#item1"
})

gsap.from("#item2",{
  opacity:0,
  duration:1,
  delay:1,
  scrollTrigger:"#item2"
})

gsap.from("#item3",{
  opacity:0,
  duration:1,
  delay:1.5,
  scrollTrigger:"#item3"
})
  