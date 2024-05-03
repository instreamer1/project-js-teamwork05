document.addEventListener('DOMContentLoaded', function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollIcon = scrollTopBtn.querySelector('.scroll-icon');
  const aboutSection = document.getElementById('about-me');
  // Функция для перемещения страницы вверх
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Показываем кнопку "Вверх", когда пользователь прокручивает вниз
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  }

  scrollTopBtn.addEventListener('click', function () {
    scrollToTop();
  });

});
