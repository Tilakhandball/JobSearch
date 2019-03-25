function jobSearchService($state) {
  var list;
  var searchText;
  var totSrchResult;
  var selectedJob;
  return {
    title: () => $state.current.name
  }

}

/* @ngInject */
export default jobSearchService;
