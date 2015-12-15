define(function () {
  return {
    defaultUrl: '/home',
    routes : {
      '/home':{
        url: 'home',
        templateUrl: 'components/home/index.html',
        controller: 'HomeController',
        controllerUrl: 'components/home/controller'
      },
      '/view':{
        url: '/view',
        templateUrl: '/components/view/index.html',
        controller: 'ViewController',
        controllerUrl: 'components/view/controller'
      },
      '/widgets':{
        url: '/widgets',
        templateUrl: '/components/widgets/index.html',
        controller: 'WidgetsController',
        controllerUrl: 'components/widgets/controller'
      },
      '/mailbox':{
        url: '/mailbox',
        templateUrl: '/components/mailbox/index.html',
        controller: 'MailboxController',
        controllerUrl: 'components/mailbox/controller'
      }
    }
  };
});