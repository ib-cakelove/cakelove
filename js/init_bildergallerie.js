var currentImageType;

function selectImages(imageType){

    if (currentImageType == imageType) {
        return;
    };

    //Remove all items:
    $.each($(".imageContainer"),function(index, obj){
        $(obj).empty();

        if(index == 0){
            $(obj).append(
                $('<li>').attr('class','grid-sizer')
            );
        }
    });

    switch(imageType){
        case "bday":
            loadImagesIntoGrid("images/bildergalerie/geburtstag");
        break;
        case "wedding":
            loadImagesIntoGrid("images/bildergalerie/hochzeit");
        break;
        case "kids":
            loadImagesIntoGrid("images/bildergalerie/kinder");
        break;
        case "religious":
            loadImagesIntoGrid("images/bildergalerie/religious");
        break;
        case "else":
            loadImagesIntoGrid("images/bildergalerie/sonstiges");
        break;        
    }

    currentImageType = imageType;
}


function loadImagesIntoGrid(imageUrl){
    //Load images into 
    $.ajax({
      url: "getAllFilesFromDirectory?directoryName=" + imageUrl,
      success: function(data){
         $(data).each(function(imageIndex, imageObj){
            
            //Insert Image into every Container:
            $.each($(".imageContainer"),function(index, obj){
                var imageUrl;

                if(index == 0){ // get min directory folder
                    subUrl = imageObj.substring(0, imageObj.lastIndexOf("/") + 1 ) + "min";
                    fileName = imageObj.substring(imageObj.lastIndexOf('/'));
                    //place JPG to file extension
                    fileName = fileName.substring(0,fileName.lastIndexOf('.')) + ".JPG";

                    imageUrl = subUrl + fileName;
                } else  {
                    imageUrl = imageObj;
                }

                //Insert Image:
                $(obj).append(
                    $('<li>').append(
                        $('<figure>').append(
                            $('<img>').attr("src", imageUrl).attr("class","valign")
                ).attr("class","valign-wrapper")));


            });

         });

        reloadGridGallery();

      }
    });    

}

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

    selectImages("bday");

    initGridGallery();

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

        //call function:
        selectImages(selectedItem.attr("id"));
    }); 

    //Master detail view page
    $(window).bind("scroll", function () {
        //$('#master_view').height($('#detail_view').height())
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space