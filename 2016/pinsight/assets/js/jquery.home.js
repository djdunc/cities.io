$(window).on("load", function() {

	var images = [
		'pin-cyan.png', 'pin-green.png', 'pin-red.png', 'pin-yellow.png', 'hashtag.png',
		// 'bg-red.jpg', 'bg-yellow.jpg', 'bg-green.jpg', 'bg-cyan.jpg'
		'bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg', 'bg-6.jpg', 'bg-7.jpg', 'bg-8.jpg'
	];
	var imageIndex = 0;

	function preloadImage() {

	    var img = new Image();

	    img.onload = function () {
	        if ( imageIndex < images.length ) {
	            preloadImage();
	        }
	        else {
    			$("#preloader").fadeOut("fast", function() {
					$(this).remove();
					$("#wrapper").fadeIn("fast", function() { init(); });
				});	
	        }
	    }
	    img.src = "assets/images/" + images[imageIndex];
    	++imageIndex;
	}
	preloadImage();

	function init() {

		var colours = [ 
			[ "red", "green", "cyan", "yellow" ],
			[ "red", "yellow", "cyan", "green" ],
			[ "cyan", "red", "yellow", "green" ],
			[ "cyan", "green", "red", "yellow" ],
			[ "green", "yellow", "red", "cyan" ],
			[ "green", "cyan", "yellow", "red" ],
			[ "yellow", "red", "green", "cyan" ],
			[ "yellow", "cyan", "red", "green" ]
		];

		var quadLastPalette = 0;
		var pinLastPalette = 0;

		var quadCounter = 0;

		var lastQuadRandNum = 0;

		setInterval( changeQuadrantsBg, 600);

		function changeQuadrantsBg()
		{
			// Fade out random one of current bg
			var quadRandNum = Math.floor(Math.random()*(4));

			if ( quadRandNum == lastQuadRandNum ) {
				quadRandNum++;
				if ( quadRandNum > 3)
					quadRandNum = 0;
			}

			lastQuadRandNum = quadRandNum;
			// console.log(quadRandNum);

			var $quadBgs = $(".quadrant").eq(quadRandNum).find("span.bg");

			$quadBgs.each( function(i, el) {
				var $el = $(el);

				if ( $el.hasClass("bg-active") )
					$el.fadeTo(600, 0.1, function() {});
				else
					$el.fadeTo(600, 0, function() {});

				if ( $el.hasClass("bg-active") )
					$el.removeClass("bg-active");
				else
					$el.addClass("bg-active");
			});

			// var quadIndices = [];

			// $(".quadrant").each( function(i, quadrant) {
			// 	if ( $(quadrant).hasClass( "bg-active" ) )
			// 		quadIndices.push( $(quadrant).index() );
			// });

			// var randQuadIndex = Math.floor(Math.random()*(quadIndices.length));

			// $(".quadrant").eq(randQuadIndex)
			// 	.removeClass("bg-active")
			// 	.find("span.bg").fadeOut(500, function() {});
		}

		function changeQuadrants()
		{
			var quadRandNum = Math.floor(Math.random()*(colours.length)+0);
			var quadImageRandNum1 = Math.floor(Math.random()*(4)+0);
			var quadImageRandNum2 = Math.floor(Math.random()*(4)+0);
			var pinRandNum = Math.floor(Math.random()*(colours.length)+0);

			// Avoid same in a row by redoing
			if ( quadRandNum == quadLastPalette )
				quadRandNum = Math.floor(Math.random()*(colours.length)+0);
			if ( pinRandNum == pinLastPalette )
				pinRandNum = Math.floor(Math.random()*(colours.length)+0);

			quadLastPalette = quadRandNum;
			pinLastPalette = pinRandNum;

			// var quadPalette = colours[ quadRandNum ];
			var quadPalette = colours[ quadCounter ];
			var pinPalette = colours[ pinRandNum ];


			$(".quadrant").each( function(i) {

				// Change the quadrant bg colour
				$(this)
					.removeClass( "image" );
					// .removeClass( quadPalette.join(" ") + " image" )
					// .addClass( quadPalette[i] );

				// Make it a bg image if randomly selected
				if ( i == quadImageRandNum1 )
					$(this).addClass("image");
				if ( ! $(this).hasClass("image")
						&& i == quadImageRandNum2 )
					$(this).addClass("image");

				// Change the quadrant's pin's colour
				// $(".pin", this)
				// 	.removeClass( pinPalette.join(" ") + " image" )
				// 	.addClass( pinPalette[i] );
			});

			if ( quadCounter == 3 )
				quadCounter = 0;
			else
				++quadCounter;
		}
	}

});

$(document).ready( function() {

	// Disclaimer

	$("#disclaimer button").click( function() {

		$("#wrapper").toggleClass("pushed");
		$("#disclaimer-content").toggleClass("active");

		if ( $(this).text() == "Disclaimer" )
			$(this).text("Hide");
		else
			$(this).text("Disclaimer");
	});

});