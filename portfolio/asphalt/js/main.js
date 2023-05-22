// var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
// function onScroll(){
//     var scroll_top = $(document).scrollTop();
//     $(menu_selector + " a").each(function(){
//         var hash = $(this).attr("href");
//         var target = $(hash);
//         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
//             $(menu_selector + " a.active").removeClass("active");
//             $(this).addClass("active");
//         } else {
//             $(this).removeClass("active");
//         }
//     });
// }
 
// $(document).ready(function () {
 
//     $(document).on("scroll", onScroll);
 
//     $("a[href^=#]").click(function(e){
//         e.preventDefault();
 
//         $(document).off("scroll");
//         $(menu_selector + " a.active").removeClass("active");
//         $(this).addClass("active");
//         var hash = $(this).attr("href");
//         var target = $(hash);
 
//         $("html, body").animate({
//             scrollTop: target.offset().top
//         }, 500, function(){
//             window.location.hash = hash;
//             $(document).on("scroll", onScroll);
//         });
 
//     });
 
// });

// Плавный переход по навигации

	$(function() {

		$(window).scroll(function() {

			if($(this).scrollTop() != 0) {

				$('#toTop').fadeIn();

			} else {

				$('#toTop').fadeOut();

			}

		});

		$('#toTop').click(function() {

			$('body,html').animate({scrollTop:0},800);

		});

	});

    // $(document).ready(function(){
    //     $(".top-menu").on("click","a", function (event) {
	// 		console.log(this.href.includes('#link'));
	// 		if (this.href.includes('#link')) {
	// 			event.preventDefault();
	// 			var id  = $(this).attr('href'),
	// 				top = $(id).offset().top;
	// 			$('body,html').animate({scrollTop: top-50}, 1000);

	// 			let elem = document.querySelector('.main-header .container');

	// 			if (elem.classList.contains('menu-opened')) {
	// 				elem.classList.remove('menu-opened');
	// 			}
	// 		}
    //     });
    // });

	let anchors = document.querySelectorAll('.top-menu a[href*="#"');

	for (let link of anchors) {
		let href = link.href;
		let anchor = href.slice(href.lastIndexOf('#') + 1);
		let target = document.getElementById(anchor);

		link.addEventListener('click', function(e) {
			e.preventDefault();

			target.scrollIntoView({behavior: 'smooth'});

			let parent = document.querySelector('.main-header .container');

			if (parent.classList.contains('menu-opened')) {
				parent.classList.remove('menu-opened');
			}
		});
	}


	// Плавная прокрутка до якоря при переходе на другую страницу

	var myHash = location.hash; //получаем значение хеша
	location.hash = ''; //очищаем хеш
	if(myHash.length > 0){ //проверяем, есть ли в хеше какое-то значение
		$('html, body').animate({scrollTop: $(myHash).offset().top-50}, 2000); //скроллим за полсекунды
	};





let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	this.parentElement.classList.toggle('menu-opened');
});


$(window).scroll(function () {
    $(".main-header").toggleClass("header-scroll", $(this).scrollTop() > 0);
});

