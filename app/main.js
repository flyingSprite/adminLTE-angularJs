'user strict'

require.config({
  baseUrl: "",
  paths:{
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'bootstrap-wysihtml5': '../bower_components/bootstrap-wysihtml5/dist/bootstrap-wysihtml5-0.0.2.min',
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'jquery-ui': '../bower_components/jquery-ui/jquery-ui.min',
    'moment': '../bower_components/moment/moment',
    'moment-timezone': '../bower_components/moment-timezone/builds/moment-timezone.min',
    'timepicker': '../bower_components/timepicker/lib/timepicker/timepicker',
    'underscore': '../bower_components/underscore/underscore-min',
    'daterangepicker': '../bower_components/daterangepicker/lib/daterangepicker/daterangepicker',
    'daterangepicker-timesupport': '../bower_components/daterangepicker/lib/daterangepicker/daterangepicker.timesupport',
    "angular": "../bower_components/angular/angular",
    "angular-route": "../bower_components/angular-route/angular-route",
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
    "angularAMD": "../bower_components/angularAMD/angularAMD",
    "routeConfig": 'route/route',

    'adminLTE': 'statics/scripts/adminlte',
    'dashboard': 'statics/scripts/dashboard'
  },
  shim: {
    'bootstrap': ['jquery'],
    'dashboard': ['jquery-ui', 'bootstrap-wysihtml5',
                  'moment', 'moment-timezone',
                  'timepicker', 'underscore',
                  'daterangepicker', 'daterangepicker-timesupport'],
    'routeConfig': ['jquery', 'bootstrap', 'adminLTE'],
    'angularAMD': ['angular'],
    'angular-route': ['angular'],
    'angular-ui-router': ['angular']
  },
  deps: ['app']
});