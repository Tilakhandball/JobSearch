import jobSearchHtml from './job-search.html';


/* @ngInject */
let jobSearchComponent = {
  template: jobSearchHtml,
  controllerAs: 'jobSearch',
  controller: function (jobSearchService, $http, $timeout) {
    const vm = this;
    vm.newDiv = false;
    vm.title = jobSearchService.title();
    vm.url = 'https://api.myjson.com/bins/kez8a';
    vm.caption = 'Search Jobs';
    vm.fresher = 'Fresher';
    vm.experience = 'Experienced';
    vm.btnText = 'Search';
    vm.welcomeNote = 'Welcome, Find Your Dream Job Here!';
    vm.searchJob = function() {
      jobSearchService.list = [];
      $http.get(vm.url).then(function(response) {
        jobSearchService.list = response.data.jobsfeed;
        vm.newDiv = true;
      })
      .catch(function(err) {
        alert('Something Went Wrong, please try again');
      });
    }
  }
}
export default jobSearchComponent;
