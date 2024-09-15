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
  