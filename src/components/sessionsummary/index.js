import sessionSummaryComponent from './sessionsummary.component';

const sessionSummaryModule = angular.module('app.sessionsummary', []);

// loading components, services, directives, specific to this module.
sessionSummaryModule.component('sessionSummary', sessionSummaryComponent);

// export this module
export default sessionSummaryModule;
