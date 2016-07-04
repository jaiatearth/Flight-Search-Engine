function triggerPassengerCount() {
    var options = {
        url: "airports",
        getValue: "cityname" || "code",
        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#source").easyAutocomplete(options);
    $("#destination").easyAutocomplete(options);

    //var destinationList = options;
    //var key = $("#source").val();
    //delete destinationList[key];
    //$("#destination").easyAutocomplete(destinationList);
}


function  triggerAutocomplete()
{
    $('.increase').click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentCount = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentCount) && currentCount <= 9) {
            $('input[name=' + fieldName + ']').val(currentCount + 1);
        } else {
            $('input[name=' + fieldName + ']').val(1);
        }
    });

    // This button will decrement the value till 0
    $(".decrease").click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentCount = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentCount) && currentCount > 1) {
            $('input[name=' + fieldName + ']').val(currentCount - 1);
        } else {
            $('input[name=' + fieldName + ']').val(1);
        }
    });
}