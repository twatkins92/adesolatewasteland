class wanderingActor extends actor{
	
	private description : string = null;
	
	private home : building = null;
	
	private waitTimeMin : number = 2;
	private waitTimeMax : number = 10;
	
	private waitTime : number = 0;
	private timeWaited : number = 0;
	
	private dieChance : number = 0.1;
	private randDistance : number = 5;
	
	private lastTimeStamp : number;
	
	constructor(map : map, nodeGraph : hellPathGraph, home : building, x : number, y : number, description : string, colour : string = "blue"){
		super(map, nodeGraph, colour);
		this.description = description;
		this.home = home;
		this.x = x;
		this.y = y;
		this.arrive();
	}
	
	public arrive() {
		this.pathFollower = null;
		this.timeWaited = 0;
		this.waitTime = this.waitTimeMin + (Math.random() * (this.waitTimeMax - this.waitTimeMin));
	}
	
	
	public doNotArrive(){
		//Notify home that actor is dead
		this.home.removeWanderer();
		this.map.killActor(this);
	}
	
	public getDeleteSouls(){
		return 0;
	}
	
	public getDescription(){
		return this.description;
	}
	
	public makeDecision(){
		if(Math.random() < this.dieChance){
			this.doNotArrive();
			return;
		}
		
		var currentNode = this.nodeGraph.getNode(Math.round(this.x), Math.round(this.y));
		if(currentNode == null){
			this.doNotArrive();
			return;
		}
		
		//New Path Follower, generate path etc
		var nodes = this.nodeGraph.getAllNodes();
		var trimmedNodes = [];
		
		for(var i = 0; i < nodes.length; i++){
			if(Math.abs(nodes[i].x - this.x) <= this.randDistance && Math.abs(nodes[i].y - this.y) <= this.randDistance){
				trimmedNodes.push(nodes[i]);
			}
		}
		
		if(trimmedNodes.length > 0){
			var randDestination = trimmedNodes[Math.floor(Math.random() * trimmedNodes.length)];
			var pf = new pathfinder();
			var path = pf.findPath(currentNode, randDestination);
			if(path != null){
				this.pathFollower = new pathFollower();
				this.pathFollower.setPath(path);
			}
		}
	}
	
	public getHome(){
		return this.home;
	}
	
	public update(timestamp : number){
		super.update(timestamp);
		
		if(this.pathFollower == null && this.lastTimeStamp != null){
			var timeDiff = (timestamp - this.lastTimeStamp) / 1000;
			this.timeWaited += timeDiff;
			
			if(this.timeWaited > this.waitTime){
				this.makeDecision();
			}
		}
		
		this.lastTimeStamp = timestamp;
	}
}