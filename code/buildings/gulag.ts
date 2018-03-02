class gulag extends ghetto{
	
	constructor(map : map, resources : resources){
		super(map, resources);
		
		this.width = 4;
		this.height = 7;
		//\u2302
		this.blueprint = [
			'\u2302\u0245\u2591\u2302',
			'\u2302\u0245\u2591\u2302',
			'\u2302\u0245\u2591\u2302',
			'\u2302\u0245\u2591\u2302',
			'\u2302\u2591\u2591\u2302',
			'\u2302\u2591\u0245\u2302',
			'\u2302\u2591\u0245\u2302'
		];
		
		this.soulsToBodiesPerSecond = 4;
		this.maxOccupants = 20;
		
		this.description = "A massive shanty town. Souls are emaciated, worked to death. And yet somehow there are still always more.";
		this.buildingMessage = "Requires 600 Bones. Acts like a ghetto.";
	}
	
	public getCostForXBuilt(x : number){
		return 600;
	}
}