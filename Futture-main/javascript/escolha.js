document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');

    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('show');
        menuMobile.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
            menuMobile.classList.remove('active');
        });
    });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active'); 
});