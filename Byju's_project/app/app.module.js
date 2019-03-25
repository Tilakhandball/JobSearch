import angular from 'angular';
import uirouter from 'angular-ui-router';
import job from './job/job.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  'job'
]);
