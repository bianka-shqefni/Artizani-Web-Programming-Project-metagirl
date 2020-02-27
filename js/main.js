// permasat per headerin

$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

// per te shfaqur fotot si popup
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.img-pop-home').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


// per te hapur videon

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false

    });
    $.extend(true, $.magnificPopup.defaults, {  
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'https://www.youtube.com/embed/WuQkPGEalfs' 
          }
        }
    }
});



  // dropdown superfish ne nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // navigimi Mobile 
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll per linkimet e menuse si ne telefon dhe ne faqe
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


    $(document).ready(function() {

    $('html, body').hide();

        if (window.location.hash) {

        setTimeout(function() {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

        scrollTop: $(window.location.hash).offset().top

        }, 1000)

        }, 0);

        }

        else {

        $('html, body').show();

        }

    });
  

  //  klas e Header scroll 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })


    $('.active-course-carusel').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        dots: true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });

        $('.active-tstimonial-carusel').owlCarousel({
        items:3,
        margin:30,
        autoplay:true,
        loop:true,
        dots: true,       
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });


      







 });
// forma validimi

var emri = document.forms['vform']['emri'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
var mbiemri = document.forms['vform']['mbiemri'];
var tel = document.forms['vform']['tel'];




var emri_error = document.getElementById('emri_error');
var mbiemri_error = document.getElementById('mbiemri_error');
var tel_error = document.getElementById('tel_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

emri.addEventListener('blur', emriVerify, true);
mbiemri.addEventListener('blur', mbiemriVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
tel.addEventListener('blur', telVerify, true);

function Validate() {

  if (emri.value == "") {
    emri.style.border = "1px solid red";
    document.getElementById('emri_div').style.color = "red";
    emri_error.textContent = " Vendosni emrin!";
    emri.focus();
    return false;
  }
 
  if (emri.value.length < 3) {
    emri.style.border = "1px solid red";
    document.getElementById('emri_div').style.color = "red";
    emri_error.textContent = "Emri duhet te jete te pakten 3 karaktere.";
    emri.focus();
    return false;
  }
  if (mbiemri.value == "") {
    mbiemri.style.border = "1px solid red";
    document.getElementById('mbiemri_div').style.color = "red";
    mbiemri_error.textContent = " Vendosni mbiemrin!";
    mbiemri.focus();
    return false;
  }
  if (mbiemri.value.length < 3) {
    mbiemri.style.border = "1px solid red";
    document.getElementById('mbiemri_div').style.color = "red";
    mbiemri_error.textContent = "Mbiemri duhet te jete te pakten 3 karaktere.";
    mbiemri.focus();
    return false;
  }
  
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Vendos email-in!";
    email.focus();
    return false;
  }
 
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Vendos password-in!";
    password.focus();
    return false;
  }
  
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "Password-et nuk perputhen!";
    return false;
  }
  if (tel.value == "") {
    tel.style.border = "1px solid red";
    document.getElementById('tel_div').style.color = "red";
    tel_error.textContent = "Vendos numrin e telefonit!";
    tel.focus();
    return false;
  }

  if(tel.value[0] !=0 || tel.value[1] !=6){
    tel.style.border = "1px solid red";
    document.getElementById('tel_div').style.color = "red";
    tel_error.textContent = "Numri i telefonit nuk eshte ne formatin e duuhur.";
    tel.focus();
    return false;
  }else if
    (tel.value[2] !=9 && tel.value[2] !=8 && tel.value[2] !=7){

      tel.style.border = "1px solid red";
    document.getElementById('tel_div').style.color = "red";
    tel_error.textContent = "Numri i telefonit nuk eshte ne formatin e duuhur.";
    tel.focus();
    return false;

  }else if (tel.value.length <10) {
    tel.style.border = "1px solid red";
    document.getElementById('tel_div').style.color = "red";
    tel_error.textContent = "Numri i telefonit nuk eshte ne formatin e duuhur.";
    tel.focus();
    return false;
  }


  }

     




function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    document.getElementById('password_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
  if (password.value === password_confirm.value) {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }

function telVerify() {
  if (tel.value != "") {
    tel.style.border = "1px solid #5e6e66";
    document.getElementById('tel_div').style.color = "#5e6e66";
    tel_error.innerHTML = "";
    return true;
  }
 
}

}



