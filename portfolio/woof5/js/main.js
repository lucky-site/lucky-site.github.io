

// burger

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


      // phone 

      let display = document.querySelector('.display');
      let number_phone = document.querySelectorAll('.number_phone');
      let btn_1_phone = document.querySelector('.btn-1_phone');
      let btn_2_phone = document.querySelector('.btn-2_phone');

      number_phone.forEach(button => {
        button.addEventListener("click", () => {
          if (display.textContent.length <= 12) {
            // sound_click.play();

            if (button.classList.contains('number_phone-1')) {
              let sound_for_btn = new Audio("media/1.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-2')) {
              let sound_for_btn = new Audio("media/2.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-3')) {
              let sound_for_btn = new Audio("media/3.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-4')) {
              let sound_for_btn = new Audio("media/4.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-5')) {
              let sound_for_btn = new Audio("media/5.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-6')) {
              let sound_for_btn = new Audio("media/6.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-7')) {
              let sound_for_btn = new Audio("media/7.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-8')) {
              let sound_for_btn = new Audio("media/8.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-9')) {
              let sound_for_btn = new Audio("media/9.mp3");

              sound_for_btn.play();
            }

            if (button.classList.contains('number_phone-0')) {
              let sound_for_btn = new Audio("media/0.mp3");

              sound_for_btn.play();
            }
          }
        });
      });

      for (elem of number_phone) {
        elem.addEventListener('click', function() {
          if (display.textContent.length == 3 || display.textContent.length == 7 || display.textContent.length == 10) {
            display.textContent += '-';
          }

          if (display.textContent.length <= 12) {
            display.textContent += this.textContent;
          }
        });
      }

      btn_1_phone.addEventListener('click', function() {
        let sound_dialing_number = new Audio("media/sound_phone.mp3");

        sound_dialing_number.play();

        setTimeout(function() {
          display.textContent = 'ERROR';
        }, 8000);
      });

      btn_2_phone.addEventListener('click', function() {
        display.textContent = '';
      });




	  



      // passcode
      
      let input_pin = document.querySelector('.input_pin');

      input_pin.addEventListener('input', function() {
        if (input_pin.value.length == '4') {
          input_pin.blur();
        }
      });

      input_pin.addEventListener('focus', function() {
        error_message.classList.remove('active');
      });


      let btn_1_passcode = document.querySelector('.btn-1_passcode');
      let btn_2_passcode = document.querySelector('.btn-2_passcode');
      let amount_attempts = document.querySelector('.amount_attempts');
      let error_message = document.querySelector('.box_error');

      btn_1_passcode.addEventListener('click', function() {
        if (amount_attempts.textContent != 0) {
          amount_attempts.textContent = +amount_attempts.textContent - 1;
          input_pin.value = '';
          error_message.classList.add('active');

          if (amount_attempts.textContent == 0) {
            btn_1_passcode.classList.add('not_active');
          }
        }
      });

      btn_2_passcode.addEventListener('click', function() {
        input_pin.value = '';
        error_message.classList.remove('active');
      });



      // modal video

    // получаем все элементы
    var videoEl = document.querySelector('.myVideo'),
        videoplayBtn = document.getElementById('playBtn'),
        vidControls = document.getElementById('controls');


        // если браузер может воспроизводить видео удаляем класс
        videoEl.addEventListener('canplaythrough', function () {
            vidControls.classList.remove('hidden');
        }, false);
        // запускам или останавливаем воспроизведение
        videoplayBtn.addEventListener('click', function () {
            if (videoEl.paused) {
                videoEl.play();
            } else {
                videoEl.pause();
            }
        }, false);


        videoEl.addEventListener('play', function () {

            videoplayBtn.innerHTML="❚❚";
        }, false);


        videoEl.addEventListener('pause', function () {

            videoplayBtn.innerHTML="►";
        }, false);
        


        // music and lamp

        let btn_sound = document.querySelector('.btn-6');
        let btn_lamp = document.querySelector('.btn-7');
        let lamp = document.querySelector('.box_lamp');
      
        btn_lamp.addEventListener('click', function() {
          $('.box_lamp').addClass('lamp_active');
      
          setTimeout(function(){
          $('.box_lamp').removeClass('lamp_active');
          },3500)
      
        })
      
        btn_sound.addEventListener('click', function() {
          this.classList.toggle('sound_off');
        });



        

      // sound for botton


      let btn_open_sound = document.querySelectorAll('.btn_open_sound'); 
      let btn_close_sound = document.querySelectorAll('.close'); 
      let sound_link_wallet = document.querySelector('.link_wallet');
      let sound_lamp = document.querySelector('.btn-7_sound');
      let btn_click = document.querySelectorAll('.btn_click');

      for (let elem of btn_click) {
        elem.addEventListener('click', function() {
          let sound_for_btn = new Audio("media/click-button.mp3");

          sound_for_btn.play();
        });
      }

      btn_sound.addEventListener('click', function() {
          let sound_for_btn = new Audio("media/sound-on-off.mp3");

          sound_for_btn.play();
      });

      sound_lamp.addEventListener('click', function() {
          let sound_for_btn = new Audio("media/door-button.mp3");

          sound_for_btn.play();
      });

      sound_link_wallet.addEventListener('click', function() {
          let sound_for_btn = new Audio("media/connect-wallet.mp3");

          sound_for_btn.play();
      });

      for (let elem of btn_open_sound) {
        elem.addEventListener('click', function() {
          let sound_for_btn = new Audio("media/open-button.mp3");

          sound_for_btn.play();
        });
      }

      for (let elem of btn_close_sound) {
        elem.addEventListener('click', function() {
          let sound_for_btn = new Audio("media/x-button.mp3");

          sound_for_btn.play();
        });
      }
    
    
    

      // box_amount

      let num = document.querySelectorAll('.box_amount .box_number');
      let btn_prev = document.querySelector('.box_prev');
      let btn_next = document.querySelector('.box_next');

      btn_prev.addEventListener('click', function() {
        let elem = document.querySelector('.box_number.active');


        if (elem != num[0]) {
          elem.classList.remove('active');
          elem.previousElementSibling.classList.remove('prev-1_active');
          elem.previousElementSibling.classList.add('active');
        }
        if (elem != num[0] & elem != num[1]) {
          elem.classList.remove('active');
          elem.previousElementSibling.classList.remove('prev-1_active');
          elem.previousElementSibling.classList.add('active');
          elem.previousElementSibling.previousElementSibling.classList.remove('prev-2_active');
          elem.previousElementSibling.previousElementSibling.classList.add('prev-1_active');
        }
        if (elem != num[0] & elem != num[1] & elem != num[2]) {
          elem.classList.remove('active');
          elem.previousElementSibling.classList.remove('prev-1_active');
          elem.previousElementSibling.classList.add('active');
          elem.previousElementSibling.previousElementSibling.classList.remove('prev-2_active');
          elem.previousElementSibling.previousElementSibling.classList.add('prev-1_active');
          elem.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('prev-3_active');
          elem.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('prev-2_active');
        }
      });

      btn_next.addEventListener('click', function() {
        let elem = document.querySelector('.box_number.active');


        if (elem != num[4]) {
          elem.classList.remove('active');
          elem.classList.add('prev-1_active');
          elem.nextElementSibling.classList.add('active');
          if (elem != num[0]) {
            elem.previousElementSibling.classList.remove('prev-1_active');
            elem.previousElementSibling.classList.add('prev-2_active');
          }
          if (elem != num[0] & elem != num[1]) {
            elem.previousElementSibling.previousElementSibling.classList.remove('prev-2_active');
            elem.previousElementSibling.previousElementSibling.classList.add('prev-3_active');
          }
        }
      });

      for (let elem of num) {
        elem.addEventListener('click', function() {
          for (let elem2 of num) {
            elem2.classList.remove('active', 'prev-1_active', 'prev-2_active', 'prev-3_active');
          }
          this.classList.add('active');
          if (this != num[0]) {
            elem.previousElementSibling.classList.add('prev-1_active');
          }
          if (this != num[0] & this != num[1]) {
            elem.previousElementSibling.previousElementSibling.classList.add('prev-2_active');
          }
          if (this != num[0] & this != num[1] & this != num[2]) {
            elem.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('prev-3_active');
          }
        });
      }




    
	  


    // sound on/off

	document.getElementById("mybtn_sound").onclick = function() {
    var myaudio = document.getElementById("myaudio");
    if(myaudio.paused == true) {
      document.getElementById("myaudio").play();
    }
    else if (myaudio.paused == false) {
      document.getElementById("myaudio").pause();
    }
  }






    // modal audio

    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

    var start = function() {
    var audio = document.getElementById('audio');
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var audioSrc = ctx.createMediaElementSource(audio);
    // we have to connect the MediaElementSource with the analyser 
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    var canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 10, //width of the meters in the spectrum
        gap = 2, //gap between meters
        capHeight = 2,
        capStyle = '#fff',
        meterNum = 800 / (10 + 2), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
        ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(1, '#0f0');
        gradient.addColorStop(0.5, '#ff0');
        gradient.addColorStop(0, '#f00');
        // loop
        function renderFrame() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            var step = Math.round(array.length / meterNum); //sample limited data from the total array
            ctx.clearRect(0, 0, cwidth, cheight);
            for (var i = 0; i < meterNum; i++) {
                var value = array[i * step];
                if (capYPositionArray.length < Math.round(meterNum)) {
                    capYPositionArray.push(value);
                };
                ctx.fillStyle = capStyle;
                //draw the cap, with transition effect
                if (value < capYPositionArray[i]) {
                    ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
                } else {
                    ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                    capYPositionArray[i] = value;
                };
                ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
                ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
            }
            requestAnimationFrame(renderFrame);
        }
        renderFrame();
        // audio.play();
      };

      audio.onplay = function(){
          start();
      }


      document.addEventListener("DOMContentLoaded", (e)=> {

          //dom об'єкти елементів контролю
          var av = document.getElementById("audio");
          var playTime = document.getElementsByClassName("play-time")[0];
          var playBtn=document.getElementsByClassName("play-btn")[0];
          var curTime=document.getElementById("cur-time");

          //змінна для того, щоб відстежувати чи відбувається відтворення звуку
          var isPlaying = false;

          av.onloadedmetadata = function() {
            curTime.max=av.duration;
            };
            
          //функція виведення поточного часу відтворення
          av.ontimeupdate=function() {
            
              var sec_num = av.currentTime;
              var hours   = Math.floor(sec_num / 3600);
              var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
              var seconds = sec_num - (hours * 3600) - (minutes * 60);
              seconds=Math.round(seconds);

              if (hours < 10) {
                hours   = "0"+hours;
              }
              if (minutes < 10) {
                minutes = "0"+minutes;
              }
              if (seconds < 10) { seconds = "0"+seconds; } playTime.innerHTML = minutes+':'+seconds; 
              if(isPlaying) curTime.value=av.currentTime; 
         }; 

         curTime.onchange=function() { 

              av.pause(); av.currentTime=curTime.value; av.play(); 
         }; 

         playBtn.addEventListener("click", (a)=> {

          if(isPlaying)
          {
            av.pause();
            isPlaying=false;
            playBtn.innerHTML="►";
          }
          else
          {
            av.play();
            isPlaying=true;
            playBtn.innerHTML="❚❚";
          }
          
        });


      });










