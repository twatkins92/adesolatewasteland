class loadingView{
	
	private parent : HTMLElement = null;
	private div : HTMLElement = null;
	
	
	constructor(parent : HTMLElement){
		this.parent = parent;
		
		this.createView();
	}
	
	public createView(){
		this.div = document.createElement("div");
		this.div.className = "overlay1";
		
		var loadingPopup = document.createElement("div");
		loadingPopup.className = "overlay2";
		var paragraph = document.createElement("p");
		paragraph.innerHTML = "Loading...";
		loadingPopup.appendChild(paragraph);
		
		
		this.parent.appendChild(this.div);
		this.div.appendChild(loadingPopup);
	}
	
	public destroyView(){
    this.parent.removeChild(this.div);
    this.div = null;
  }
	
}