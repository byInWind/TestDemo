define(['jquery', 'echarts', 'moment', 'bootstrapDaterangepicker', 'template', 'bootstrap'], function ($, echarts, moment, daterangepicker, template) {
//选择日期-----------------------------------------
    $('#reservation1').daterangepicker();
    $('#reservation2').daterangepicker();
    $('#reservation3').daterangepicker(
        {
            ranges: {
                '过去 7 天': [moment().subtract(6, 'days'), moment()],
                '过去 15 天': [moment().subtract(14, 'days'), moment()],
                '过去 30 天': [moment().subtract(29, 'days'), moment()]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        },
        function (start, end) {
            $('#reservation3 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
        }
    );
//echarts-----------------------------------------
    var myChart1 = echarts.init(document.getElementById('one'));
    var myChart2 = echarts.init(document.getElementById('two'));

    option1 = {
        tooltip: {
            trigger: 'axis',
            // //显示坐标线
            // axisPointer: {
            //     type: 'cross'
            // }
        },
        dataset: {
            source: [
                ['Mon', 43.3],
                ['Tue', 83.1],
                ['Wed', 86.4],
                ['Thu', 72.4],
                ['Fri', 52.4],
                ['Sat', 72.4],
                ['Sun', 92.4]
            ]
        },
        xAxis: {
            //去掉x轴两端留白
            boundaryGap: false,
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            type: 'line',
            smooth: true,
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            },
            itemStyle: {
                normal: {
                    //小黑点颜色
                    color: "#80E1FA",
                    lineStyle: {
                        width: 3,
                        //折线颜色
                        color: "#80E1FA"
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#80E1FA' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'transparent' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        }]
    };

    option2 = {
        color: ["#29C4F8", "#9DDDF2", "#3F98F2", "#0989EA", "#22DAEE", "#69F2FE"],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            //设置为圆
            icon: 'circle',
            //图例列表的布局朝向。横竖
            orient: 'vertical',
            borderRadius: '10',
            x: 'right',
            top: 'middle',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            textStyle: {
                color: '#9DDDF2',
                fontSize: 16
            }

        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
    };

    myChart1.setOption(option1);
    myChart2.setOption(option2);

//tab切换-----------------------------------------
    function changeData(element, data) {
        $(element).on('change', function () {

        })
    }

    $('#optionsRadios6').on('change', function () {

    })
});