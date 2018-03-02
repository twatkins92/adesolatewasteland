/// <reference path="./buildings/hangman.ts"/>
/// <reference path="./buildings/cesspit.ts"/>
/// <reference path="./buildings/labyrinth1.ts"/>
/// <reference path="./buildings/labyrinth2.ts"/>
/// <reference path="./buildings/labyrinth3.ts"/>
/// <reference path="./buildings/labyrinth4.ts"/>
/// <reference path="./buildings/labyrinth5.ts"/>
/// <reference path="./buildings/solitude.ts"/>
/// <reference path="./buildings/oasis.ts"/>
/// <reference path="./buildings/gulag.ts"/>
/// <reference path="./buildings/catacombs.ts"/>
/// <reference path="./buildings/sisyphus.ts"/>
/// <reference path="./buildings/soulWell.ts"/>
/// <reference path="./buildings/cage.ts"/>
/// <reference path="./buildings/cessSwamp.ts"/>
/// <reference path="./buildings/lightningRod.ts"/>
/// <reference path="./buildings/mall.ts"/>

class painBuildingProgress{
	
	private buildingProgression;
	
	constructor(){
		this.buildingProgression = [];
		
		this.buildingProgression.push([hangman, "Hangman's Hill"]);
		this.buildingProgression.push([cesspit, "Cesspit"]);
		
		this.buildingProgression.push([labyrinth1, "Labyrinth Gates"]);
		this.buildingProgression.push([solitude, "Lonely Throne"]);
		this.buildingProgression.push([oasis, "Oasis Mirage"]);
		
		this.buildingProgression.push([labyrinth2, "Extend Labyrinth"]);
		this.buildingProgression.push([gulag, "Gulag"]);
		this.buildingProgression.push([soulWell, "Well of Souls"]);

		
		this.buildingProgression.push([labyrinth3, "Extend Labyrinth"]);
		this.buildingProgression.push([cage, "The Cage"]);
		
		this.buildingProgression.push([labyrinth4, "Extend Labyrinth"]);
		this.buildingProgression.push([cessSwamp, "Cess-Swamp"]);
		this.buildingProgression.push([mall, "Abandoned Mall"]);
		this.buildingProgression.push([lightningRod, "Lightning Rod"]);
		this.buildingProgression.push([sisyphus, "A Boulder, A Hill"]);
		
		this.buildingProgression.push([labyrinth5, "Extend Labyrinth"]);
	}
	
	public getNextPainBuilding(map : map, resources : resources){
		var output = [];
		
		var buildingTypes = [];
		
		var mapBuildings = map.getBuildings();
		for(var i = 0; i < mapBuildings.length; i++){
			if(!buildingTypes.includes(mapBuildings[i].constructor)){
				buildingTypes.push(mapBuildings[i].constructor);
			}
		}
		
		var buildingProgressionIndex;
		for(var y = 0; y < this.buildingProgression.length; y++){
			if(!buildingTypes.includes(this.buildingProgression[y][0])){
				buildingProgressionIndex = y;
				break;
			}
		}
		
		if(buildingProgressionIndex != null){
			var buttonString = this.buildingProgression[buildingProgressionIndex][1];
			var toBuild = new this.buildingProgression[buildingProgressionIndex][0](map, resources);
			
			output.push(buttonString);
			output.push(toBuild);
			
			return output;
		}
		else{
			return null;
		}
		
		
	}
	
	//if(valueOrMyReturn) return new ClassDictionary[className](valueOrMyReturn);
}