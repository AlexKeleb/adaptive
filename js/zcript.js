const menu = document.querySelector('.main-nav');
const toggle = menu.querySelector('.main-nav__toggle');
const modalLogin = document.querySelector('.modal-login');
const modalLoginOpen = document.querySelector('.menu--user a');
const modalLoginClose = modalLogin.querySelector('.modal-login__closed');
const modalLoginFocus = modalLogin.querySelector('.modal-login__text--login');

function navigation() {
    menu.classList.remove('main-nav--nojs');
    toggle.addEventListener('click', function (event) {
        event.preventDefault();
        menu.classList.toggle('main-nav--nojs');
    });
    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27 || menu.classList.contains('main-nav--nojs')) {
            menu.classList.remove('main-nav--nojs');
        }
    });
}

function modalPopup() {
    modalLoginOpen.addEventListener('click', function (event) {
        event.preventDefault();
        modalLogin.classList.add('modal-login--show');
        modalLoginFocus.focus();
    });
    modalLoginClose.addEventListener('click', function (event) {
        event.preventDefault();
        modalLogin.classList.remove('modal-login--show');
    });
    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27 && modalLogin.classList.contains('modal-login--show')) {
            modalLogin.classList.remove('modal-login--show');
        }
    });
}

navigation();
modalPopup();
svg4everybody();