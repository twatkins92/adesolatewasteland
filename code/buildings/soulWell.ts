class soulWell extends building{
	
	constructor(map : map){
		super(map);
		
		this.width = 5;
		this.height = 5;
		
		//\u2500
		
		this.blueprint = [
			'\u256D\u2500\u2500\u2500\u256E',
			'\u2502\u224B\u224B\u224B\u2502',
			'\u2502\u224B\u224B\u224B\u2502',
			'\u2502\u224B\u224B\u224B\u2502',
			'\u2570\u2500\u2500\u2500\u256F'
		];
		
		this.description = "The Eddy given physical form. A smooth bore-hole filled to the brim with swirling, liquid souls.";
		this.buildingMessage = "Requires 700 Bones. Non-functional.";
	}	
	
	public getCostForXBuilt(x : number){
		return 700;
	}
}