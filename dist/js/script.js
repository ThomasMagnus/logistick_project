const mainHeaderBurger = document.querySelector('.main-header__burger'),
	burger = document.querySelectorAll('.burger'),
	mainHeaderList = document.querySelector('.main-header__list'),
	mainHeaderItem = document.querySelectorAll('.main-header__item'),
	up = document.getElementById('up');

mainHeaderBurger.addEventListener('click', () => {
	burger.forEach(item => {
		item.classList.toggle('active');
	});
	mainHeaderList.classList.toggle('main-header__list-left');
	mainHeaderList.classList.toggle('active_left');
})

mainHeaderItem.forEach((item) => {
	item.addEventListener('click', () => {
		mainHeaderList.classList.toggle('main-header__list-left');
		mainHeaderList.classList.toggle('active_left');
		burger.forEach(item => {
			item.classList.toggle('active');
		});
	})
})



// $(window).scroll(function(){
// 	if($(this).scrollTop() > 1000) {
// 	  $('.up_icon').fadeIn();
// 	} else {
// 	  $('.up_icon').fadeOut();
// 	};
// });