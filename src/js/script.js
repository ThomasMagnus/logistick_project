const mainHeaderBurger = document.querySelector('.main-header__burger'),
	burger = document.querySelector('burger');

mainHeaderBurger.addEventListener('click', () => {
	burger.classList.toggle('active');
})