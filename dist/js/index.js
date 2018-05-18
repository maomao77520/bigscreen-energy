/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var css = __webpack_require__(1);
var initTime = __webpack_require__(2);
var line = __webpack_require__(3);
var pie = __webpack_require__(4);

var num = __webpack_require__(5);
var num0 = __webpack_require__(6);
var num1 = __webpack_require__(7);
var num2 = __webpack_require__(8);
var num3 = __webpack_require__(9);
var num4 = __webpack_require__(10);
var num5 = __webpack_require__(11);
var num6 = __webpack_require__(12);
var num7 = __webpack_require__(13);
var num8 = __webpack_require__(14);
var num9 = __webpack_require__(15);
var numArr = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

var mechine = __webpack_require__(16);

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



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function line() {
    var myChart = echarts.init(document.getElementById('J_line'));
    var xAxisData0 = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
    var lineData0 = [40,38,32,20,15,18,24,25,42,42,44,45,48,48,48,49,50,60,59,58,57,60,57,40];
    
    var xAxisData1 = [];
    var lineData1 = [1233,1122,908,1349,1217,1208,1384];

    var xAxisData2 = [];
    // var xAxisData2 = ['4-16', '4-18', '4-20', '4-22', '4-24', '4-26', '4-28', '4-30', '5-2', '5-4', '5-6', '5-8', '5-10', '5-12', '5-14', '5-16', '5-18'];
    var lineData2 = [1321,979,960,874,1136,937,1018,1181,871,811,1099,939,1374,905,1247,1049,1139];
 
    var now = new Date();
    var month = now.getMonth() + 1;
    var today = now.getDate();
    for (var i = 1; i < 8; i++) {
        xAxisData1.unshift(month + '-' + (today-i));
    }
    var d;
    for (var j = 1; j < 34; j++) {
        d = today - j;
        if (j % 2 == 1) {
            xAxisData2.unshift(month + '-' + d);
        }
        if (d == 1) {
            month--;
            today = 30 + j + 1;
        }
    }



    var obj = {
        data0: {
            xAxisData: xAxisData0,
            lineData: lineData0
        },
        data1: {
            xAxisData: xAxisData1,
            lineData: lineData1
        },
        data2: {
            xAxisData: xAxisData2,
            lineData: lineData2
        }
    };

    var option = {
        title: {
            show: false
        },
        grid: {
            top: '20px',
            bottom: '20px',
            left: '40px',
            right: '18px'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData0,
            axisLabel: {
                interval: 5,
                textStyle: {
                    color: '#44486a',
                    fontSize: 14
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#44486a'
                }
            },
            axisTick: {
                show: true
            }
        },
        yAxis: [{
            show: true,
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#44486a',
                    fontSize: 14
                },
                formatter: function (value) {
                    return value;
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#44486a'
                }
            },
            splitLine: {
                show: false
            },
            min: 0
        }],
        series: [{
            type: 'line',
            name: 'line',
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff000'
                            }, {
                                offset: 1,
                                color: '#ffb71d'
                            }])
            },
            symbol: 'none',
            smooth: true,
            data: lineData0
        }]
    }

    myChart.setOption(option);

    var index = 1;

    setInterval(function () {
        option.xAxis.data = obj['data'+index].xAxisData;
        option.series[0].data = obj['data'+ index].lineData;

        option.xAxis.axisLabel.interval = index == 0 ? 5 : index == 1 ? 0 : 2;

        myChart.setOption(option);

        $('.chart-tab-wrap span').removeClass('active');
        $('.chart-tab-wrap span').eq(index).addClass('active');

        index = (index + 1) % 3;
    }, 2000);

}

module.exports = line;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function pie() {
    var pie = echarts.init(document.getElementById('J_pie'));
    var pieData = [
        {
            name: 'type1',
            value: 21,
            itemStyle: {
                normal: {
                    color: '#3497ed'
                }
            }
        }, {
            name: 'type2',
            value: 9,
            itemStyle: {
                normal: {
                    color: '#fbb929'
                }
            }
        }/*, {
            name: 'type3',
            value: 9,
            itemStyle: {
                normal: {
                    color: '#2cc924'
                }
            }
        }, {
            name: 'type4',
            value: 10,
            itemStyle: {
                normal: {
                    color: '#1ad9de'
                }
            }
        }, {
            name: 'type5',
            value: 3,
            itemStyle: {
                normal: {
                    color: '#3497ed'
                }
            }
        }*/];
    pie.setOption({
        series : [{
            name:'故障',
            type:'pie',
            radius : [26, 64],
            center: ['50%', '50%'],
            label: {
                show: false
            },
            data: pieData
        }]
    });
    var active = 0;
    var pre = 1;
    setInterval(function () {
        pie.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: active
        });
        pie.dispatchAction({
            type:'downplay',
            seriesIndex: 0,
            dataIndex: pre
        });

        $('.pie-label-wrap .label-item').eq(active).addClass('active-' + active);
        $('.pie-label-wrap .label-item').eq(pre).removeClass('active-' + pre);

        pre = active;
        active = (active + 1) % 2;
    }, 2000);
    
}

