var burgerButton = document.querySelector('.burger-btn');
var mobileMenu = document.querySelector('.mobile-menu')
var backdrop = document.querySelector('.backdrop');


burgerButton.addEventListener('click', function() {
    mobileMenu.classList.add('mobile-menu-open');   
    backdrop.style.display = 'block';
});

backdrop.addEventListener('click', function() {
    mobileMenu.classList.remove('mobile-menu-open');
    backdrop.style.display = 'none';
})