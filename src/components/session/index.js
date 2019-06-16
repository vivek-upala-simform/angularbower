import sessionComponent from './session.component';

const sessionModule = angular.module('app.session', []);

// loading components, services, directives, specific to this module.
sessionModule.component('session', sessionComponent);

// export this module
export default sessionModule;
