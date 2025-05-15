document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav ul');
  const overlay = document.querySelector('.overlay');
  let scrollPosition;

  burger.addEventListener('click', function() {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
      scrollPosition = window.pageYOffset;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      window.scrollTo(0, scrollPosition);
    }
  });

  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    nav.classList.remove('active');
    burger.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);
  }
});