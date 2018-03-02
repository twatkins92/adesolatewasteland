class simpleMessageView{
	
	private parent : HTMLElement = null;
	private div : HTMLElement = null;
	
	private message : string;
	
	private mapView : mapView = null;
	
	constructor(parent : HTMLElement, message : string, mapView : mapView){
		this.parent = parent;
		
		this.message = message;
		this.mapView = mapView;
		
		this.createView();
	}
	
	public createView(){
		this.div = document.createElement("div");
		var paragraph = document.createElement("p");
		paragraph.innerHTML = this.message;
		this.div.appendChild(paragraph);
		
		
		var options : HTMLUListElement = document.createElement("ul");
    options.className = "horzMenu";
		
		var button2 : HTMLButtonElement = document.createElement("button");
		button2.innerHTML = "Return";
		button2.onclick = () => {
			this.destroyView();
		}
		options.appendChild(button2);
		
		this.div.insertBefore(options, this.div.firstChild);
		this.parent.appendChild(this.div);
	}
	
	public destroyView(){
    this.parent.removeChild(this.div);
    this.div = null;
		this.mapView.createView();
  }
	
}