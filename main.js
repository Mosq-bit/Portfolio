document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');
    const html = document.documentElement;
    const body = document.body;
    
    // Функция для блокировки скролла
    function disableScroll() {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    }
    
    // Функция для разблокировки скролла
    function enableScroll() {
      const scrollY = parseInt(body.style.top || '0');
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, -scrollY);
    }
    
    // Открытие/закрытие меню
    burger.addEventListener('click', function() {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
      overlay.classList.toggle('active');
      
      if (nav.classList.contains('active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
    
    // Закрытие по клику на оверлей
    overlay.addEventListener('click', function() {
      nav.classList.remove('active');
      burger.classList.remove('active');
      overlay.classList.remove('active');
      enableScroll();
    });
    
    // Закрытие по клику на ссылки
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        burger.classList.remove('active');
        overlay.classList.remove('active');
        enableScroll();
      });
    });
  });