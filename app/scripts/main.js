'use scrict';

$(function ($) {
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

  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('.bg1').parallax('50%', 0.1);
  $('.bg2').parallax('50%', 0.2);
  $('.bg3').parallax('50%', 0.2);
  $('.bg4').parallax('50%', 0.1);

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
            window.alert('message sent');
            console.log(data);
        }
    });
  });

});
