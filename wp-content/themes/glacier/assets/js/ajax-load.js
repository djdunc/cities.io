/* 
This is script by VLThemes
https://themeforest.net/user/vlthemes
*/

jQuery.noConflict()(function($) {

	'use strict';

	var startPage = parseInt(ajax_load.startPage) + 1,
		maxPages = parseInt(ajax_load.maxPages),
		nextLink = ajax_load.nextLink,
		loadMoreButtonNone = ajax_load.loadMoreButtonNone,
		loadMoreButton = $('.ajax-button'),
		postsContainer = $('.ajaxContainer');

		 //console.log('next ' + nextLink + ', maxPages ' + maxPages + ', startPage ' + startPage);
		

	loadMoreButton.on('click', function(e){

		e.preventDefault();
		
		if(nextLink == null){
			return;
		}

		var t = $(this);
			
		if(!$(this).hasClass('disabled')){
			t.addClass('loaded');
		}

		if(startPage <= maxPages) {

			$.ajax({
				type: 'POST',
				url: nextLink,
				dataType: 'html',
				success: function(data) {
					var k = $(data),
					g = k.find('article');

					if(g.length > 0) {

						g.imagesLoaded(function() {

							if(postsContainer.hasClass('isotope')){
								postsContainer.append(g).isotope('appended', g).isotope('layout');
								
								  
								  $('a.showcase').lightcase({
								      transition: 'scrollVertical',
								      speedIn: 400,
								      speedOut: 300,
								  });
								
								  $('.flexslider').flexslider({
								    controlNav: false,
								    animation: "fade",  
								    prevText: '<i class="fa fa-angle-left"></i>',
								    nextText: '<i class="fa fa-angle-right"></i>',
								    slideshowSpeed: '3000',
								    pauseOnHover: true
								  });
								
							} else {
								postsContainer.append(g);
							}

						});




						t.removeClass('loaded');

					} else {

						t.removeClass('loaded');

						// No Posts
						t.find('span:not(.icon)').text(loadMoreButtonNone).end().addClass('disabled');


					}

					startPage++;
					nextLink = nextLink.replace(/\/page\/[0-9]?/,'/page/'+ startPage);

					if(startPage <= maxPages) {

						t.removeClass('loaded');

					} else {
							
						t.removeClass('loaded');

						// No Posts
						t.find('span:not(.icon)').text(loadMoreButtonNone).end().addClass('disabled');

					}

				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown);
				}
			});
		}

	});

});
