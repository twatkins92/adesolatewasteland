class ziggurat extends building{
	
	private resources : resources;
	
	private secondsSinceLastSoul : number = 0;
	private soulsConsumedPerSecond : number = 80;
	private targetSouls : number = 50000; //10 million?
	private currentSouls : number = 0;
	private anguishRequired : number = 1500000; //10 million?
	
	private lastUpdate : number;
	
	constructor(map : map, resources : resources){
		super(map);
		
		this.width = 5;
		this.height = 5;
		
		this.resources = resources;
		
		//\u2503
		// \u9820
		
		this.blueprint = [
			'\u265C\u2501\u2501\u2501\u265C',
			'\u2503\u265C\u2501\u265C\u2503',
			'\u2503\u2503\u265C\u2503\u2503',
			'\u2503\u265C\u2501\u265C\u2503',
			'\u265C\u2501\u2501\u2501\u265C'
		];
		
		this.description = "A grey ziggurat. Squatly proportioned, and yet still it towers above the meager 'town' around it.";
	}
	
	//TODO, Do I want it to be affected by warpers? Consider more.
	//If not I need to get rid of the blue glow for this building
	private getSoulsPerSecond(){
		return this.soulsConsumedPerSecond;
		//return this.soulsConsumedPerSecond * (1 + (this.adjacentWarpers / 2));
	}
	
	public update(timestamp : number){
		if(this.lastUpdate != null){
			if(this.currentSouls < this.targetSouls){
				this.secondsSinceLastSoul += ((timestamp - this.lastUpdate) / 1000);
			}
		}
		
		while(this.currentSouls < this.targetSouls && this.secondsSinceLastSoul > (1 / this.getSoulsPerSecond())){
			var soulsTransformed = this.resources.soulWindToBody(1);
			if(soulsTransformed > 0){
				this.secondsSinceLastSoul -= (1 / this.getSoulsPerSecond());
				this.currentSouls += 1;
			}
			else{
				break;
			}
		}
		
		this.lastUpdate = timestamp;
	}
	
	public getDeleteSouls(){
		return this.getMostRecentBones() + this.currentSouls;
	}
	
	public getSoulsRequired(){
		return this.targetSouls;
	}
	
	public getSoulsConsumed(){
		return this.currentSouls;
	}
	
	public getAnguishRequired(){
		return this.anguishRequired;
	}
	
	public getDescription(){
    return this.description;
  }
	
	public getCostForXBuilt(x : number){
		return 5000;
	}
	
	public end(){
		if(this.resources.spendPain(this.anguishRequired) || satanMode){
			endFunction();
		}
		else{
			var flavour = document.getElementById("flavour");
			if(flavour != null){
				flavour.innerHTML = "Not enough Anguish to perform the ritual.";
			}
		}
	}
}