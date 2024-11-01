// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 3000);
  });
  
  // Mobile Menu
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    mobileMenu.classList.toggle('active');
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Flight Search Form
  const flightSearchForm = document.getElementById('flightSearchForm');
  
  flightSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    // Add animation to form submission
    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.animation = 'none';
    searchContainer.offsetHeight; // Trigger reflow
    searchContainer.style.animation = 'pulse 0.5s ease';
  
    // Here you would typically send this data to a server
    console.log('Search Parameters:', { origin, destination, date });
  });
  
  // Pause animation on hover
  const destinationsScroll = document.querySelector('.destinations-scroll');
  
  destinationsScroll.addEventListener('mouseenter', () => {
    destinationsScroll.style.animationPlayState = 'paused';
  });
  
  destinationsScroll.addEventListener('mouseleave', () => {
    destinationsScroll.style.animationPlayState = 'running';
  });
  
  // Add hover effect to destination cards
  document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });