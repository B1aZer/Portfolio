'use scrict';

$(function () {
  var ht = $(window).height();

  console.log('\'Allo \'Allo!');

  $('.skill-bg').each(function () {
    $(this).waypoint(function () {
      var bar = $(this).find('div');
      var prc = $(this).data('prc');
      var label = $(this).find('.skill-bar-percent');
      bar.animate({'width':prc + '%'}, 800, 'swing', function () {
        /*label.countTo({from: 0, to: prc, speed: 400});*/
        /*label.animate({'left':prc + '%'});*/
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

  function parralaxMed() {
      console.log('med');
      $('.bg1').parallax('50%', 0.2);
      $('.bg2').parallax('50%', 0.6);
      $('.bg3').parallax('50%', 0.6);
      $('.bg4').parallax('50%', 0.6);
  }
	function parallaxInit() {
		var testMobile = isMobile.any();

		if (testMobile === null)
		{
        parralaxMed();
		}
	}

  parallaxInit();

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
    console.log('appear11');
    $(this).each(function(){
      var animClasses = $(this).data('animation');
      $(this).addClass('animated activated' + ' ' + animClasses);
    });
  }, {
    triggerOnce: true,
    offset: '50%'
  });

  $('.number').each(function () {
    $(this).html('0');
  });

  $('.separators').waypoint(function() {
    console.log('appear');
    $(this).find('.number').each(function () {
      var prc = $(this).data('prc');
      var label = $(this);
      label.countTo({from: 0, to: prc, speed: 800});
    });
  }, {
    triggerOnce: true,
    offset: '25%'
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
        success: function() {
            $('#myModal').modal();
        }
    });
  });

  // PORTFOLIO
  function setColumns() { 
  console.log('go');
    var container = $('#what');
    var winWidth = container.find('.container').width(), 
    columnNumb = 3; 
    postWidth = Math.floor(winWidth / columnNumb);

    container.find('.thumb').each(function () { 
      $(this).css( { 
        width : postWidth + 'px' 
      });
    });
  }		

  // FIRST IMAGE	
  function fullscreenImgHeight(){
    $('#intro').css({height:ht});
  }

  fullscreenImgHeight();

  $(window).bind('resize', function () { 
    /*setColumns();			*/
    fullscreenImgHeight();
  });

});

