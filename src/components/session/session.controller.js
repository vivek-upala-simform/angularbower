export default class SessionController {
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
		this.refreshActiveTimestamp  = new Date();
		setInterval(this.navigateToPreviousState,3000);		
		this.currentplug = this.$rootScope.currentplug == undefined ?'ccs':this.$rootScope.currentplug;
		this.interval = setInterval(this.getStatus,500);     
		
		document.onkeypress = this.refreshTimestamp;               
       window.onload = this.refreshTimestamp;
       window.onmousemove = this.refreshTimestamp;
       window.onmousedown = this.refreshTimestamp;  // catches touchscreen presses as well      
       window.ontouchstart = this.refreshTimestamp; // catches touchscreen swipes as well 
       window.onclick = this.refreshTimestamp;      // catches touchpad clicks as well
	   window.onkeypress = this.refreshTimestamp;   
	   
		
		this.$log.info('Activated Session Detail View.');
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
		},(error)=>{
			console.log(error);
		});
    };
    changecurrentplug=(plug)=>{
        this.currentplug=plug;
	};
	stopchademo=()=>{
		this.$rootScope.currentplug='chademo';				
		this.$state.go('sessionsummary');
	};
	stopccs = ()=>{
		this.$rootScope.currentplug ='ccs';
		this.$state.go('sessionsummary');
	}

	refreshTimestamp=()=>{		
		
		this.refreshActiveTimestamp = new Date();
		console.log(this.refreshActiveTimestamp);
    }
    
    navigateToPreviousState=()=>{		
		var currentTime = new Date();
		var duration = (currentTime.getTime() - this.refreshActiveTimestamp.getTime())/1000; 
		if(duration>10)
		{
			console.log(currentTime + ' '+ this.refreshActiveTimestamp);

			this.$state.go('home');
		}
	}
}
