define(['routeConfig', 'angularAMD', 'angular-route'], function (routeConfig, angularAMD) {
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
  }]);
  // Bootstrap Angular when DOM is ready
  return angularAMD.bootstrap(app);
});


