angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.tAF', {
    url: '/taf',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tAF.html',
        controller: 'tAFCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.whatWeDo', {
    url: '/whatwedo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whatWeDo.html',
        controller: 'whatWeDoCtrl'
      }
    }
  })

  .state('menu.followUs', {
    url: '/followus',
    views: {
      'side-menu21': {
        templateUrl: 'templates/followUs.html',
        controller: 'followUsCtrl'
      }
    }
  })

  .state('menu.aboutUs', {
    url: '/aboutus',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu.donateToUs', {
    url: '/donate',
    views: {
      'side-menu21': {
        templateUrl: 'templates/donateToUs.html',
        controller: 'donateToUsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/taf')

  

});