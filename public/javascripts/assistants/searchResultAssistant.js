var resultJSON = [];
function toHome(){
    $(".tohome , .edit").on("click", function(){
        $(".searchresult__table").empty();
        $(".header, .content").removeClass("hide");
        $(".result-header").addClass("hide");
        $(".searchresult, .searchresult__table").addClass("hide");
        //slider.noUiSlider.remove();
    })
}


function initSearch(){
    $(".header, .content").addClass("hide");
    $(".result-header").removeClass("hide");
    $(".searchresult, .searchresult__table").removeClass("hide");
    toHome();

    //Price Slider stuffs goes here..
    //noUiSlider.create(slider, {
    //    start: [1000, 5000],
    //    connect: true,
    //    range: {
    //        'min': 1000,
    //        'max': 10000
    //    },
    //    pips: { // Show a scale with the slider
    //        mode: 'steps',
    //        density: 10
    //    }
    //});
    //slider.noUiSlider.on('update', function( values, handle ) {
    //        valueInput.value = values[handle];
    //        console.info("updated", values[handle]);
    //});

    $.ajax({
        url : "flight",
        success  :function(resultData){
            var inputJSON = resultData[0].flightdetailsone;
            while(resultJSON.length){resultJSON.pop();}
            for(keyValue in inputJSON){
                if(inputJSON[keyValue].fromcity == $("#source").val() && inputJSON[keyValue].tocity == $("#destination").val()){
                    resultJSON.push(inputJSON[keyValue]);
                }
            }
            var compiledTemplate1 = Handlebars.getTemplate('search');
            var html = compiledTemplate1(resultJSON);
            console.info(resultJSON.length)
            $('.searchresult').append(html);
            if(resultJSON.length == 0){
                $('.noResult').removeClass("hide");
            }

        }
    });
}

function applyHeadervalues(){
    $(".source-header").text($("#source").val());
    $(".dest-header").text($("#destination").val());
    $(".from-travel-date").text($("#fromdate").val());
    $(".to-travel-date").text($("#todate").val());
    $(".result-header__count").text($(".content__search__count-count").val() + "   Adults");
}