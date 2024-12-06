document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    window.location.href = link;
  });
});
});