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

     $(document).ready(function(){
        $(".top-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-50}, 1000);

			let elem = document.querySelector('.main-header .container');

			if (elem.classList.contains('menu-opened')) {
				elem.classList.remove('menu-opened');
			}
        });
    });



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

var modal = document.getElementById('myModal');
var btns = document.querySelectorAll(".my_btn");
var span = document.getElementById("close");

for (let btn of btns) {
	btn.onclick = function() {
		modal.style.display = "block";
	}
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(window).scroll(function () {
    $(".main-header").toggleClass("header-scroll", $(this).scrollTop() > 0);
});
