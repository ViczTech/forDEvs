const menuBtn = document.querySelector('i');
const navItems = document.querySelector('.nav-item');

menuBtn.addEventListener('click', function () {
    navItems.classList.toggle('hide');
    menuBtn.classList.toggle('fa-x');
});