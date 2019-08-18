$(document).ready(function() {
  
	/*--------------------------------------------------
	common
	--------------------------------------------------*/
	$('#page').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
		}, 
		function() {
			$('#main').animate({"opacity":'1'},{queue:false,duration:999,easing:"easeInOutQuad"});
			contanimshow();
		
	});	
	if($('body').hasClass('page-animation'))
		$('.page').after('<div class="page-overlay"></div>');
	else
		$('.page-overlay').remove();

	// $('#nav-bar-min').click(function(){
	// 	$('body').toggleClass('menu-active');
	// 	$(this).toggleClass('nav-bar-min-open');		
	// });

	$('#ic-menu-main').click(function(){
		$('body').toggleClass('menu-active');
		$(this).toggleClass('ic-menu-open');
	});

	$('.page-overlay').click(function(){
		$('body').removeClass('menu-active');
		$('#ic-menu-main').removeClass('ic-menu-open');
	});

	var itemMenu = $('.main-menu .container > ul > li > a');
	itemMenu.click(function(){
		$(this).parent().toggleClass('item-parent');
	});	

	$('.table.seo h6').click(function(){
		$(this).parent().parent().toggleClass('content-show')
	})

	var wWidth = $(window).width();
	var wHeight = $(window).height();
	wHeight = wHeight - 40;

	$('.main-content').css('width', wWidth);
	$('.main-content').css('height', wHeight);


    // $(".page").removeClass("page-fixed");
    // $(".page").removeClass("page-fixed-top");
    // $(".page").removeClass("pinned");
	

	selectClick();

	// tabs('.contact-wrapper > .tabs-wrapper ul li', '.contact-wrapper > .tabs-wrapper ul li span:first-child', '.contact-wrapper > .tabs-content-wrapper > .tabs-content');
	// tabs('.map-wrapper > .tabs-wrapper ul li', '.map-wrapper > .tabs-wrapper ul li span:first-child', '.map-wrapper > .tabs-content-wrapper > .tabs-content');

	
});

$(window).resize(function(){
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	wHeight = wHeight - 40;

	$('.main-content').css('width', wWidth);
	$('.main-content').css('height', wHeight);

})


/*--------------------------------------------------
 all function
--------------------------------------------------*/
function tabs(obj, objClick, objShow){
	var itemActive = obj + '.active';
	var firstID = $(itemActive).find('span:first-child').attr('rel');

	$('.tabs-content[rel=' + firstID + ']').fadeIn();

	$(objClick).click(function(){
		$(objShow).hide();
		$(obj).removeClass('active');
		$(this).parent().addClass('active');

		var rel = $(this).attr('rel');
		$('.tabs-content[rel=' + rel + ']').fadeIn();
	});
}

function selectClick() {
	$('select').each(function(){
	    var $this = $(this),
	        numberOfOptions = $(this).children('option').length;

	    $(this).addClass('s-hidden');
	    $this.wrap('<div class="frm-select-wrapper"></div>');
	    $this.after('<div class="frm-selected"></div>');

	    var $sWrapper = $this.next('div.frm-selected');

	    $sWrapper.after('<div class="frm-icon"><div class="icon-select-arr"></div></div>');

	    
	    var check = $('select option').attr('selected');
	    if (check) {
	    	$sWrapper.text($this.children('option[selected="selected"]').text());
	    }
	    else {
	    	$sWrapper.text($this.children('option').eq(0).text());
		}


	    var $list = $('<ul />', {
	        'class': 'list'
	    }).insertAfter($sWrapper);

	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val()
	        }).appendTo($list);
	    }

	    var $listItems = $list.children('li');

	    $('.frm-select-wrapper').click(function (e) {
	        e.stopPropagation();
	        $('div.frm-selected.active').each(function () {
	            $(this).removeClass('active').next('ul.list').removeClass('listed-open');
	        });
	        $(this).find('.frm-selected').toggleClass('active').next('ul.list').addClass('listed-open');
	    });

	    $listItems.click(function (e) {
	        e.stopPropagation();
	        $sWrapper.text($(this).text()).removeClass('active');
	        $this.val($(this).attr('rel'));
	        $list.removeClass('listed-open');
	    });

	    $(document).click(function () {
	        $sWrapper.removeClass('active');
	        $list.removeClass('listed-open');
	    });
	});
}

(function($) { "use strict";
	Royal_Preloader.config({
	  mode:           'logo',
	  timeout:        0,
	  logo:           'images/_inc/logo_white_.png',
	});
})(jQuery);















