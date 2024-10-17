document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 60; // Number of stars to generate
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Randomize the properties of the star
      const starTailLength = Math.random() * 2 + 4; // Between 4em and 6em
      const topOffset = Math.random() * 100; // Percentage between 0 and 100
      const fallDuration = Math.random() * 4 + 6; // Between 6s and 10s
      const fallDelay = (i / starCount) * fallDuration; // Staggered delay based on index
      const leftOffset = Math.random() * 100 + 5 + starTailLength; // Start outside the right edge
  
      star.style.setProperty('--star-tail-length', `${starTailLength}em`);
      star.style.setProperty('--top-offset', `${topOffset}vh`);
      star.style.setProperty('--fall-duration', `${fallDuration}s`);
      star.style.setProperty('--fall-delay', `${fallDelay}s`);
      star.style.left = `${leftOffset}%`;
      star.style.top = `calc(var(--top-offset))`;
  
      starsContainer.appendChild(star);
    }
  });
  