document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bgColor = entry.target.dataset.background;
          document.body.style.backgroundColor = bgColor;
        }
      });
    },
    {
      threshold: 0.6, // cambia cuando 60% del slide es visible
    }
  );

  slides.forEach((slide) => {
    observer.observe(slide);
  });
});
