
Fancybox.bind('[data-fancybox="gallery"]', {
	Image: {
		zoom: false,
	},
});

let modal = document.querySelectorAll('.modal');
let btnClose = document.querySelectorAll('.btn_close');
let span = document.querySelector(".box_close_simple");
let myBtn = document.querySelector('.btn_simple');
let boxProduct1 = document.querySelectorAll('.product-1');
let boxProduct2 = document.querySelectorAll('.product-2');
let boxProduct3 = document.querySelectorAll('.product-3');
let boxProduct4 = document.querySelectorAll('.product-4');
let buttonSimple = document.querySelector('.btn_simple');
let modalSimple = document.querySelector('.modal_simple');
let modalProducts = document.querySelectorAll('.modal_product');
let modalProduct1 = document.querySelector('.modal_product-1');
let modalProduct2 = document.querySelector('.modal_product-2');
let modalProduct3 = document.querySelector('.modal_product-3');
let modalProduct4 = document.querySelector('.modal_product-4');
let closeModal = document.querySelectorAll('.box_close_modal');
let modalBasket = document.querySelector('.modal_basket');
let btnBasket = document.querySelectorAll('.btn_basket');


for (let elem of btnBasket) {
	elem.addEventListener('click', function() {
		modalBasket.style.display = 'block';
		for (let elem2 of modalProducts) {
			elem2.classList.remove('active');
		}
	})
}


for (let elem of btnClose) {
	elem.addEventListener('click', function() {
		for (let elemModal of modal) {
			elemModal.style.display = 'none';
			document.body.classList.remove('body-overflow');
		}
	})
}

for (let elem of closeModal) {
	elem.addEventListener('click', function() {
		this.parentElement.classList.remove('active');
		document.body.classList.remove('body-overflow');
	})
}

for (let elem of boxProduct1) {
	elem.addEventListener('click', function() {
		modalProduct1.classList.add('active');
		if (!document.body.classList.contains('body-overflow')) {
			document.body.classList.add('body-overflow');
		}
	})
}

for (let elem of boxProduct2) {
	elem.addEventListener('click', function() {
		modalProduct2.classList.add('active');
		if (!document.body.classList.contains('body-overflow')) {
			document.body.classList.add('body-overflow');
		}
	})
}

for (let elem of boxProduct3) {
	elem.addEventListener('click', function() {
		modalProduct3.classList.add('active');
		if (!document.body.classList.contains('body-overflow')) {
			document.body.classList.add('body-overflow');
		}
	})
}

for (let elem of boxProduct4) {
	elem.addEventListener('click', function() {
		modalProduct4.classList.add('active');
		if (!document.body.classList.contains('body-overflow')) {
			document.body.classList.add('body-overflow');
		}
	})
}

jQuery(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
	  var div = $( "#modal_product-2" ); // тут указываем ID элемента
	  if ( !div.is(e.target) // если клик был не по нашему блоку
		  && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
		div.parent().removeClass('active');

		if (checkClass() & checkDisplay()) {
			document.body.classList.remove('body-overflow');
		}
	  }
	});
});

jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( "#modal_product-1" );
		if ( !div.is(e.target)
			&& div.has(e.target).length === 0 ) {
		div.parent().removeClass('active');
		}
	});
});

jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( "#modal_product-3" );
		if ( !div.is(e.target)
			&& div.has(e.target).length === 0 ) {
		div.parent().removeClass('active');
		}
	});
});

jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( "#modal_product-4" );
		if ( !div.is(e.target)
			&& div.has(e.target).length === 0 ) {
		div.parent().removeClass('active');
		}
	});
});

myBtn.addEventListener('click', function() {
	modalSimple.style.display = "block";
	document.body.classList.add('body-overflow');
});

// btn.onclick = function() {
//     modal.style.display = "block";
// }
span.onclick = function() {
	for (let elem of modal) {
		elem.style.display = "none";
	}
    // modal.style.display = "none";
	modalBasket.style.display = 'none';
	document.body.classList.remove('body-overflow');
}
window.onclick = function(event) {
	for (let elem of modal) {
		if (event.target == elem) {
			elem.style.display = "none";
			if (checkClass() & checkDisplay()) {
				document.body.classList.remove('body-overflow');
			}
		}
	}

}

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
        $(".main_menu > li > a").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });



// page init
jQuery(function(){
	jQuery('.burger').clickClass({
		classAdd: 'menu-opened',
		addToParent: true
	});
});

let header = document.querySelector('#menu');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	if (!header.classList.contains('menu-opened')) {
		document.body.classList.add('body-overflow');
	}
	if (header.classList.contains('menu-opened')) {
		document.body.classList.remove('body-overflow');
	}
});


$(function(){
  $('#menu .top-menu a').click(function(){
      $('#menu').removeClass('menu-opened');
	  document.body.classList.remove('body-overflow');
  });
});

jQuery(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( "#menu" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.removeClass('menu-opened');
			if (checkClass() & checkDisplay()) {
				document.body.classList.remove('body-overflow');
			}
			// if (checkDisplay()) {
			// 	document.body.classList.remove('body-overflow');
			// }
		}
	});
});

// let btnTest = document.querySelector('.btn_test');

// btnTest.addEventListener('click', checkClass);
 
function checkClass() {
	for (let product of modalProducts) {
		if (product.classList.contains('active')) {
			return false;
		}
	}

	return true;
}

function checkDisplay() {
	for (let elem of modal) {
		if (elem.style.display=="block") {
			return false;
		}
	}
	
	return true;
}




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




  $(window).scroll(function () {
    $(".main-header").toggleClass("header-scroll", $(this).scrollTop() > 0);
  });




$(window).on('load', function() {

  AOS.init({disable: 'mobile'});

});
