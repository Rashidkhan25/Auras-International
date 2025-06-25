  function changeImage(mainId, src) {
  // Change the main image source
  const mainImage = document.getElementById(mainId);
  if (!mainImage) return;
  mainImage.src = src;

  // Find the correct thumbnails group (either .thumbs or .thumbs-vertical)
  const parentSection = mainImage.closest(".section");
  if (!parentSection) return;

  const allThumbs = parentSection.querySelectorAll(".thumbs img, .thumbs-vertical img");

  allThumbs.forEach(img => img.classList.remove("active"));
  const clickedThumb = Array.from(allThumbs).find(img => img.src === src);
  if (clickedThumb) clickedThumb.classList.add("active");
}

//connector lines
 document.addEventListener("DOMContentLoaded", function () {
    const connector = document.querySelector('.connector-lines');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          connector.classList.add('active');
        }
      });
    }, {
      threshold: 0.4
    });

    if (connector) {
      observer.observe(connector);
    }
  });