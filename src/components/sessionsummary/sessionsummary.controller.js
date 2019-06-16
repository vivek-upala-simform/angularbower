export default class SessionSummaryController {
	constructor(
        $log,
        $state,
        $rootScope,
		boostService
	) {
		'ngInject';

        this.$log = $log;
        this.$state = $state;
        this.$rootScope = $rootScope;
		this.boostService = boostService;
	}

	$onInit = () => {
        this.currentplug = this.$rootScope.currentplug == undefined ?'ccs':this.$rootScope.currentplug;
        this.interval = setInterval(this.getStatus,500);        
		this.$log.info('Activated Session Summary View.');
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
            if(this.currentplug == 'chademo')
            {
                this.chademo.state ='FINISHED_OK';
            }	
            else
            {
                this.ccs.state ='FINISHED_OK';
            }
		},(error)=>{
			console.log(error);
		});
    };

    navigateToHome=()=>{
        this.$state.go('home');
    }
}
