/**
 * detect IE browser
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    alert('Your are using Internet Explorer ' +
    parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10) +
    ' To have a better experience Please a use modern web browser like chrome, firfox...')
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    alert('Your are using Internet Explorer ' +
    parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10) +
    ' To have a better experience Please use a modern web browser like Chrome or Firefox.')
  }

  // var edge = ua.indexOf('Edge/');
  // if (edge > 0) {
  //   // Edge (IE 12+) => return version number
  //   alert('Your are using Edge browser ' +
  //   parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10) +
  //   ' To have a better experience Please use modern web browser like Chrome or Firefox.')
  // }
  
  // other browser
  return false;
}

detectIE()


$(document).ready(function () {

  // jQuery NiceScroll
  $("body").niceScroll({
    cursorcolor: "#d300a5",
    cursorwidth: "14px",
    background: "rgba(20,20,20,0.3)",
    cursorborder: "1px solid #d300a5",
  });
  

  
  // Scrol Reveal
  window.sr = ScrollReveal();

  // HOME PAGE ANIMATION
  sr.reveal('.thumb-imgs .col-lg-4', {
    duration: 1000,
    distance: '10rem',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.bottom', {
    duration: 1000,
    distance: '10rem',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.left', {
    duration: 800,
    distance: '5rem',
    origin: 'left',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.right', {
    duration: 800,
    distance: '5rem',
    origin: 'right',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 180) {
      $('.social ul li').css({
        "width": "320px",
        "padding": "10px",
        "transition": "all .8s",
      });
      $('.social ul li i').css({
        "width": "40px",
        "height": "40px",
        "padding": "10px",
        "transition": "all .8s",
      });
    }
  });
  
  // THUMBNAILS Page Animation
  sr.reveal('.overlap-card', {
    delay: 100,
    useDelay: 'onload',
    viewFactor: 0,
    duration: 1200,
    distance: '10rem',
    origin: 'top',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.thumb-details .col-lg-4', {
    duration: 1000,
    distance: '10rem',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.banner-imgs .col-xl-6', {
    duration: 1000,
    distance: '10rem',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.logo-imgs .col-lg-6', {
    duration: 1000,
    distance: '10rem',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  sr.reveal('.outros-imgs .col-lg-6', {
    duration: 1000,
    distance: '10rem',
    easing: 'cubic-bezier(.24,.4,.78,.92)',
  });

  
  // Light Box
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  
  // Onclick Smooth Scroll
  $('.bounce').click(function () {
    // Get the selected element verticall position
    let position = $($(this).attr('href')).offset().top;

    // Set the verticall position of the scrollbar according to the above with animation
    $('html, body').animate({ scrollTop: position }, 1000)
  });

  $('.mail').click(function () {
    // Get the selected element verticall position
    let position = $($(this).attr('href')).offset().top;

    // Set the verticall position of the scrollbar according to the above with animation
    $('html, body').animate({ scrollTop: position }, 1000)
  });

  // ===== Scroll to Top ==== 
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1250) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 500);
  });

});

