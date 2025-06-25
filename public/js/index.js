
// Hero section
const images = document.querySelectorAll(".hero-bg");
  let current = 0;

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 6000);

// Grid section
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    },
    { threshold: 0.7 } // Adjust as needed
  );

  document.querySelectorAll('.grid.animate').forEach(el => {
    observer.observe(el);
  });

// Explore section
const images1 = document.querySelectorAll('.portfolio-right img');
  let current1 = 0;

  setInterval(() => {
    images1[current1].classList.remove('active');
    current1 = (current1 + 1) % images1.length;
    images1[current1].classList.add('active');
  }, 4000);