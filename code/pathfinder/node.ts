class node{
	public x : number;
	public y : number;
	
	private neighbours : node[] = [];
	
	constructor(x : number, y : number){
		this.x = x;
		this.y = y;
	}
	
	public getNeighbours(){
		return this.neighbours;
	}
	
	public clearNeighbours(){
		this.neighbours = [];
		//console.log("Neighbours cleared. " + this.neighbours.length);
	}
	
	public addNeighbour(neighbour : node){
		this.neighbours.push(neighbour);
	}
	
	public removeNeighbour(neighbour : node){
		//console.log("Neighbours before delete: " + this.neighbours.length);
		var index = -1;
		for(var i = 0; this.neighbours.length; i++){
			if(this.neighbours[i] == neighbour){
				index = i;
				break;
			}
		}
		
		if(index > -1){
			this.neighbours.splice(index, 1);
		}
		//console.log("Neighbours before delete: " + this.neighbours.length);
	}
	
	public distanceFrom(neighbour : node) : number{
		return Math.sqrt((this.x - neighbour.x) ^ 2 + (this.y - neighbour.y) ^ 2);
	}
	
	public getX(){
		return this.x;
	}
	
	public getY(){
		return this.y;
	}
	
	public toString(){
		return this.x + "," + this.y;
	}
}