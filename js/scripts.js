$(document).ready(function() {
  $('.flip-container').click(function(e) {
    $(this).toggleClass('flipped');
  });
  $(function() {
    $('#ms_timer').countdowntimer({
      minutes: 15,
      seconds: 00,
      size: "lg"
    });
  });
  $(function() {
    $('#ms_timer_1').countdowntimer({
      minutes: 0,
      seconds: 15,
      size: "lg"
    });
  });
  $(function() {
    $('#ms_timer_2').countdowntimer({
      minutes: 0,
      seconds: 15,
      size: "lg"
    });
  });
    $(function() {
    $('#ms_timer_3').countdowntimer({
      minutes: 0,
      seconds: 5,
      size: "lg"
    });
  });
  $(function() {
    $('#ms_timer_4').countdowntimer({
      minutes: 0,
      seconds: 5,
      size: "lg"
    });
  });

  $('.bg-app').click(function() {
      $('.logo').fadeIn();
       $('.info').delay(1000).fadeIn('slow');
       $('.index-login').delay(2000).fadeIn('slow');
  }); 

  var elem = document.getElementById('mySwipe');
  window.mySwipe = Swipe(elem, {
    // startSlide: 4,
    // auto: 3000,
    // continuous: true,
    // disableScroll: true,
    stopPropagation: true,
    // callback: function(index, element) {},
    // transitionEnd: function(index, element) {}
  });
});