// Відкриття Меню
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', toggleMenu);





// Функція для відкриття/зактирря Меню
function toggleMenu () {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
    console.log('clickMenu');
}


// Функція для відкриття модального вікна
function openMenu() {
    backdrop.classList.add('is-open');
    console.log('isOpen');
}


// Функція для закриття модального вікна
function closeMenu() {
    backdrop.classList.remove('is-open');
    console.log('isClose');

}
