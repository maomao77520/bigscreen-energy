function line() {
    var myChart = echarts.init(document.getElementById('J_line'));
    var xAxisData0 = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
    var lineData0 = [0, 12, 20, 50, 70, 100, 150, 200, 210, 300, 500, 1000, 1200, 1300, 1310, 1350, 1200, 1100, 900, 800, 500, 200, 90, 20, 10];
    
    var xAxisData1 = ['5-12', '5-13', '5-14', '5-15', '5-16', '5-17', '5-18'];
    var lineData1 = [4313, 4075, 5013, 4923, 3999, 4765, 5122];

    var xAxisData2 = ['4-16', '4-18', '4-20', '4-22', '4-24', '4-26', '4-28', '4-30', '5-2', '5-4', '5-6', '5-8', '5-10', '5-12', '5-14', '5-16', '5-18'];
    var lineData2 = [4823, 4425, 4890, 5323, 5923, 4032, 5823, 4632, 4365, 5353, 4964, 5472, 6012, 4313, 5013, 3999, 5122];
 
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
                                color: '#00c6ff'
                            }, {
                                offset: 1,
                                color: '#033bca'
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