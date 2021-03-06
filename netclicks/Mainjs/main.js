
// menu

const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие/закрытие меню

hamburger.addEventListener('click', () => { //addEventListener - отслуживает событие.
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open')
});

document.body.addEventListener('click', (event) => {
    
    if (!event.target.closest('.left-menu')){
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open')
    }
});

leftMenu.addEventListener('click', () => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu')
        hamburger.classList.add('open');
    }


});

