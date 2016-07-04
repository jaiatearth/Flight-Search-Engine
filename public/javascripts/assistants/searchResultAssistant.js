function toHome(){
    $(".tohome , .edit").on("click", function(){
        $(".header, .content").removeClass("hide");
        $(".result-header").addClass("hide");
        $(".searchresult").addClass("hide");
    })
}



function initSearch(){
    $(".header, .content").addClass("hide");
    $(".result-header").removeClass("hide");
    $(".searchresult").removeClass("hide");
    toHome();

    var slider = document.getElementById("pslider");

    noUiSlider.create(slider, {
        start: [1000, 5000],
        connect: true,
        range: {
            'min': 1000,
            'max': 10000
        },
        pips: { // Show a scale with the slider
            mode: 'steps',
            density: 10
        }
    });


    //slider.noUiSlider.on('update', function( values, handle ) {
    //        valueInput.value = values[handle];
    //        console.info("updated", values[handle]);
    //});

    $.ajax({
        url : "twoway",
        success  :function(resultData){
            //var template = Handlebars.compile('#result-template');
            //var html = template(resultData);
            //console.info("samplehtml",html);
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