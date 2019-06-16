import vehicleComponent from './vehicle.component';

const vehicleModule = angular.module('app.vehicle', []);

// loading components, services, directives, specific to this module.
vehicleModule.component('vehicle', vehicleComponent);

// export this module
export default vehicleModule;
