
function reloadGridGallery(){
    window.dispatchEvent(new Event("reloadGrid"));
}

function initGridGallery(){
    var $mask = "grid-gallery";
    var $targets = $('.'+ $mask);
    
    $targets.each(function (i){
        $(this).attr('id', $mask+'_'+[i+1]);
        $targetid = $(this).attr("id");
        new CBPGridGallery( document.getElementById($targetid) );
    });
}


(function($){
  $(function(){

    initGridGallery();
    reloadGridGallery();
    //Navigation Bar:
    $("#master_view_navigation").click(function(event){

        //right item selected?
        if ($(event.target.parentElement).attr("class") == "header_navigation" 
         || $(event.target).attr("class") == "header_navigation" 
         || $(event.target).is('ul') 
         || $(event.target).is('div') ) {
            return;
        };

        $(".section.active").removeClass();

        var selectedItem;
        if($(event.target).is("li")) {
            selectedItem = $(event.target);
        } else {
            selectedItem = $(event.target.parentElement);
        }

        //select new item
        selectedItem.attr("class","section active");
    }); 

    //Master detail view page
    $(window).bind("scroll", function () {
        //$('#master_view').height($('#detail_view').height())
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space