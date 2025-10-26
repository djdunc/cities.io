(function ($) {
	/*jslint undef: false, browser: true, devel: false, eqeqeq: false, bitwise: false, white: false, plusplus: false, regexp: false, nomen: false */ 
	/*global jQuery,setTimeout,projekktor,location,setInterval,YT,clearInterval,pixelentity,google */
                
	var targets = [];
                
	$.pixelentity.gmap = function() {
		
		
		var myLatlng,myOptions,map,infowindow,marker,target;
		var markers=[];
		var infoWindows = [];
		var maps = [];
		
		for (var i = 0;i<targets.length;i++) {
			
			target = targets[i];
			
			myLatlng = new google.maps.LatLng(target.attr("data-latitude"), target.attr("data-longitude"));
			
			myOptions = {
				zoom: parseInt(target.attr("data-zoom"),10) || 6,
				center: myLatlng,
				html: target.attr("data-title"),
				popup: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			map = new google.maps.Map(target[0], myOptions);
			
			markers[i] = new google.maps.Marker({
					position: myLatlng,
					map: map,
					title: target.attr("data-title"),
					infoWindowIndex : i
			});
			infoWindows[i] = new google.maps.InfoWindow(
				{content : target.data("description")});
			
			google.maps.event.addListener(markers[i], 'click', function(){
				infoWindows[this.infoWindowIndex].open(this.map, this);
			});
			
		}
		
	};
	
	function addTarget() {
		var target = $(this);
		target.data("description",target.html());
		targets.push(target);
	}
	
	
	function check(target,controller) {
		var t = target.find(".gmap");
		if (t.length > 0) {
			t.each(addTarget);
			$.getScript("http://maps.google.com/maps/api/js?sensor=false&callback=jQuery.pixelentity.gmap&async=2");
			return true;
		}
		return false;
	}
	
	$.pixelentity.widgets.add(check);
	
}(jQuery));