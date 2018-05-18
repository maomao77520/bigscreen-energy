var css = require('../css/index.scss');
var initTime = require('./initTime.js');
var line = require('./line.js');
var pie = require('./pie.js');

var num = require('./num.js');
var num0 = require('../css/images/0.png');
var num1 = require('../css/images/1.png');
var num2 = require('../css/images/2.png');
var num3 = require('../css/images/3.png');
var num4 = require('../css/images/4.png');
var num5 = require('../css/images/5.png');
var num6 = require('../css/images/6.png');
var num7 = require('../css/images/7.png');
var num8 = require('../css/images/8.png');
var num9 = require('../css/images/9.png');
var numArr = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

var mechine = require('./mechine.js');

initTime();
line();
pie();
mechine();

var base = 102571;
var numA = num($('#J_people_num'), base, 20, 30, 10, numArr);
num($('#J_charger_num'), 695, 20, 30, 10, numArr);
num($('#J_slot_num'), 7250, 20, 30, 10, numArr);

setInterval(function () {
    base += Math.floor((Math.random() * 10) / 2);
    numA.change(base);
}, 20000);

var arr = ['nn', 'gl', 'wz', 'bs', 'lz'];
var index = 0; 
var city, location, text;




bottomAni();

setInterval(function () {
    var tpl = $('.center-content-wrap').html();
    $('.center-content-wrap').html($(tpl));
    
    $('.city').hide();
    $('.location').css({
        animation: 'none'
    });
    $('.city-text-wrap').css({
        animation: 'none'
    })

    index = (index + 1) % 5;
    bottomAni();
    
}, 20000);

function bottomAni() {
    city = arr[index];


    $('.map-bg').find('.' + city).fadeIn(300);

    $('.location-' + city).css({
        animation: 'jump-' + city + ' 0.8s 1s linear',
        'animation-fill-mode': 'forwards'
    });

    $('.text-'+ city).css({
        animation: 'showText 1s 2s linear',
        'animation-fill-mode': 'forwards'
    });

    $('.map-icon').removeClass('map-icon-nn map-icon-lz map-icon-wz map-icon-gl map-icon-bs').addClass('map-icon-' + city);
}

