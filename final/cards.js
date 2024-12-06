const clickableCards = document.querySelectorAll('.card');

clickableCards.forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'https://cs401w2018.github.io/projects-Troi113/final/onemillionroyal.html'; // Replace with your desired URL
  });
});