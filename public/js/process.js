document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;

    // Collapse any open FAQ first
    document.querySelectorAll('.faq-item').forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
  });
});
