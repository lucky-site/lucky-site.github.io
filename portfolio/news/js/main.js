let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	this.parentElement.classList.toggle('menu_opened');
});



// Плавный переход по навигации


$(document).ready(function(){
	$(".top_menu").on("click","a", function (event) {
		if (this.href.includes('#link')) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top-50}, 1000);

			let elem = document.querySelector('.main_header .container');

			if (elem.classList.contains('menu_opened')) {
				elem.classList.remove('menu_opened');
			}
		}
	});
});



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


$(window).scroll(function () {
    $(".main_header").toggleClass("header_scroll", $(this).scrollTop() > 0);
});



// tabs begin 

// let linksTab1 = document.querySelectorAll('.tabs_1 .link');
// let tabs1 = document.querySelectorAll('.tabs_1 .tab');

// getTabs(linksTab1, tabs1);

// let linksTab2 = document.querySelectorAll('.tabs_2 .link');
// let tabs2 = document.querySelectorAll('.tabs_2 .tab');

// getTabs(linksTab2, tabs2);

// function getTabs(arrLinks, arrTabs) {
// 	arrLinks.forEach((link, index) => {
// 		link.addEventListener('click', function() {
// 			if (!link.classList.contains('active')) {
// 				for (let link of arrLinks) {
// 					if (link.classList.contains('active')) {
// 						link.classList.remove('active');
// 					}
// 				}

// 				for (let tab of arrTabs) {
// 					if (tab.classList.contains('active')) {
// 						tab.classList.remove('active');
// 					}
// 				}

// 				link.classList.add('active');
// 				arrTabs[index].classList.add('active');
// 			}
// 		})
// 	});
// }

// tabs end 



$(document).ready(function(){
	// $('.box_questions').click(function() {
	//   $(this).next().slideToggle();
	//   $(this).toggleClass('active');
	// });

	// $('.btn_show_gallery').click(function() {
	//   $(this).toggleClass('show_img');
	//   $('.box_hidden_photo').toggleClass('active');
	// });

	$('.slider_1').slick({
	  autoplay: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // dots: true,
	  infinite: true,
	  swipeToSlide: true,
	  responsive: [
	  {
	  breakpoint: 1400,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
	  }
	  },
	  {
	  breakpoint: 1050,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
	  }
	  },
	  {
	  breakpoint: 768,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	  }
	  }
	]
	});

		$('.mini_slider_1').slick({
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			swipeToSlide: true,
		});
		$('.mini_slider_2').slick({
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			swipeToSlide: true,
		});
		$('.mini_slider_3').slick({
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			swipeToSlide: true,
		});
  });


	$('.btn_show_gallery').click(function() {
	  $(this).toggleClass('show_img');
	  $('.box_hidden_photo').toggleClass('active');
	});



  // const container1 = document.getElementById("myCarousel_1");
  // const options1 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container1, options1, { Thumbs });



  // const container2 = document.getElementById("myCarousel_2");
  // const options2 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container2, options2, { Thumbs });



  // const container3 = document.getElementById("myCarousel_3");
  // const options3 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container3, options3, { Thumbs });



  // const container4 = document.getElementById("myCarousel_4");
  // const options4 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container4, options4, { Thumbs });



  // const container5 = document.getElementById("myCarousel_5");
  // const options5 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container5, options5, { Thumbs });



  // const container6 = document.getElementById("myCarousel_6");
  // const options6 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container6, options6, { Thumbs });



  // const container7 = document.getElementById("myCarousel_7");
  // const options7 = {
	// Thumbs: {
	//   type: "modern",
	// },
  // };

  // new Carousel(container7, options7, { Thumbs });

  // Fancybox.bind('[data-fancybox="gallery_slider_1"]', { });  

  // Fancybox.bind('[data-fancybox="gallery_slider_2"]', { }); 
  
  // Fancybox.bind('[data-fancybox="gallery_slider_3"]', { }); 
  
  // Fancybox.bind('[data-fancybox="gallery_slider_4"]', { }); 
  
  // Fancybox.bind('[data-fancybox="gallery_slider_5"]', { }); 

  // Fancybox.bind('[data-fancybox="gallery_slider_6"]', { }); 
  
  // Fancybox.bind('[data-fancybox="gallery_slider_7"]', { }); 

  Fancybox.bind('[data-fancybox="gallery_photo"]', { }); 
	Fancybox.bind('[data-fancybox="gallery_photo2"]', { });
	// Fancybox.bind('[data-fancybox="gallery_photo_3"]', { });


// let modal = document.getElementById('myModal');
// let btns = document.querySelectorAll(".btn_modal");
// let span = document.getElementById("close");

// for (let btn of btns) {
// 	btn.addEventListener('click', function() {
// 		modal.style.display = 'block';
// 	});
// }

// span.addEventListener('click', function() {
// 	modal.style.display = "none";
// });

// window.addEventListener('click', function(event) {
// 	if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });
