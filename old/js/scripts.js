$(document).ready(function() {
  
	/*--------------------------------------------------
	common
	--------------------------------------------------*/
	if($('#page').hasClass('overlay-active')) {
		$('#page').removeClass('overlay-active');
	}
	if($('#wrapper').hasClass('menu-open'))
		$('#wrapper').removeClass('menu-open');

	if($('#ic-menu').hasClass('active'))
		$('#ic-menu').removeClass('active');

	if($('#main-menu .menu-item.has-children').has ('submenu-active'))
		$('#main-menu .menu-item.has-children').removeClass('submenu-active');



	// headroom header
	var myElement = document.querySelector('header');
	var headroom  = new Headroom(myElement);
	headroom.init();

	var idCheck = 0;
	$('.main .main-content').each(function(){
		idCheck = idCheck + 1;
		if((idCheck % 2) == 0)
			$(this).addClass('grey');
	});

	// $('#ic-menu-main').click(function(){
	// 	$('body').toggleClass('menu-active');
	// 	$(this).toggleClass('ic-menu-open');
	// });

	// $('.page-overlay').click(function(){
	// 	$('body').removeClass('menu-active');
	// 	$('#ic-menu-main').removeClass('ic-menu-open');
	// });

	// var wWidth = $(window).width();
	// var wHeight = $(window).height();
	// wHeight = wHeight - 40;

	// $('.main-content').css('width', wWidth);
	// $('.main-content').css('height', wHeight);

	/*--------------------------------------------------*/
	menuExpand();
	menuToggle();
	sectionFullscreen();
	sectionFullscreen();
	imageSlider3D();


});

$(window).resize(function(){
	sectionFullscreen();
	sectionFullscreen();
});

function menuExpand() {
	$('#main-menu .menu-item.has-children').click(function () {
		if($('#main-menu .menu-item.has-children').hasClass('submenu-active')) {
			$('#main-menu .menu-item.has-children').removeClass('submenu-active');
			$(this).addClass('submenu-active');
		}
		$(this).toggleClass('submenu-active');
		$('body').toggleClass('overlay-active');
		$('#wrapper').toggleClass('menu-open');
	})

	// $('#main-menu .menu-item.has-children').click(function() {
	// 	if($('#main-menu .menu-item.has-children').hasClass('submenu-active'))
	// 		$('#main-menu .menu-item.has-children').removeClass('submenu-active');
	// 	$(this).toggleClass('submenu-active');

	// 		$('body').toggleClass('overlay-active');
	// 		$('#wrapper').toggleClass('menu-open');
		
	// });
}

function menuToggle() {
	$('#ic-menu').click(function() {
		$(this).toggleClass('active');
		$('body').toggleClass('overlay-active');
		$('#wrapper').toggleClass('menu-open');
	});

	$('.overlay').click(function() {
		$('#page').removeClass('overlay-active');
		$('#wrapper').removeClass('menu-open');
		$('#ic-menu').removeClass('active');
		$('#main-menu .menu-item.has-children').removeClass('submenu-active');
	});
}

function sectionFullscreen() {
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	$('.main-content.full').css('width', wWidth);
	$('.main-content.full').css('height', wHeight);
};

function sectionFullscreen() {
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();

    $('.main-content').css('width', pageWidth);
    $('.main-content').css('height', pageHeight);
    
    $('.owl-carousel').css('width', pageWidth);
    $('.owl-carousel').css('height', pageHeight);
    
    // $('.owl-stage-outer').css('width', pageWidth);
    // $('.owl-stage-outer').css('height', pageHeight);

    // $('#home-carousel').css('width', pageWidth);
    // $('#home-carousel').css('height', pageHeight);
    // $('#home-carousel .carousel-item').css('width', pageWidth);
    // $('#home-carousel .carousel-item').css('height', pageHeight);

    // $('#home-carousel .owl-wrapper-outer').css('width', pageWidth);
    // $('#home-carousel .owl-wrapper-outer').css('height', pageHeight);
    // $('#home-carousel .owl-controls .owl-buttons .owl-prev').css('width', 200);
    // $('#home-carousel .owl-controls .owl-buttons .owl-prev').css('height', pageHeight);
    // $('#home-carousel .owl-controls .owl-buttons .owl-next').css('width', 200);
    // $('#home-carousel .owl-controls .owl-buttons .owl-next').css('height', pageHeight);
};

function imageSlider3D() {
    var i = 0;
    var rel = '';

    $('.image-slider .images .image-item').each(function() {
    	rel = rel + 1;
    	//console.log($(this).attr('rel'));
    });
}

(function($) { "use strict";
	Royal_Preloader.config({
	  mode:           'logo',
	  timeout:        0,
	  logo:           '/images/_inc/logo-white.png',
	});
})(jQuery);















