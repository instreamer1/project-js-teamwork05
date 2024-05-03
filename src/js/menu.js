// Відкриття Меню
const navList = document.querySelector('nav-list');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const headerOrder = document.querySelector('.heder-btn');
menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

// Відкриття модального вікна
const backdrop = document.querySelector('.backdrop');
const burgerIcon = document.querySelector('.burger-icon');
burgerIcon.addEventListener('click', openMenu);

// Закриття модального вікна
const orderBtn = document.querySelector('.mobile-heder-btn');
const modalMenu = document.querySelector('.mobile-menu-list');
const closeButton = document.querySelector('.xclose-btn-mob');
closeButton.addEventListener('click', closeMenu);
modalMenu.addEventListener('click', closeMenu);
orderBtn.addEventListener('click', closeMenu);

// Функція для відкриття/зактирря Меню
function toggleMenu() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
  // console.log('clickMenu');
}

// Функція для відкриття модального вікна
function openMenu() {
  backdrop.classList.add('is-open');
  console.log('isOpen');

  window.addEventListener('resize', closeMenuOnResize);
}

// Функція для автоматичного закриття модального вікна при зміні розміру екрану
function closeMenuOnResize() {
  if (window.innerWidth > 767) {
    closeMenu();
  }
}

// Функція для закриття модального вікна
function closeMenu() {
  backdrop.classList.remove('is-open');
}

// Функция для плавной прокрутки к элементу
function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop,
  });
}
// Обработчик клика по ссылкам в меню
function scrollToTarget(element) {
  const targetId = element.getAttribute('href').substr(1);
  const targetElement = document.getElementById(targetId);
  scrollToElement(targetElement);
}

document.querySelectorAll('.nav-list-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    scrollToTarget(this);
  });
});

headerOrder.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToTarget(this);
});
