define(['jquery', 'echarts', 'moment', 'bootstrapDaterangepicker', 'template', 'mock', 'bootstrap'], function ($, echarts, moment, daterangepicker, template, Mock) {
//mock模拟数据
    Mock.mock('http://test1.com', {
        data: [
            ['Mon', 43.3],
            ['Tue', 83.1],
            ['Wed', 86.4],
            ['Thu', 72.4],
            ['Fri', 52.4],
            ['Sat', 72.4],
            ['Satw', 72.4],
            ['Satww', 72.4],
            ['Sun', 92.4]
        ]
    });
    Mock.mock('http://test2.com', {
        data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
        ]
    });
    //顶部数据
    Mock.mock('http://test3.com', {
        data: [
            {
                "name": '直播Tab活跃人数1',
                "number1|1000-10000": 10000,
                "number2|1-100.1-10": 1,
                "number3|1-100.1-10": 1
            },
            {
                "name": '直播Tab活跃人数2',
                "number1|1000-10000": 10000,
                "number2|1-100.1-10": 1,
                "number3|1-100.1-10": 1
            },
            {
                "name": '直播Tab活跃人数3',
                "number1|1000-10000": 10000,
                "number2|1-100.1-10": 1,
                "number3|1-100.1-10": 1
            }
        ]
    });

    //选择日期-----------------------------------------
    function daterangeFun(id) {
        $('#' + id).daterangepicker(
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
                $('#' + id + ' span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
            }
        );
    }

    daterangeFun('reservation1');
    daterangeFun('reservation2');
    daterangeFun('reservation3');
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
            source: [{
                data: []
            }]
        },
        xAxis: {
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
            name: '一周数据',
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
                data: []
            }
        ]
    };

    myChart1.setOption(option1);
    myChart2.setOption(option2);
    //获取数据
    $.get('http://test1.com').done(function (data) {
        data = JSON.parse(data)
        console.log(data)
        // 填入数据
        myChart1.setOption({
            xAxis: {
                //去掉x轴两端留白
                boundaryGap: false,
            },
            series: [{
                name: '一周数据',
                data: data.data
            }]
        });
    });
    $.get('http://test2.com').done(function (data) {
        data = JSON.parse(data)
        console.log(data)
        // 填入数据
        myChart2.setOption({
            series: [{
                data: data.data
            }]
        });
    });
    $.get('http://test3.com').done(function (data) {
        data = JSON.parse(data)
        console.log(data);

        //数字格式化函数
        function toThousands(num) {
            var num = (num || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) {
                result = num + result;
            }
            return result;
        }

        var list = data.data;
        list.forEach(function (val) {
            template.defaults.imports.timestamp = function (val) {
                var num = val;
                var num = (num || 0).toString(), result = '';
                while (num.length > 3) {
                    result = ',' + num.slice(-3) + result;
                    num = num.slice(0, num.length - 3);
                }
                if (num) {
                    result = num + result;
                }
                val = result;
                return val;
            };
        })
        var html = template('numTpl', list);
        $("#num").html(html);
    });

//tab切换-----------------------------------------
    function changeData(element, data) {
        $(element).on('change', function () {

        })
    }

    $('#optionsRadios6').on('change', function () {

    })
});