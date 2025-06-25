const boxes = document.querySelectorAll('.animate-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.7
  });

  boxes.forEach(box => observer.observe(box));