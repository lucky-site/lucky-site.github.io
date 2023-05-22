AOS.init({disable: 'mobile'});

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
			if (this.href.includes('#link')) {
				event.preventDefault();
				var id  = $(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({scrollTop: top-50}, 1000);

				let elem = document.querySelector('.main-header .container');

				if (elem.classList.contains('menu-opened')) {
					elem.classList.remove('menu-opened');
				}
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

