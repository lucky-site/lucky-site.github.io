// let burger = document.querySelector('.burger');

// burger.addEventListener('click', function() {
// 	this.parentElement.classList.toggle('menu_opened');
// });

  // const burger = document.querySelector('.burger');
  // const topMenu = document.querySelector('.top_menu');

  // Клік по «бургеру» відкриває/закриває меню
  // burger.addEventListener('click', function(e) {
  //   e.stopPropagation(); // щоб клік по бургеру не "спрацьовував" як клік по документу
  //   topMenu.parentElement.classList.toggle('menu_opened');
  // });

  // Клік поза меню (тобто будь-де на документі) - закриває, якщо меню відкрите
  // document.addEventListener('click', function(e) {
  //   // Якщо меню відкрите
  //   if (topMenu.parentElement.classList.contains('menu_opened')) {
  //     // Перевіряємо, чи клік НЕ в межах меню і НЕ на самому бургері
  //     if (!topMenu.contains(e.target) && !burger.contains(e.target)) {
  //       topMenu.parentElement.classList.remove('menu_opened');
  //     }
  //   }
  // });



// Плавный переход по навигации


// $(document).ready(function(){
// 	$(".top_menu").on("click","a", function (event) {
// 		if (this.href.includes('#link')) {
// 			event.preventDefault();
// 			var id  = $(this).attr('href'),
// 				top = $(id).offset().top;
// 			$('body,html').animate({scrollTop: top-50}, 1000);

// 			let elem = document.querySelector('.main_header .container');

// 			if (elem.classList.contains('menu_opened')) {
// 				elem.classList.remove('menu_opened');
// 			}
// 		}
// 	});
// });

// $(document).ready(function(){
// 	$(".to_button").on("click","a", function (event) {
// 		if (this.href.includes('#link')) {
// 			event.preventDefault();
// 			var id  = $(this).attr('href'),
// 				top = $(id).offset().top;
// 			$('body,html').animate({scrollTop: top-50}, 1000);
// 		}
// 	});
// });



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


// $(window).scroll(function () {
//     $(".main_header").toggleClass("header_scroll", $(this).scrollTop() > 0);
// });





$(document).ready(function(){

	$('.slider-1').slick({
	  // autoplay: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  infinite: false,
	  swipeToSlide: true,
	  responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					swipeToSlide: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					swipeToSlide: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					swipeToSlide: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					swipeToSlide: true,
					dots: true,
				}
			}
		]
	});
	
	$('.slider-2').slick({
	  // autoplay: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  infinite: false,
	  swipeToSlide: true,
	  // rows: 0
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
					dots: true,
				}
			}
		]
	})
	// .on('setPosition', function (event, slick) {
	// 		slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	// });
});



