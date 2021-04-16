

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


    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('.main-header').addClass('header-scroll');
        } else {
            $('.main-header').removeClass('header-scroll');
        }
    })

});








