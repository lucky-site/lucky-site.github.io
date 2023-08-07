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
