
  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 2000, // Set the interval in milliseconds (e.g., 2000 for 2 seconds)
      pause: 'hover', // Pause on hover
      wrap: true // Enable wrapping
    });
  });

