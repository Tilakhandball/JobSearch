import jobListHtml from './../job-list/job-list.html';

/* @ngInject */
let jobListComponent = {
  template: jobListHtml,
  controllerAs: 'jobList',
  controller: function (jobSearchService, $scope) {
    const vm = this;
    vm.totalJobs = jobSearchService.list.length;
    vm.jobs = jobSearchService.list;
    jobSearchService.searchText = vm.searchText;
    vm.caption = 'Job Listings';
    vm.jobTotal = 'Total Jobs';
    vm.Matches = 'Search Matches';
    vm.locSort = 'Sort by Location';
    vm.expSort = 'Sort by Exp';
    $scope.$watch(function() {
      return vm.searchText;
    },function(n,o) {
      if (n !== o) {
        jobSearchService.searchText = n;
      }
    });
    vm.jobSort = function(jobArr, sortType) {
      if (sortType === 'location') {
        jobSearchService.list = jobArr.sort(function(a, b) {
          if (a.location < b.location) { return -1; }
          if (a.location > b.location) { return 1; }
          return 0;
        });
      }
      else {
        jobSearchService.list = jobArr.sort(function(a, b) {
          if (parseInt(a.experience) < parseInt(b.experience)) { return -1; }
          if (parseInt(a.experience) > parseInt(b.experience)) { return 1; }
          return 0;
        });
      }
    }
  }
}
export default jobListComponent;
