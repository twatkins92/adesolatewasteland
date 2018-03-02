class labyrinth1 extends painBuildingTorture{
	
	constructor(map : map, resources : resources){
		super(map, resources, 1, 15);
		
		this.width = 3;
		this.height = 2;
		
		//\u2500
		
		this.blueprint = [
			'\u2533\u250A\u2533',
			'\u2523\u2513\u2503'
		];
		
		this.description = "The entrance to the labyrinth. Large stone pillars quickly fade into blackness. Screams can be heard from within";
		this.buildingMessage = "Requires 200 Bones.";
		
		this.maxWanderingChildren = 2;
		this.wandererDescription = "The monster wanders near the Labyrinth. Though it is afraid to venture inside, it is nourished by the screams that inexplicably reach the surface.";
	}
	
	public getCostForXBuilt(x : number){
		return 200;
	}
	
	public getPainPerSoulPerSecond(){
		return this.painPerSoulPerSecond * (1 + (0.1 * this.adjacentWarpers)) * this.map.getLabyrinths(); 
	}
}