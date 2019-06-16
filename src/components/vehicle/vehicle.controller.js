export default class VehicleController {
	constructor(
        $log,
        $state,
		boostService
	) {
		'ngInject';

		this.$log = $log;
        this.boostService = boostService;
        this.$state = $state;
        for(var i =0;i<99999;i++)
        {
            clearInterval(i);
        }
	}

	$onInit = () => {      
		this.interval = setInterval(this.getStatus,500);
        setInterval(this.navigateToPreviousState,3000);       
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
           
            if (this.currentplug == 'ccs') {
                this.status = this.ccs.state;
            }
            else if (this.currentplug == 'chademo') 
            {
                this.status = this.chademo.state;
            }
            if (this.status == 'CHARGING') 
            {                
                this.$state.go('home');
            }
            else 
            {
                this.setstatus();
            }     

        },(error)=>{
            console.log(error);
        });
    };
    setstatus=()=>{
        if(this.status == 'INITIALIZING')
        {
            this.status ='Initializing';
        }
        else if(this.status == 'SAFETY_TEST')
        {
            this.status='Insulation Check';
        }
        else if(this.status == 'AUTHORIZING')
        {
            this.status = 'Activating';
        }
    }

    activateccsplug=()=>
    {

        this.status = this.ccs.state;
        this.setstatus();
        this.currentplug = 'ccs';
    }

    activatechademoplug=()=>
    {
        this.status= this.chademo.state;           
        this.currentplug='chademo';   
        this.setstatus();                    
    }
    onhelpbuttonclick=()=>{
        this.contentpage ='helppage';
        setTimeout(this.navigateToplugVehiclepage,5000)
    };
    navigateToplugVehiclepage=()=>
    {
        this.contentpage = 'plugvehiclepage';
    }

    onccsplugclick=()=>{
        if(this.ccs.state!='UNAVAILABLE')
           {
               if(this.cardReader.state == 'AUTH_SUCCESS')
               {                   
                   this.$state.go('plugvehicle');
               }
               else
               {        
                   this.$state.go('welcome');
               }
           }
    }

    onchademoclick=()=>{
        if(this.chademo.state != 'UNAVAILABLE')
        {
            if(vm.cardReader.state == 'AUTH_SUCCESS')
               {
                   this.$state.go('plugvehicle');
               }
               else
               {                   
                   this.$state.go('welcome');
               }
        }
    }

   
}
