let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	this.parentElement.classList.toggle('menu_opened');
});

// let boxMenu = document.querySelector('.box_menu');

// document.addEventListener('click', function(event) {
// 	if (burger.parentElement.classList.contains('menu_opened')) {
// 		var isClickInsideElement = boxMenu.contains(event.target);

// 		if (!isClickInsideElement) {
// 			burger.parentElement.classList.remove('menu_opened');
// 		}
// 	}
// });

  

// button animation begin 

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

// button animation end

// tabs begin 

let linksMainTab = document.querySelectorAll('#navigation .link');
let tabsMainTab = document.querySelectorAll('.tabs .tab');

getTabs(linksMainTab, tabsMainTab);

let linksMint = document.querySelectorAll('.tabs_mint_head .link');
let tabsMint = document.querySelectorAll('.tabs_mint .mint_tab');

getTabs(linksMint, tabsMint);

let linksPixkey = document.querySelectorAll('.box_tabs_pixkey .link');
let tabsPixkey = document.querySelectorAll('.box_tabs_pixkey .tab_pixkey');

getTabs(linksPixkey, tabsPixkey);

function getTabs(arrLinks, arrTabs) {
	arrLinks.forEach((link, index) => {
		link.addEventListener('click', function() {
			if (!link.classList.contains('active')) {
				for (let link of arrLinks) {
					if (link.classList.contains('active')) {
						link.classList.remove('active');
					}
				}

				for (let tab of arrTabs) {
					if (tab.classList.contains('active')) {
						tab.classList.remove('active');
					}
				}

				link.classList.add('active');
				arrTabs[index].classList.add('active');
			}

			if (burger.parentElement.classList.contains('menu_opened')) {
				burger.parentElement.classList.remove('menu_opened');
			}
		})
	});
}

// tabs end 


document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		 
	  	if (!linksMainTab[0].classList.contains('active')) {
			linksMainTab.forEach((link) => {
				if (link.classList.contains('active')) {
					link.classList.remove('active');
				}
			});
			tabsMainTab.forEach((tab) => {
				if (tab.classList.contains('active')) {
					tab.classList.remove('active');
				}
			})

			linksMainTab[0].classList.add('active');
			tabsMainTab[0].classList.add('active');
		}
	}
});


let btnConnect = document.querySelectorAll('.btn_connect');
let mainPage = document.querySelector('.main_page');

btnConnect.forEach((btn) => {
	btn.addEventListener('click', function() {
		mainPage.classList.toggle('mint_active');
	});
});




// timer start 

let timer = document.querySelector('.box_count .count');
let text = document.querySelector('.box_count .text');

// Задайте целевую дату и время (год, месяц (от 0 до 11), день, часы, минуты, секунды)
const targetDate = new Date(2023, 8, 5, 10, 53, 59);


// Функция для обновления таймера
function updateTimer() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
	// Таймер истек
	clearInterval(timerInterval);
	text.textContent = 'WL closeD';
	timer.textContent = '';
	return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  timer.textContent = addZero(days) + ":" + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds); 
} 

function addZero(num) {
  if (num < 10) {
	num = '0' + num;
  }

  return num;
}

// Обновление таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

// Сразу же вызовем функцию, чтобы изначально показать оставшееся время
updateTimer();


// timer end 




// choose amount start 

let amount = document.querySelectorAll('.box_mint .box_amount span');

for (let elem of amount) {
	elem.addEventListener('click', function() {
		if (!this.classList.contains('active')) {
			amount.forEach((elem2) => {
				if (elem2.classList.contains('active')) {
					elem2.classList.remove('active');
				}
			})

			// for (let elem of amount) {
			// 	if (elem.classList.contains('active')) {
			// 		elem.classList.remove('active');
			// 	}
			// }

			this.classList.add('active');
		}
	});
}


// choose amount end 



// accordion begin 

let accordion = document.querySelector('.accordion');
let linksAccordion = accordion.querySelectorAll('.tab_accordion .link_accordion span');

linksAccordion.forEach((link) => {
	link.addEventListener('click', function() {
		if (this.closest('.tab_accordion').classList.contains('active')) {
			this.closest('.tab_accordion').classList.toggle('active');
		} else {
			linksAccordion.forEach((link) => {
				if (link.closest('.tab_accordion').classList.contains('active')) {
					link.closest('.tab_accordion').classList.remove('active');
				}
			});

			this.closest('.tab_accordion').classList.add('active');
		}
	});
});

// accordion end 



// coming soon begin 

linkComingSoon = document.querySelector('.link_coming_soon');

linkComingSoon.addEventListener('click', function() {
	let divComingSoon = document.createElement('div');
	divComingSoon.classList.add('box_coming_soon');

	let spanComingSoon = document.createElement('span');
	spanComingSoon.textContent = 'Coming soon...';
	spanComingSoon.classList.add('text_coming_soon');

	divComingSoon.append(spanComingSoon);
	linkComingSoon.parentElement.append(divComingSoon);

	setTimeout(function() {
		divComingSoon.remove();
	}, 3000);
})

// coming soon end 

