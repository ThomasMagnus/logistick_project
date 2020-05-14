const mainHeaderBurger = document.querySelector('.main-header__burger'),
	burger = document.querySelectorAll('.burger'),
	mainHeaderList = document.querySelector('.main-header__list');

mainHeaderBurger.addEventListener('click', () => {
	burger.forEach(item => {
		item.classList.toggle('active');
	});
	mainHeaderList.classList.toggle('main-header__list-left');
	mainHeaderList.classList.toggle('active_left');
})