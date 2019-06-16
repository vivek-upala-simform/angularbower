export default class BoostService {
	constructor(
		$http
	) {
		'ngInject';

		this.$http = $http;
		this.baseUrl = 'https://stageadmin.freewiretech.com:50112/boostapi/';
	}

	getStatus = () => {
		var apiUrl = this.baseUrl+'boost/status';
		return this.$http.get(apiUrl)
			.then((response) => response.data);
	};
}
