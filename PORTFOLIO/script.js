// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(link.getAttribute('href'));
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animated project cards on hover
const projectCards = document.querySelectorAll('.projects li');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = 0;
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});









