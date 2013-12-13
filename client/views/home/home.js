

Template.home.rendered = function () {
  $('#myCarousel').carousel({
  interval: 10000
  });

  $('#nav').animate({top:'-51px'},0);
  var scrollState = 'top';

  $(window).scroll(function(){

      var currentScroll = $(window).scrollTop();

      if ((currentScroll != 0) && ( scrollState === 'top' )) {
        $('#nav').stop().animate({top:'0px'}, 500);
        scrollState = 'scrolled';
      }
      else if ( ( currentScroll === 0 ) && ( scrollState === 'scrolled' ) ) {
        $('#nav').stop().animate({top:'-51px'},500);
        scrollState = 'top';
        }
  });






};


