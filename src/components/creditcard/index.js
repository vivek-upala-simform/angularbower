import creditCardComponent from './creditcard.component';

const creditCardModule = angular.module('app.creditcard', []);

// loading components, services, directives, specific to this module.
creditCardModule.component('creditcard', creditCardComponent);

// export this module
export default creditCardModule;
