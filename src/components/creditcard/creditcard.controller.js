export default class CreditCardController {
	constructor(
		$log,
		$state,
		boostService
	) {
		'ngInject';

		this.$log = $log;
		this.$state = $state;
		this.boostService = boostService;
	}

	$onInit = () => {
		this.interval = setInterval(this.getStatus,500);
		this.$log.info('Activated Credit card View.');
    };
    
    getStatus=()=>
	{
		this.boostService.getStatus().then((response)=>{
			this.boost = response;
			this.ccs = this.boost.left;
			this.chademo = this.boost.right;			
			this.cardReader = this.boost.cardReader;
			this.ccs.chargePercentstring = this.ccs.chargePercent+'%';
			this.chademo.chargePercentstring = this.chademo.chargePercent+'%';					
			if (this.cardReader.state == 'WAITING_FOR_CARD' || this.cardReader.state == 'IDLE') {
				this.status = 'Tap EVgo card or insert/swipe credit card below';
			}
			else if (this.cardReader.state == 'CARD_AUTHORIZING') {
				this.status = 'Connecting';
			}
			else if (this.cardReader.state == 'AUTH_SUCCESS') {
				this.status = 'Authorization success';
				setTimeout(plugvehicle , 1000);
			}
			else if (this.cardReader.state == 'AUTH_FAILED') {
				this.status = 'Error: Incorrect zip code';
			}			

		},(error)=>{
			console.log(error);
		});
	};
	plugvehicle=()=>{
		this.$state.go('plugvehicle');
	};
	
}
