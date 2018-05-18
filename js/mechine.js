
function init() {
    var tplLf = doT.template($('#J_slot_item').html())(getArr(0, 8));
    var tplRt = doT.template($('#J_slot_item').html())(getArr(8, 8));
    $('.slot-wrap-left').html(tplLf);
    $('.slot-wrap-right').html(tplRt);

    var dash1 = doT.template($('#J_dash_item').html())(getArr(0, 8));
    $('.dash-line-1').html(dash1);
    var dash2 = doT.template($('#J_dash_item').html())(getArr(8, 69));
    $('.dash-line-2').html(dash2);

    var dash3 = doT.template($('#J_dash_item').html())(getArr(0, 78));
    $('.dash-line-3').html(dash3);
    var dash4 = doT.template($('#J_dash_item').html())(getArr(78, 13));
    $('.dash-line-4').html(dash4);

    var batteryL = doT.template($('#J_battery_item').html())(getArr(0, 10));
    $('.left-battery').html(batteryL);

    var batteryR = doT.template($('#J_battery_item').html())(getArr(0, 10));
    $('.right-battery').html(batteryL);

    var slotLight = doT.template($('#J_slot_light').html())(getArr(0, 16));
    $('.slot-light-wrap').html(slotLight);

}


function getArr(start, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr[i] = start + i;
    }
    return arr;
}
module.exports = init;