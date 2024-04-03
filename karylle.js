const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });

  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
    if (idx === 6) {
      window.location.href = 'home.html';
    }
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1));
});