let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	this.parentElement.classList.toggle('menu_opened');
});



let btns = document.querySelectorAll('.btn_anim');

btns.forEach((btn) => {
	btn.addEventListener('click', clickBtn);

	function clickBtn() {
		btn.classList.add('active');
	
		let sound_for_btn = new Audio("audio/click_button.mp3");
		 sound_for_btn.play();
	
		 btn.removeEventListener('click', clickBtn);
	
		setTimeout(addClass, 350);
	
		function addClass() {
			btn.classList.remove('active');
	
			btn.addEventListener('click', clickBtn);
		}
	}
})

let boxBottom = document.querySelector('.section-1 .box_content > .box_bottom');
let boxDoor = boxBottom.querySelector('.box_resize');
let boxDoorHeight = boxDoor.offsetHeight;
let windowHeight = window.innerHeight;

if (getHeightRatio(boxDoor.offsetHeight, window.innerHeight)) {
	boxBottom.classList.add('small_height_window');
}

window.addEventListener('resize', function() {
	if (getHeightRatio(boxDoor.offsetHeight, window.innerHeight) && !boxBottom.classList.contains('small_height_window')) {
		boxBottom.classList.add('small_height_window');
	}
	if (!getHeightRatio(boxDoor.offsetHeight, window.innerHeight) && boxBottom.classList.contains('small_height_window')) {
		boxBottom.classList.remove('small_height_window');
	}
});

function getHeightRatio(heightElem, heightWindow) {
	if (heightElem / heightWindow * 100 > 77) {
		return true;
	} else {
		return false;
	}
}