function ani(pie, active) {
    
}

module.exports = pie;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* 
    调用方法 
    initNum(目标节点,显示的数值，每个数字的宽度，每个数字的高度，每个数字的margintop(非必填))
    initNum($('#target'),1120,38,72,10);
    
    html结构，样式是可以自定义的
    <span class="info-panel-value" id="target"></span>
    .info-panel-value{
        color: #00deff;
        font-size: 70px;
        font-weight: bold;
        font-family: AGENCYB;
    }
*/


function initNum(target,value,width,height,mgt,imgArr,imgSize){
    if(!value){
        return;
    }
    var ems = ''
    for(var i = 0; i < 10 ;i++){
        ems += '<em style="'+
                'height:'+height+'px;'+
                'line-height:'+height+'px;'+
                'margin-top:'+(mgt||0)+'px;';
        if(imgArr){
            ems += 'background:url('+imgArr[i]+') no-repeat center;';
            if(imgSize){
                ems += 'background-size:'+imgSize+';';
            }
            ems += 'text-indent:-9999px;';
        }
        ems += '">'+i+'</em>';
    }
    
    var len = (value+'').length;
    
    var items = itemMaker(len,width,height,ems,mgt);

    var html = '<span class="m-num">'+
        items+
    '</span>';
    
    $(target).html(html);
    ant(target,value,height,mgt);
    return {
        change:function(value){
            if(!value){
                return;
            }
            var len = (value+'').length;
            var oldLen = $(target).find('.m-num-view').length;
            if(len>oldLen) {
                var lang = len - oldLen;
                var items = itemMaker(lang,width,height,ems,mgt);
                $(target).find('.m-num').prepend(items);
            }else if(len<oldLen){
                var lang = oldLen - len;
                $(target).find('.m-num-view:lt('+lang+')').remove();
            }
            ant(target,value,height,mgt);
        }
    }
}

function itemMaker(len,width,height,ems,mgt){
    var items = '';
    for(var i = 0;i<len;i++){
        items += '<span class="m-num-view" style="width:'+width+'px;height:'+(height+(mgt||0))+'px">'+
                    '<span class="m-num-list">'+
                        ems+
                    '</span>'+
                '</span>';
    }
    return items;
}

function ant(target,value,height,mgt){
    if(!value){
        return;
    }
    setTimeout(function(){
        var v = value+'';
        for(var i = 0;i<v.length;i++){
            var s = v[i];
            var top = s * (height+(mgt||0)) * -1;
            target.find('.m-num-list:eq('+i+')').css({
                top:top+'px'
            });
        }
    },20);
   
}

