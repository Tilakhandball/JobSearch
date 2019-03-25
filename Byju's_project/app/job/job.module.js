import angular from 'angular';
import routing from './job.route';
import jobSearchComponent from './job-search/job-search.component';
import jobListComponent from './job-list/job-list.component';
import jobResultComponent from './job-result/job-result.component';
import jobDetailComponent from './job-detail/job-detail.component';
import service from './job.service';


/* @ngInject */
angular
  .module('job', [])
  .component('jobSearch', jobSearchComponent)
  .component('jobList',jobListComponent)
  .component('jobResult', jobResultComponent)
  .component('jobDetail', jobDetailComponent)
  .factory('jobSearchService', service)
  .config(routing);
