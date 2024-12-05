document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  function autoTransition() {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Update the slide position
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Start the auto-transition
  setInterval(autoTransition, 4000); // Change slides every 3 seconds
});
