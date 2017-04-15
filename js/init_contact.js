

function sendContactEmail(dataObject){

    $.ajax({
      type: "POST",
      url: "/sendContactEmail",
      data: {"content" : JSON.stringify(dataObject)},
      success: function(res){
        console.log("sendContactEmail" + res);
      }
    });

}


(function($){
  $(function(){

        $("#submitButton").click(function() {
            
            var content = new Object;

            content.firstName       = $("#first_name").val();
            content.lastName        = $("#last_name").val();
            content.email           = $("#email").val();
            content.telephone       = $("#telephone").val();
            content.additionalText  = $("#additional_text").val();

            sendContactEmail(content);

        });

  }); // end of document ready
})(jQuery); // end of jQuery name space