



// Плавный переход по навигации

// $(function() {

// 	$(window).scroll(function() {

// 	if($(this).scrollTop() != 0) {

// 	$('#toTop').fadeIn();

// 	} else {

// 	$('#toTop').fadeOut();

// 	}

// 	});

// 	$('#toTop').click(function() {

// 	$('body,html').animate({scrollTop:0},800);

// 	});

// });

//      $(document).ready(function(){
//         $(".top-menu").on("click","a", function (event) {
//             event.preventDefault();
//             var id  = $(this).attr('href'),
//                 top = $(id).offset().top;
//             $('body,html').animate({scrollTop: top}, 1000);
//         });
//     });



// page init
jQuery(function(){
	jQuery('.burger').clickClass({
		classAdd: 'menu-opened',
		addToParent: true
	});
});

/*
 * Add class plugin
 */
jQuery.fn.clickClass = function(opt) {
	var options = jQuery.extend({
		classAdd: 'add-class',
		addToParent: false,
		event: 'click'
	}, opt);

	return this.each(function() {
		var classItem = jQuery(this);
		if(options.addToParent) {
			if(typeof options.addToParent === 'boolean') {
				classItem = classItem.parent();
			} else {
				classItem = classItem.parents('.' + options.addToParent);
			}
		}
		jQuery(this).bind(options.event, function(e) {
			classItem.toggleClass(options.classAdd);
			e.preventDefault();
			return false;
		});
	});
};


  $(document).ready(function () {
    $(".slider-1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            vertical: true,
          },
        },
      ],
    });
  });


  // $(window).scroll(function () {
  //   $(".main-header").toggleClass("header-scroll", $(this).scrollTop() > 0);
  // });
 



// AOS.init({disable: 'mobile'});







