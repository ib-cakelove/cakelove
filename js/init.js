(function($){
  $(function(){

	$('.button-collapse').sideNav({ //Init smart phone navigation
		menuWidth: 300, // Default is 240
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});

    $('.parallax').parallax(); //Init pictures scroll down animation
    
    $('.slider').slider({
    	full_width: true,
		height: 800,
		transition: 800,
		interval: 5000
	});

    $('#scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space