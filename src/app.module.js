// for loading styles we need to load main scss file
import './styles/styles.scss';

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';

const appModule = angular
	.module('angularjs-es6-starter-kit', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.header',
		'app.home',
		'app.user',
		'app.creditcard',
		'app.vehicle',
		'app.session',
		'app.sessionsummary'
	]).filter('secondsTommss',[function(){
        return function(seconds){
            var minutes = parseInt(parseInt(seconds)/60);
            var second = parseInt(seconds)%60;
            return minutes+':'+second;
        }
    }]);

export default appModule;
