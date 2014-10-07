"use scrict"
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

});
