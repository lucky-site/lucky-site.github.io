

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
		$('body,html').animate({scrollTop: top}, 1000);
	});
});


let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	this.parentElement.classList.toggle('menu-opened');
});




var modal = document.querySelector('#myModal');
var btns = document.querySelectorAll(".myBtn");
var span = document.querySelectorAll(".close");

for (let btn of btns) {
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
}
for (let btn of span) {
    btn.addEventListener('click', function() {
        modal.style.display = 'none';
    })
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Отправка заявки 
// $(document).ready(function() {
//     $('#form_modal').submit(function() {
//         if ( document.form_modal.phone.value == '' ) {
//             valid = false;
//             $("#text_modal").text("Введите номер телефона");
//             return valid;
//         }
//         $.ajax({
//             type: "POST",
//             url: "mail/mail_modal.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find('input').val('');
//             $('#form_modal').trigger('reset');
//             $("#text_modal").text("Ваша заявка принята");
//         });
//         return false;
//     });
// });

// (function ($) {
//     $(function () {
//       $("ul.tabs__caption").on("click", "li:not(.active)", function () {
//         $(this)
//           .addClass("active")
//           .siblings()
//           .removeClass("active")
//           .closest("div.tabs")
//           .find("div.tabs__content")
//           .removeClass("active")
//           .eq($(this).index())
//           .addClass("active");
//       });
//     });
//   })(jQuery);



