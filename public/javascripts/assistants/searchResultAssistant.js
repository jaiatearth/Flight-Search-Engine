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