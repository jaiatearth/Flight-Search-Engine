function   applyfromCalendarValues(cin_value) {
    var cin = [];
    var checkinValue  = cin_value;

    cin = checkinValue.split(" ");
    //From Date
    $(".from .day").text(cin[0]);
    $(".from .date").text(cin[2]);
    $(".from .month").text(cin[1] +" " + cin[3]);
}
function   applytoCalendarValues(cout_value) {
    var cout = [];
    var checkoutValue = cout_value;
    cout = checkoutValue.split(" ");
    $(".to .day").text(cout[0]);
    $(".to .date").text(cout[2]);
    $(".to .month").text(cout[1] + " " + cout[3]);
}
function   applyCalendarValues(cin_value, cout_value) {
    var cin, cout = [];
    var checkinValue  = cin_value
    var checkoutValue = cout_value;
    cout = checkoutValue.split(" ");
    cin = checkinValue.split(" ");
    //From Date
    $(".from .day").text(cin[0]);
    $(".from .date").text(cin[2]);
    $(".from .month").text(cin[1] +" " + cin[3]);

    //To Date
    $(".to .day").text(cout[0]);
    $(".to .date").text(cout[2]);
    $(".to .month").text(cout[1] + " " + cin[3]);
}

function triggerDatePicker(){
    var picker1 = new Pikaday({ field: $('#fromdate')[0], position: 'bottom  left' });
    var picker2 = new Pikaday({ field: $('#todate')[0], position: 'bottom left' });
    var dateToday = new Date();
    dateToday = dateToday.toString();
    var dateArray = dateToday.split(" ");
    applyCalendarValues(dateToday, dateToday);

    $("#fromdate").on("change", function(){
        if($("#fromdate").val() !== ""){
            applyfromCalendarValues($("#fromdate").val());
        }
    });
    $("#todate").on("change", function(){
        if($("#todate").val() !== ""){
            applytoCalendarValues($("#todate").val());
        }
    });
}
