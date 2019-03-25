import jobResultHtml from './../job-result/job-result.html';

/* @ngInject */
let jobResultComponent = {
  template: jobResultHtml,
  controllerAs: 'jobResult',
  controller: function (jobSearchService, $scope, $state) {
    const vm = this;
    vm.jobs = jobSearchService.list;
    vm.searchText = jobSearchService.searchText;
    vm.title = 'Job Title';
    vm.company = 'Company';
    vm.locName = 'Location';
    vm.skill = 'Skills';
    vm.experience = 'Experience Required(Min)';
    vm.salary = 'Salary';
    vm.type = 'Type';
    vm.sDate = 'Start Date';
    vm.eDate = 'End date';
    vm.link = 'Apply Link';
    vm.src = 'Source';
    $scope.$watch(function() {
      return jobSearchService.list;
    },function(n,o) {
      if (n !== o) {
        vm.jobs = n;
      }
    });
    $scope.$watch(function() {
      return jobSearchService.searchText;
    },function(n,o) {
      if (n !== o) {
        vm.searchText = n;
      }
    });
    vm.showDetails = function(jobdetails) {
      jobSearchService.selectedJob = jobdetails;
      $state.go('jobDetail');
    }
  }
}
export default jobResultComponent;
