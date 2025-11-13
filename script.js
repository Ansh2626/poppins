// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Wishlist Button Action
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
wishlistBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = '💖 Added!';
    btn.style.background = '#00c851';
    setTimeout(() => {
      btn.textContent = '❤️ Add to Wishlist';
      btn.style.background = '#ff4d4d';
    }, 1500);
  });
});


// Subtle fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.8s ease forwards';
      }
    });
  });
  document.querySelectorAll('.product-card, .feature').forEach(el => observer.observe(el));


  // Scroll animation trigger for About section
const aboutEl = document.querySelector('.about');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  const top = aboutEl.getBoundingClientRect().top;
  if (top < trigger) {
    aboutEl.classList.add('active');
  }
});





// Fade in testimonials on scroll
const testimonialCards = document.querySelectorAll(".testi-card");

window.addEventListener("scroll", () => {
  testimonialCards.forEach(card => {
    const trigger = window.innerHeight * 0.85;
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add("visible");
  });
});


// Reveal blog cards on scroll
const blogCards = document.querySelectorAll(".blog-card");

window.addEventListener("scroll", () => {
  blogCards.forEach((card) => {
    const trigger = window.innerHeight * 0.85;
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});