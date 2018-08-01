define(['jquery', 'echarts', 'moment', 'bootstrapDaterangepicker', 'template', 'bootstrap', 'AdminLTE'], function ($, echarts, moment, daterangepicker, template) {
    $("#toggleShow").on('click', function () {
        $("#toggleShowBox").toggle()
    });
//选择日期-----------------------------------------
    $('#reservation').daterangepicker();
    $('#reservation2').daterangepicker();
    $('#daterange-btn').daterangepicker(
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
            $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
        }
    );
//echarts-----------------------------------------
    var myChart1 = echarts.init(document.getElementById('one'));

    option1 = {
        tooltip: {
            trigger: 'axis',
            //显示坐标线
            axisPointer: {
                type: 'cross'
            }
        },
        dataset: {
            source: [
                ['Mon', 43.3],
                ['Tue', 83.1],
                ['Wed', 86.4],
                ['Thu', 72.4],
                ['Fri', 72.4],
                ['Sat', 72.4],
                ['Sun', 72.4]
            ]
        },
        xAxis: {
            boundaryGap: false,
            type: 'category'
        },
        yAxis: {},
        series: [{
            type: 'line',
            smooth: true,
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }]
    };

    myChart1.setOption(option1);

//tab切换-----------------------------------------
    function changeData(element, data) {
        $(element).on('change', function () {

        })
    }

    $('#optionsRadios6').on('change', function () {

    })
});