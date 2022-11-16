

(function ( $ ) {

	$.fn.grtyoutube = function( options ) {

		return this.each(function() {

			// Get video ID
			var getvideoid = $(this).attr("youtubeid");

			// Default options
			var settings = $.extend({
				videoID: getvideoid,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/'+settings.videoID+'?rel=0&wmode=transparent&autoplay='+settings.autoPlay+'&iv_load_policy=3" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close, .grtyoutube-popup").click(function(){
					$(".grtyoutube-popup").remove();
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
				}
			});
		});
	};

}( jQuery ));

var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
let myBtn = document.querySelectorAll('.my_btn');

for (let elem of myBtn) {
	elem.addEventListener('click', function() {
		modal.style.display = "block";
	});
}

// btn.onclick = function() {
//     modal.style.display = "block";
// }
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
