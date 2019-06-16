export default class HomeController {
	constructor($log,$rootScope,$scope,$state,boostService) {
		'ngInject';

		for(var i =0;i<99999;i++)
        {
            clearInterval(i);
		}
		
		this.$log = $log;
		this.boostService= boostService;
		this.contentpage='boostchargerdetail';
		this.$state = $state;
		this.$scope = $scope;		
		this.$rootScope = $rootScope;
			
	}

	$onInit = () => {
		this.refreshActiveTimestamp = new Date();
		this.interval = setInterval(this.getStatus,500);
	
	   document.onkeypress = this.refreshTimestamp;               
       window.onload = this.refreshTimestamp;
       window.onmousemove = this.refreshTimestamp;
       window.onmousedown = this.refreshTimestamp;  // catches touchscreen presses as well      
       window.ontouchstart = this.refreshTimestamp; // catches touchscreen swipes as well 
       window.onclick = this.refreshTimestamp;      // catches touchpad clicks as well
	   window.onkeypress = this.refreshTimestamp;   		
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

	 showpricedetail(){
		this.contentpage ='pricedetail';
		setInterval(this.navigateToPreviousState,3000);
				
	}
	showboostchargerdetail=()=>{
		this.contentpage ='boostchargerdetail';						
	}

	onccsplugclick=()=>
	{
		if (this.ccs.state != 'UNAVAILABLE') {
			if (this.cardReader.state == 'AUTH_SUCCESS' || this.cardReader.state == 'IDLE') {
				this.$state.go('plugvehicle');
			}
			else {
				this.$state.go('creditcard');
			}
		}
	};

	onchademoclick=()=>{		
		if(this.chademo.state != 'UNAVAILABLE')
		{
			if(this.cardReader.state == 'AUTH_SUCCESS' || this.cardReader == 'IDLE')
			{
				this.$state.go('plugvehicle');
			}
			else
			{
				this.$state.go('creditcard');
			}
		}
	};

	navigateToSessionDetail=(currentplug)=>{
		this.$rootScope.currentplug = currentplug;
		this.$state.go('sessiondetail');
	}

	refreshTimestamp=()=>{
		this.refreshActiveTimestamp = new Date();
	}

	navigateToPreviousState=()=>{
		var currentTime = new Date();
		var duration = (currentTime.getTime() - this.refreshActiveTimestamp.getTime())/1000; 
		if(duration>10)
		{
			this.refreshActiveTimestamp = new Date();
			this.contentpage = 'boostchargerdetail';
		}
	}

	
}
