// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar animation
const navbar = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Portfolio animation
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseout', function() {
    item.classList.remove('hovered');
  });
});
