
var NAVIGATION = (function(navigation) {
	//V A R S
	var openMenu = $(".js-open-menu");
	var closeMenu = $(".js-close-menu");
	var itemMenu = $(".js-menu");
	
	navigation = {
		init: function(){
			navigation.Show();
		},
		
		Show: function(){
			openMenu.click(function(){
				TweenMax.to(itemMenu, 1, {autoAlpha: 1, transform : "translateX(0)", ease: Expo.easeOut});
			});

			closeMenu.click(function(){
				TweenMax.to(itemMenu, 1, {opacity: .3, transform : "translateX(100vw)", ease: Expo.easeIn});
			});
		},

		//WAYPOINTS
		scrollTo_page: function(){
			$('#scroller a').click(function(event) {
                event.preventDefault();
                id = $(this).data('id');
                topY = $(id).offset().top;
                TweenLite.to($(window), 1, { scrollTo:{y: topY, autoKill: true}, ease:Power2.easeInOut});
			});	
			$('#scroller__menu a').click(function(event) {
                event.preventDefault();
                id = $(this).data('id');
                topY = $(id).offset().top;
				TweenLite.to($(window), 1, { scrollTo:{y: topY, autoKill: true}, ease:Power2.easeInOut});
				TweenMax.to(itemMenu, 1, {opacity: .3, transform : "translateX(100vw)", ease: Expo.easeIn});
			});		
		}

	}

	return navigation;

}(NAVIGATION || {}));
