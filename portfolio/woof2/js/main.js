



// page init
jQuery(function(){
	jQuery('.burger').clickClass({
		classAdd: 'menu-opened',
		addToParent: true
	});
});

$(function(){
  $('#navigation-parent .top-menu a').click(function(){
      $('#navigation-parent').removeClass('menu-opened');
  });
});

jQuery(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( "#navigation-parent" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.removeClass('menu-opened'); // скрываем его
		}
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


// Modal window

var modal = document.getElementById('myModal');
var btn = document.querySelector(".myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7) {
        modal.style.display = "none";
		modal2.style.display = "none";
		modal3.style.display = "none";
		modal4.style.display = "none";
		modal5.style.display = "none";
		modal6.style.display = "none";
		modal7.style.display = "none";
    }
}

var modal2 = document.getElementById('myModal2');
var btn2 = document.querySelector(".myBtn2");
var span2 = document.getElementById("close2");

btn2.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

var modal3 = document.getElementById('myModal3');
var btn3 = document.querySelector(".myBtn3");
var span3 = document.getElementById("close3");

btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

var modal4 = document.getElementById('myModal4');
var btn4 = document.querySelector(".myBtn4");
var span4 = document.getElementById("close4");

btn4.onclick = function() {
    modal4.style.display = "block";
}
span4.onclick = function() {
    modal4.style.display = "none";
}

var modal5 = document.getElementById('myModal5');
var btn5 = document.querySelector(".myBtn5");
var span5 = document.getElementById("close5");

btn5.onclick = function() {
    modal5.style.display = "block";
}
span5.onclick = function() {
    modal5.style.display = "none";
}

var modal6 = document.getElementById('myModal6');
var btn6 = document.querySelector(".myBtn6");
var span6 = document.getElementById("close6");

btn6.onclick = function() {
    modal6.style.display = "block";
}
span6.onclick = function() {
    modal6.style.display = "none";
}

var modal7 = document.getElementById('myModal7');
var btn7 = document.querySelector(".myBtn7");
var span7 = document.getElementById("close7");

btn7.onclick = function() {
    modal7.style.display = "block";
}
span7.onclick = function() {
    modal7.style.display = "none";
}
