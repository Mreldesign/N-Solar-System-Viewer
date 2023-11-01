document.addEventListener('DOMContentLoaded', function(event) {
});

const astroCards = document.querySelectorAll('.astro-card-information');
const filterSelect = document.querySelector('.astro-options');
const searchInput = document.querySelector('.input');

filterSelect.addEventListener('change', () => {
  const filterValue = filterSelect.value;
  astroCards.forEach(card => {
    if (filterValue === 'All' || card.dataset.type === filterValue) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  astroCards.forEach(card => {
    const cardName = card.querySelector('.astro-card-name').textContent.toLowerCase();
    if (cardName.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

