function pie() {
    var pie = echarts.init(document.getElementById('J_pie'));
    var pieData = [
        {
            name: 'type1',
            value: 20,
            itemStyle: {
                normal: {
                    color: '#ff4735'
                }
            }
        }, {
            name: 'type2',
            value: 2,
            itemStyle: {
                normal: {
                    color: '#fbb929'
                }
            }
        }, {
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
        }];
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
    var pre = 4;
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
        active = (active + 1) % 5;
    }, 2000);
    
}

function ani(pie, active) {
    
}

module.exports = pie;