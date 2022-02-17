let burger = document.querySelector('.header__hamburger-menu');
let overlay = document.querySelector('#nav-mobile');
let body = document.querySelector('body');

let links = document.querySelectorAll('.nav__link--mobile');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('hamburger-menu--active');
  overlay.classList.toggle('nav-mobile--active');
  body.classList.toggle('body--active-mobile-menu');
}

burger.addEventListener('click', toggleMenu);