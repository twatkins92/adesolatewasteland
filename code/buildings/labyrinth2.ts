class labyrinth2 extends building{
	constructor(map : map, resources : resources){
		super(map);
		
		this.width = 3;
		this.height = 3;
		
		//\u2500
		
		this.blueprint = [
			'\u2503\u250F\u2503',
			'\u251B\u2501\u252B',
			'\u253B\u2501\u251B',
		];
		
		
		this.description = "Screams can be heard from within. Make sure to bring a ball of string.";
		
		this.buildingMessage = "Requires 500 Bones and adjacent labyrinth piece. ";
	}
	
	public getMapRequirementsMet(buildings : building[]) : boolean{
		
		for(var y = 0; y < buildings.length; y++){
			if(buildings[y] instanceof labyrinth1){
				break;
			}
			if(y == buildings.length - 1){
				return false;
			}
		}
		
		var allAdjacent = this.getAllAdjacentTo(buildings);
		var crushersAdjacentTo = 0;
		
		for(var i = 0; i < allAdjacent.length; i++){
			if(allAdjacent[i] instanceof labyrinth1 ||
			allAdjacent[i] instanceof labyrinth2 ||
			allAdjacent[i] instanceof labyrinth3 ||
			allAdjacent[i] instanceof labyrinth4 ||
			allAdjacent[i] instanceof labyrinth5){
				return true;
			}
		}
		
		return false;
	}
	
	public getCostForXBuilt(x : number){
		return 500;
	}
}