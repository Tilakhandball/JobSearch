function jobSearchRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/jobSearch');
  $urlRouterProvider.when('/', '/jobSearch');
  $stateProvider
    .state('jobSearch', {
      url: '/jobSearch',
      component: 'jobSearch'
    })
    .state('jobDetail',{
      url: '/jobDetail',
      component: 'jobDetail'
    })
}
/* @ngInject */
export default jobSearchRoutes;
