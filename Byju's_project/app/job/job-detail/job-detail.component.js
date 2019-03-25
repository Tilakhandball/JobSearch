import jobDetailHtml from './job-details.html';


/* @ngInject */
let jobDetailComponent = {
  template: jobDetailHtml,
  controllerAs: 'jobDetail',
  controller: function (jobSearchService, $state) {
    const vm = this;
    vm.data = jobSearchService.selectedJob;
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
    vm.btnTxt = 'back';
    vm.goBack = function() {
      $state.go('jobSearch');
    }
  }
}

export default jobDetailComponent;
