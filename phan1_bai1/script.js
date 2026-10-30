// Side bar menu: open with the burger, close with X, the overlay, Esc or a menu link
(function () {
    var body = document.body;
    var burger = document.querySelector('.burger');
    var menu = document.getElementById('side-menu');
    var closeBtn = menu.querySelector('.menu-close');
    var overlay = document.querySelector('.menu-overlay');

    function openMenu() {
        body.classList.add('menu-open');
        burger.setAttribute('aria-expanded', 'true');
        closeBtn.focus();
    }

    function closeMenu() {
        body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
    }

    burger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    menu.querySelectorAll('ul a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && body.classList.contains('menu-open')) {
            closeMenu();
        }
    });
})();
