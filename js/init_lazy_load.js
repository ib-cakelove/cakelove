 $(function() {

 	var loadFunction = function(event) {
	    var currentImagesToShow = $(".current figure img");
	    
	    $('.current figure .lazy').lazy({
	     	effect: 'fadeIn'
		});

	    $('.show figure .lazy').lazy({
	     	effect: 'fadeIn'
		});		
	};

	$( ".grid-wrap .imageContainer" ).click(loadFunction);
	$( ".nav-prev" ).click(loadFunction);
	$( ".nav-next" ).click(loadFunction);

});