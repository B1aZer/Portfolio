'use scrict';

$(function () {
  var ht = $(window).height();

  console.log('\'Allo \'Allo!');

  $('.skill-bg').each(function () {
    $(this).waypoint(function () {
      var bar = $(this).find('div');
      var prc = $(this).data('prc');
      var label = $(this).find('.skill-bar-percent');
      console.log(prc);
      bar.animate({'width':prc + '%'}, 200, 'swing', function () {
        label.countTo({from: 0, to: prc, speed: 400});
        label.animate({'left':prc + '%'});
      });
    }, {
      offset: ht - 100,
      triggerOnce: !0
    });
  });

  /** PARALLAX **/
  /*$('#nav').localScroll(800);*/

/*----------------------------------------------------*/
/* MOBILE DETECT FUNCTION
/*----------------------------------------------------*/

	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

  function parralaxBig() {
      console.log('big');
      $('.bg1').parallax('50%', 0.2);
      $('.bg2').parallax('50%', 0.3);
      $('.bg3').parallax('50%', 0.2);
      $('.bg4').parallax('50%', 0.3);
  }

  function parralaxMed() {
      console.log('med');
      $('.bg1').parallax('50%', 0.2);
      $('.bg2').parallax('50%', 0.6);
      $('.bg3').parallax('50%', 0.6);
      $('.bg4').parallax('50%', 0.6);
  }

  function parralaxSml() {
      console.log('sml');
      $('.bg1').parallax('50%', 0.2);
      $('.bg2').parallax('50%', 0.8);
      $('.bg3').parallax('50%', 0.8);
      $('.bg4').parallax('50%', 0.8);
  }

	function parallaxInit() {
		testMobile = isMobile.any();

		if (testMobile == null)
		{
        parralaxMed();
		}
	}

  parallaxInit();

  function parallaxReset() {
    $('.bg1, .bg2, .bg3, .bg4').css({'background-position':'50% 0'});
  }

  function handlerBigFactory(className) {
    return {
      match : function() {
        console.log('match big');
        parralaxBig();
      },
      unmatch : function() {
        console.log('unmatch big');
        parallaxReset();
      }
    };
  }

  function handlerMedFactory(className) {
    return {
      match : function() {
        console.log('match med');
        parralaxMed();
      },
      unmatch : function() {
        console.log('unmatch med');
        parallaxReset();
      }
    };
  }

  function handlerSmlFactory(className) {
    return {
      match : function() {
        console.log('match sml');
        parralaxSml();
      },
      unmatch : function() {
        console.log('unmatch sml');
        parallaxReset();
      }
    };
  }

  /*
  enquire
    .register("screen and (min-width: 1280px)", handlerBigFactory(), false)
    .register("screen and (min-width: 768px) and (max-width: 1280px)", handlerMedFactory(), false)
    .register("screen and (min-width: 480px) and (max-width: 767px)", handlerSmlFactory(), false);
    */

  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

  /* BOUNCERS */
  $('.bouncer').waypoint(function() {
    console.log('appear');
    $(this).each(function(){
      var animClasses = $(this).data('animation');
      $(this).addClass('animated activated' + ' ' + animClasses);
    });
  }, {
    offset: ht - 100
  });

  /* PORTFOLIO */
  $('.portfolio .thumb .port-link').hover(function () {
    var overlay = $(this).find('.overlay');
    var animation = overlay.data('animation');
    overlay.addClass('animated activated' + ' ' + animation).css({'opacity': 1});
  }, function () {
    var overlay = $(this).find('.overlay');
    var animation = overlay.data('animation');
    overlay.removeClass('animated activated' + ' ' + animation).animate({'opacity': 0});
  });

  $('.form-submit-btn').on('click', function (e) {
    e.preventDefault();
    var dataSending = JSON.stringify($('form#contact-form-id').serializeArray());
    $.ajax({
        url: '/api/mail/',
        type: 'post',
        contentType: 'application/json',
        dataType: 'json',
        data: dataSending,
        success: function(data) {
            $('#myModal').modal();
        }
    });
  });

});
