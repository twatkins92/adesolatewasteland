class painBuildingTorture extends consumer{
		
	private secondsSinceLastPainIncreaseTick : number = 0;
	
	protected painPerSoulPerSecond : number = 0;
	
	private overduePain : number = 0;
	
	private lastUpdate : number;
	
	private nextWanderGenerate : number = 10;
	private timeSinceLastWanderGenerate : number = 0;
	
	constructor(map : map, resources : resources, maxOccupants : number, painPerSoulPerSecond : number){
		super(map, resources, maxOccupants);
		this.painPerSoulPerSecond = painPerSoulPerSecond;
	}
	
	public getPainPerSoulPerSecond(){
		
		return this.painPerSoulPerSecond * (1 + (0.1 * this.adjacentWarpers)); 
	}
	
	public update(timestamp : number){
		if(this.lastUpdate != null){
			
			//Calculate Pain
			this.secondsSinceLastPainIncreaseTick += ((timestamp - this.lastUpdate) / 1000);
			while(this.secondsSinceLastPainIncreaseTick >= 1){
				this.secondsSinceLastPainIncreaseTick -= 1;
				
				this.overduePain += this.getPainPerSoulPerSecond() * this.currentOccupants.length;
				var remainder = this.overduePain - Math.floor(this.overduePain);
				this.resources.addPain(Math.floor(this.overduePain));
				this.overduePain = remainder;
			}
				
			//Request Souls
			if(this.currentOccupants.length < this.maxOccupants && this.expectedOccupants.length == 0){
				this.addExpectedOccupant( this.map.requestActor(this) );
			}
			
			if(this.wanderingChildrenCount < this.maxWanderingChildren){
				this.timeSinceLastWanderGenerate += ((timestamp - this.lastUpdate) / 1000);
				if(this.timeSinceLastWanderGenerate > this.nextWanderGenerate){
					this.spawnWanderer();
					this.timeSinceLastWanderGenerate = 0;
					this.nextWanderGenerate = 5 + Math.random() * 30;
				}
			}
			
		}
		
		this.lastUpdate = timestamp;
	}
}