module.exports = initNum;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFBOUUzMTExNUFBNTExRTg4QzdBQjMyNDlCNjQyNEYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFBOUUzMTEyNUFBNTExRTg4QzdBQjMyNDlCNjQyNEYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUE5RTMxMEY1QUE1MTFFODhDN0FCMzI0OUI2NDI0RjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUE5RTMxMTA1QUE1MTFFODhDN0FCMzI0OUI2NDI0RjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6g8IciAAABDklEQVR42uyW0Q2CMBCGD+ICrgAj4Ajypr6xAhOYgAsYWYER8MGoj7gCI8gK3YDzWioeqIDGB438yZf2LuSnV6CHgUfg8jUOtEsQWyKCGebXpIEHNY6JtIfJI9MQ5hiXZnuVlEbTxkXZE4Pxg5tOYIHZCFCVNWUmkaZNFpEw0w3hGrhTSU8nwx5GfIVnPUrZJhQUFDQtidm8C0FsWWzJMpsb+opyHoyU64f0YTP82pUNZoPZf5v9yrdpNQ+8DtUai0ll5qrUEp/Nu3AIj8WZ2TjHAyIhnJazX/YMn0hrvWOJwsBN1aqCN7dK9g0bAhSmXmJIRC+UWJVGuNKo7OjruwfQ91/jRMSwur1bFwEGAAnbl6jjgi0MAAAAAElFTkSuQmCC"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAdCAYAAABv9NZUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDNDBDN0NGNUFCQTExRTg5MzU2QkYxNzJERUIwN0U5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDNDBDN0QwNUFCQTExRTg5MzU2QkYxNzJERUIwN0U5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0M0MEM3Q0Q1QUJBMTFFODkzNTZCRjE3MkRFQjA3RTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0M0MEM3Q0U1QUJBMTFFODkzNTZCRjE3MkRFQjA3RTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4GXbpOAAAAS0lEQVR42mL8v5mhlYGBIQ+IJzH+38TwB8hgBuJfLAz/wQwQYANx4ACN8484GXKUDQiHYi8gyTABOX/BAv8ZfoE4nUD8FYh7AAIMAGfTKiaEjDScAAAAAElFTkSuQmCC"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIzMjVEMjkxNUFBNTExRTg5NEYzOTlGMjgyOTIzOTIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIzMjVEMjkyNUFBNTExRTg5NEYzOTlGMjgyOTIzOTIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjMyNUQyOEY1QUE1MTFFODk0RjM5OUYyODI5MjM5MjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjMyNUQyOTA1QUE1MTFFODk0RjM5OUYyODI5MjM5MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jKbnAAAABQUlEQVR42syV322DMBDGP6oswApegY6QvLV9owNUFdmgyQihG9Qr8NT2MazACGUFNsjlLhjJsYAYQ6Se9Ik/Ej+fj7vPEf2iizUrY6Xwi5Kl8URF9yKin8tVIF8IC41n2rawbyi+/vWsOhYJK7aeN3ihcgXC7moVYM9qPDI6sLpvZWflA8MUC0Y5q7Gex5Rb91JvrHC6Wq2eUCs7+7iFERYLN7PZsG5r1XwYQXqkWAZ28uqru9csdrsgFCagozsxU2HKdHvmZKZ9YbFxkszMpNu4e7xRdQuWWrY0ZEFbvFM99AOU5WlqYIS0UT32N3fGCfqisHSzNfpAlflYe1rSBaYckADykIkQWOqAXufMplubxcap+Ud+dkenTSYTPqPWNT6odjM7BKeVRxs56ooJx9uYEslMZuzRTIEKzEsY+izAAF3Egw3lfxRfAAAAAElFTkSuQmCC"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2MjdDMTJFNUFBNTExRThCRjk3QjRDMTY3MUY4MkI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2MjdDMTJGNUFBNTExRThCRjk3QjRDMTY3MUY4MkI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjYyN0MxMkM1QUE1MTFFOEJGOTdCNEMxNjcxRjgyQjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjYyN0MxMkQ1QUE1MTFFOEJGOTdCNEMxNjcxRjgyQjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47/Mi4AAABdElEQVR42rSVy22EMBCGx2gbICXQglMCuSXH7DHKIYISSDpYKoggUgpYLqvkuJQQWnALdMBkbMaKd0V4eXekT/jFz3gYjwV+g7WIyIhHIoRpU0RpuMdWDwj8MhOSOM4UObeGuIMHbDeAZmB/JqQXtCMCEWMd2RGpFoudCWW+0j+nLObdAIcmDUhMGu96SkI5/TFqRrdDOIg4gI46fzRn/SlO1tuYrbWTuG6M6oVMi6n/vrRcDKGi562TEl6eeYtcI2ZqSExyQk4doZrIOc4KnnBQbO+ciKm0yOEZczsQLExSl5DYwacorJjAj9FDPGQ2DG4oUnjBUmCxOuAZV4t+ywneCHz3+oNHx8OtT8w0ldOOAhPEjs5BB8UKMeW0pRaT3Ek8vQx9SxBctQRdyhp9B7ROXU9m1n9L7LRb7VnNtws4STjndpKcuNYqgf3rPzy51nLI8DVgF7dEs3CLlorIbdm229KlO2EP55Sgvqa9YW0HfgUYAO0C9DWWHJ9TAAAAAElFTkSuQmCC"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NDE0NjZFNUFBNTExRThCNDYxRENCOUUwNzhFRDZDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI4NDE0NjZGNUFBNTExRThCNDYxRENCOUUwNzhFRDZDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qjg0MTQ2NkM1QUE1MTFFOEI0NjFEQ0I5RTA3OEVENkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg0MTQ2NkQ1QUE1MTFFOEI0NjFEQ0I5RTA3OEVENkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x0vsGAAABBUlEQVR42syVvQ3CMBCFHcQCWcGMEEZIOtqskJ6KFaho6LICJa1X8ApeIRtwnCNHXOCSYM5IedKTHZ306fnnnAzuilOOrtEG7SZqrq8fYFTcKl5ndIPu0LswDmpC3WuPtmMgsMCSpJnTR50DFmgd5vYt3aI4YEnmRkXqD8DHJLBLkbCWpOMSFmRuUwBpwttvwNeSNbkujumQ6ISlNN0c0KYGGimwIH1pYtuNAyZJR4F1SmBOLnQnOZABmOS6UKAm304KzOCqTuRJl8hvV7XBhC3a9ocjc+63z/dyTw4p9RdJ9MQvwo9tBpfopdEtqtQRzNKLLTxlSA1cf8IVAIer4ri+fwowACF0YqzMCU2YAAAAAElFTkSuQmCC"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMzNGODlCNUFBNTExRTg4OThCOUVCMkMyRjdGMDM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMzNGODlDNUFBNTExRTg4OThCOUVCMkMyRjdGMDM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkEzM0Y4OTk1QUE1MTFFODg5OEI5RUIyQzJGN0YwMzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkEzM0Y4OUE1QUE1MTFFODg5OEI5RUIyQzJGN0YwMzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz748mlnAAABJElEQVR42uSVwY3CMBBFx1EaSAuhBCgh3JA45coxdLCwHYQSCBc4c+RIWkgJpIV0kNk/3smutdIiYnNAYqQnjxP5a8YeewxfSGwK9jr62JoWXEXElIIrmALypBDFGE6OMSF/60A1iGXOjzmoR0kt+ceNielpFlP/TLHXjext0mydealF+Ig14KyjNcMnexX2AQHtaMVbcSJEVoGdTdePDR1NPojJhy0wI5hpEINg+Z3mIWjPbyBVfxJ6mq0jlr7uDYjsafS4Bz3Kw/9ELSKW6aQIFXuTJyj607LyEe0t0TY5zBuJTLpR5rwaiRbjPZNCLZyCremDO8OlXXwL7J0z2nAjaXZgDlqPTt7atRByn22ZTDT0xEn7vw7e6Fac6fO3tr4EGACdNsh1/B5QZwAAAABJRU5ErkJggg=="

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDM0EwODVENUFBNTExRThBNTNFQTZCQTJFOUNDQjI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDM0EwODVFNUFBNTExRThBNTNFQTZCQTJFOUNDQjI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkMzQTA4NUI1QUE1MTFFOEE1M0VBNkJBMkU5Q0NCMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkMzQTA4NUM1QUE1MTFFOEE1M0VBNkJBMkU5Q0NCMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jiHf3AAABVElEQVR42uSW0VHDMAyGZV8W8ArpCGEE8waP6TFBO0JhgzJCzQvHI33pwSMZgY5ARsAbIBRXbkWupE7IA3f9776rnbQ6SZbkKnwFqVJwSlvCwRW6+EDhS/g0xCrRSFsVMYVr9BlgeHDMUNVhoGAHGln+/VThJmze+IUnboP7pzVjI1EXmjwrg3c77gkn9l04/n7cWw1fkBPAOLFOoZL7mDMQYQ5WFqwOlx/T2DaUBVCq6NDaYfbXDa7H8mzUnP2QPnLcCwIT+CRW8KTyLmM2scYMMSPe4VEVv4W5TojIcH/G9TMxUfgQ+tLGKdIjRYZ7Ohqd657tI/Gt9sv/epq1HEv/t85GNobnEKZuzfUycf5HCrGusjDHDx2w5MquE6rf8g21vxoVLsOLD3EPDpGDBc6bMD1xSdQ9Qzxcj2RIlkYzyyfsthFhd/0l2E2YO9yn5FuAAQA+htg2neGswgAAAABJRU5ErkJggg=="

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdCAYAAACnmDyCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMEQ3ODQ5NUFBNTExRThBOTgyQzU0M0FCOUMwQ0JCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMEQ3ODRBNUFBNTExRThBOTgyQzU0M0FCOUMwQ0JCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkUwRDc4NDc1QUE1MTFFOEE5ODJDNTQzQUI5QzBDQkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkUwRDc4NDg1QUE1MTFFOEE5ODJDNTQzQUI5QzBDQkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pwOoVAAAA0klEQVR42qyV0Q2CMBRFLwkLdAVX6Ap8+mVi3MAVdAVHgBX45JcVugIrdAOfNJJYjNDXW1/Spl8n55SQVjLgCqAFPw8c5V5DcEbZ3DBUPoB6EmDmZZdzE0DdfOgokw/IBRA78ZX0NZ4U5BDZTDgJbbSyCRtr9BfQOusi7g2SchvWKAaNLCjO8iWgn1mloJEFfWfRRptZuSC7lZUDMpGRLzHazcoBNXtZWlAyS/uvJbO0RnGWY0FGbyRZWZ41Sn4tjZE6KwWy2qwUaFqW0TygLwEGAIklTIwhzsCDAAAAAElFTkSuQmCC"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwMUFCMDc4NUFBNTExRTg4NUVDRTIyOEM4OTRCMjBCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwMUFCMDc5NUFBNTExRTg4NUVDRTIyOEM4OTRCMjBCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzAxQUIwNzY1QUE1MTFFODg1RUNFMjI4Qzg5NEIyMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzAxQUIwNzc1QUE1MTFFODg1RUNFMjI4Qzg5NEIyMEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5l3nmyAAABbklEQVR42uxWy03DQBCdjWiAFkIJSQnmBuJkzoiDU4JNA8huwYgG4guCY9zClhC34A4yzOzHmiwhWZsgceBJT/Hsrt/Ozux4ovADQuTElLiA49DEGm6wloMK34fnS+ImQihES7yHW+zZuAAcJtaBWOd4CAvnACMhlsSV9fDNDKZOkNG7yeaEZ7kT8ljCHeqZ8RBpF/vLrIiNsL8jryuEndoj74z6XOxUj4ifDsKwF0MQR54M7+HZ8AuC+Oc93O0lYmxCujCZXrBwV6Bz6U9GlZ29drUU7NzkOriTsaIFPNhaVvg61OPmB6FjsWt4RK3wxRT5VhR7F1ktvD4L3lvykeWgNjvFJ6cSnzwOVTojwcTE0bIg9sI+RV5bCTsJ72E7MX5DGP5r+fyC8yONKQrcU7ToC3lELwmZiedWYWW82opNmhF9JXMd0+NKYXmwJU7BCnKsfZYrN1hOFivsXxKFz1+Sko78HjbwhEMiPwUYAGv2pCjYyPaMAAAAAElFTkSuQmCC"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyMkVDOEJFNUFBNTExRThBOTJCODAzQ0ZGODQxMjI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyMkVDOEJGNUFBNTExRThBOTJCODAzQ0ZGODQxMjI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzIyRUM4QkM1QUE1MTFFOEE5MkI4MDNDRkY4NDEyMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzIyRUM4QkQ1QUE1MTFFOEE5MkI4MDNDRkY4NDEyMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47ghHKAAABUElEQVR42uSV0W3DIBCGz5EX8ArOCKxA3tpHdwRng0RZIEomqMQI7VPbx3iEsIJX8Aa93sGhELdKIG6lSEX65APbP3dwcAV+QGg10RKN2NfaQLwSBh7Q8kCB7+6FJl6ICm5rS3hEU+Cb8+I4EuJZ7YWf+Vs1+n5eArrQghALPBF9gjeVRKPFbmckpggQlkQf9S8xECbq1yV8ns1mM9dqiOy6dKq/1Mae3ZPYvwhz5sRONKN+FizWRQNrQk0RM8QgAyx0JDCB5icxFlpEgql8EwsbwMdoLveZTlzv/fjKKvB50gbyxAexu/vOM00ciN2UHPO7iZRbSIL+CVP40+OUm/1VZFsO00au6szQ2sjuS3c2gdbLt11iLailWIcE72GFhi/HzlVln/2xYF4RBr+bocTtb9hBLosLWGPnj9P2bAYl7qsrnlgp1AY2p3v/S4ABAMWZEo1gloxTAAAAAElFTkSuQmCC"

/***/ }),
/* 16 */
/***/ (function(module, exports) {


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

/***/ })
/******/ ]);