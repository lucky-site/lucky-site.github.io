$(window).scroll(function () {
  $(".main-header").toggleClass("header-scroll", $(this).scrollTop() > 0);
});


// paralax effect

var paralax = document.querySelectorAll(".paralax");

for (let elem of paralax) {

  /* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */
  var moveCoef = 0.5;

  window.addEventListener("scroll", scroll);
  window.addEventListener("resize", scroll);
  scroll();

  function scroll() {
    /* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
    var r = elem.getBoundingClientRect();

    /* центр паралакса */
    var paralaxYCenter = r.y + r.height / 2;
    /* центр экрана */
    var scrollYCenter = window.innerHeight / 2;

    /* Вычисляем смещение */
    var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;

    elem.style.backgroundPositionY = move + "px";
  }
}

AOS.init({disable: 'mobile'});

// Animation counter

$(function() {
    var num = $(".number");
    num.each(function(indx, el) {
        var max = $(el).data("max");
        var duration = 3000;
        var visibility = checkViewport(el);
        $(el).on("animeNum", function() {
            $({n: 0}).animate({n: max}, {
                easing: "linear",
                duration: duration,
                step: function(now, fx) {
                    $(el).html(now | 0)
                }
            })
        }).data("visibility", visibility);
        visibility && $(el).trigger("animeNum")
    });

    function checkViewport(el) {
    var H = document.documentElement.clientHeight,
        h = el.scrollHeight,
        pos = el.getBoundingClientRect();
        return pos.top + h > 0 && pos.bottom - h < H
    }
    $(window).scroll(function() {
        num.each(function(indx, el) {
            var visibility = checkViewport(el);
            el = $(el);
            var old = el.data("visibility");
            old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
        })
    })
});


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
    if (event.target == modal) {
        modal.style.display = "none";
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