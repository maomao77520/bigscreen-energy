module.exports = function() {
    getTime();
    setInterval(function () {
        getTime();
    }, 1000)


}
function formatNum(num) {
    return num < 10 ? '0' + num : num;
}
function getTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = formatNum(now.getMonth() + 1);
    var date = formatNum(now.getDate());
    var hour = formatNum(now.getHours());
    var minite = formatNum(now.getMinutes());
    var second = formatNum(now.getSeconds());

    var time = year + '-' + month + '-' + date + ' '
    + hour + ':' + minite + ':' + second;

    $('#J_time').text(time);
}