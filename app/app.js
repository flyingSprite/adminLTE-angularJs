define(['routeConfig', 'angularAMD', 'angular-route', './tree'], function (routeConfig, angularAMD) {
  // Load route module in application by adding it as a dependent module.
  var app = angular.module('ngreq-app', ['ngRoute']);
  app.config(['$routeProvider', function ($routeProvider) {

    routeConfig
      && routeConfig.routes
      && angular.forEach(routeConfig.routes, function (route, path) {
        $routeProvider.when(path, angularAMD.route({
          templateUrl: route.templateUrl,
          controller: route.controller,
          controllerUrl: route.controllerUrl
        }));
      });

    routeConfig
      && routeConfig.defaultUrl
      && $routeProvider.otherwise({redirectTo: routeConfig.defaultUrl});
  }])
  .factory("messageBox", function () {
    return {
      info: "This is a messager.",
      mailBoxTip: function (number){
        if (number > 0) {
          $("#mailbox-message-tip").html('<small class="badge pull-right bg-yellow">'+ number +'</small>');
        } else {
          $("#mailbox-message-tip").html('<small></small>');
        }
      }
    };
  });
  // Bootstrap Angular when DOM is ready
  return angularAMD.bootstrap(app);
});

// define(['routeConfig', 'angular-ui-router'], function (routeConfig) {
//   var app = angular.module('ngreq-app', ['ui.router']);
//   app.config(['$stateProvider', function ($stateProvider) {
//     routeConfig
//       && routeConfig.routes
//       && angular.forEach(routeConfig.routes, function (route, path) {
//         $routeProvider.state(path, angularAMD.route({
//           url: route.url.
//           templateUrl: route.templateUrl,
//           controller: route.controller,
//           controllerUrl: route.controllerUrl
//         }));
//       });

    // routeConfig
    //   && routeConfig.defaultUrl
    //   && $routeProvider.otherwise({redirectTo: routeConfig.defaultUrl});
 // }]);

//});



