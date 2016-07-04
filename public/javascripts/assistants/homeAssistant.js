
$(document).on("ready" , function() {

    //Trip Selection..
    triggerRoundTrip();

    //Data Collector for passenger count and city names..
    triggerPassengerCount();
    triggerAutocomplete();


    triggerDatePicker();

    triggerSearch();


    function triggerRoundTrip(){
        $("#one-way").on("click", function(){
            if($(".to, .fromtoimg, #todate").hasClass("hide")) {
            }
            $(".to, .fromtoimg, #todate").addClass("hide");
        });
        $("#two-way").on("click", function(){
            if($(".to, .fromtoimg, #todate").hasClass("hide")) {
                $(".to, .fromtoimg, #todate").removeClass("hide");
            }
        });
    }



    function triggerSearch(){
        $(".search-action").on("click", function(){
            if($("#source").val() != "" && $("#destination").val() !="") {
                initSearch();
                applyHeadervalues();
            }else{
                $(".error").removeClass("hide");
            }

        });
    }

});



