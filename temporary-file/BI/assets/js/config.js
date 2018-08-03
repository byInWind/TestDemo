require.config({
    baseUrl: '/BI/assets',
    paths: {
        jquery: 'lib/jquery/dist/jquery.min',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap.min',
        moment: 'lib/moment/min/moment.min',
        echarts: 'lib/echarts/echarts.common.min',
        bootstrapDaterangepicker: 'lib/bootstrap-daterangepicker/daterangepicker',
        template: 'lib/template/template-web',
        //    my-js
        index: 'js/index',
        income: 'js/income',
        mock: 'lib/mock/mock-min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        moment: {
            deps: ['jquery']
        },
        bootstrapDaterangepicker: {
            deps: ['jquery', 'bootstrap', 'moment']
        }
    }
});