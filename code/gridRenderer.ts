/// <reference path="map.ts"/>

class gridRenderer{

  protected canvas : HTMLCanvasElement = null;
  protected context : CanvasRenderingContext2D = null;

  private offCanvas : HTMLCanvasElement = null;
  private offContext: CanvasRenderingContext2D = null;

  //Sizes in tiles
  protected height : number;
  protected width : number;

  //Font Details
  private font: string;
  protected fontSize: number;
  private fontWidth : number;
  protected tileWidth : number;
	protected tileWidthAdjust : number;
	protected tileWidthOverride : number;

  protected map : map;

  protected parent : HTMLElement;

  //Parent, Font, Fontsize, Gridsize
  //I.e. Can change styling but not stuff to do with size
  constructor(parent : HTMLElement, font : string, fontSize: number, tileWidthAdjust : number, map : map, tileWidthOverride : number = null){

    this.parent = parent;

    this.width = map.getWidth();
    this.height = map.getHeight();

    this.font = font;
    this.fontSize = fontSize;
		this.tileWidthAdjust = tileWidthAdjust;
		this.tileWidthOverride = tileWidthOverride;
		
    this.map = map;

		
		/*
    //Create Offscreen canvas
    this.offCanvas = document.createElement("canvas");
    this.offContext = this.offCanvas.getContext("2d");

    this.offContext.font = this.fontSize.toString() + "px " + this.font;
    this.fontWidth = this.offContext.measureText('M').width;
    //this.tileWidth = this.fontSize;
    this.tileWidth = this.fontWidth + tileWidthAdjust;

    this.offCanvas.height = this.height * this.fontSize;
    //this.offCanvas.width = this.width * this.fontSize;
    this.offCanvas.width = this.width * this.tileWidth;
		
		*/

    //Render
    //this.renderAll();
  }

  public createView(){
		//Create Offscreen canvas
    this.offCanvas = document.createElement("canvas");
    this.offContext = this.offCanvas.getContext("2d");

    this.offContext.font = this.fontSize.toString() + "px " + this.font;
    this.fontWidth = this.offContext.measureText('M').width;
    //this.tileWidth = this.fontSize;
		if(this.tileWidthOverride == null){
			this.tileWidth = this.fontWidth + this.tileWidthAdjust;
		}
		else{
			this.tileWidth = this.tileWidthOverride;
		}
    

    this.offCanvas.height = this.height * this.fontSize;
    //this.offCanvas.width = this.width * this.fontSize;
    this.offCanvas.width = this.width * this.tileWidth;
		
    // Create the canvas
    this.canvas = document.createElement("canvas");
    if (!this.canvas.getContext) throw("Canvas not supported");
    this.context = this.canvas.getContext("2d");
    this.parent.appendChild(this.canvas);

    //Things that would change if Rectangled
    //this.canvas.width = this.width * this.fontSize;
    //this.canvas.height = this.height * this.fontSize;
    this.canvas.width = this.offCanvas.width;
    this.canvas.height = this.offCanvas.height;
    this.context.font = this.fontSize.toString() + "px " + this.font;
    //this.fontGap = this.fontSize - this.context.measureText('M').width;
  }

  public destroyView(){
    this.parent.removeChild(this.canvas);
    this.canvas = null;
  }

  //Render a single grid square at (x,y) - TODO check for valid input
  public renderGridSquare(x : number, y : number, char : string, colour : string = 'black', background : string = 'white', shadowColour : string = '#000000', shadowBlur : number = 0){
    //Render Square background
		if(background != null){
			this.offContext.fillStyle=background;
			this.offContext.fillRect(x * this.tileWidth, y * this.fontSize, this.tileWidth, this.fontSize);
		}

    //Render Character
    this.renderCharacter(x, y, char, colour, shadowColour, shadowBlur);
  }
	
	public renderCharacter(x : number, y : number, char : string, colour : string = 'black', shadowColour : string = '#000000', shadowBlur : number = 0){
		//Render Character
    this.offContext.font = this.fontSize.toString() + "px " + this.font;
    this.offContext.textBaseline = "middle";
		this.offContext.textAlign="center"; 
    this.offContext.fillStyle=colour;
				
		this.offContext.shadowColor = shadowColour;
		this.offContext.shadowBlur = shadowBlur;
				
    this.offContext.fillText(char, (x + 0.5) * this.tileWidth, (y + 0.5) * this.fontSize);
		
		this.offContext.shadowColor = '#000000';
		this.offContext.shadowBlur = 0;
	}
	
	public renderCircle(x : number, y : number, colour : string = 'red'){
		this.offContext.beginPath();
		this.offContext.strokeStyle=colour;
		this.offContext.arc(this.getMiddleX(x), this.getMiddleY(y),this.tileWidth * 0.25,0,2*Math.PI);
		this.offContext.stroke();
	}
	
	public renderPath(x1 : number, y1 : number, x2 : number, y2 : number, colour : string = 'red'){
		this.offContext.beginPath();
		this.offContext.strokeStyle=colour;
		this.offContext.moveTo(this.getMiddleX(x1), this.getMiddleY(y1));
		this.offContext.lineTo(this.getMiddleX(x2), this.getMiddleY(y2));
		this.offContext.stroke();
	}
	
	public getMiddleX(x : number){
		return (x * this.tileWidth) + (this.tileWidth / 2);
	}
	
	public getMiddleY(y : number){
		return (y * this.fontSize) + (this.fontSize / 2);
	}

  public renderBase(){
    if(this.canvas != null){
      for (var j = 0; j < this.height; ++j){
    		for (var i = 0; i < this.width; ++i) {
          this.renderGridSquare(i, j, this.map.getTile(i, j));
    		}
    	}

      /*
      this.context.strokeStyle="black";
      for(var f = 0; f <= this.width; f++){
        this.offContext.moveTo(f * this.fontSize,0);
        this.offContext.lineTo(f * this.fontSize, this.canvas.height);
        this.offContext.stroke();
      }

      for(var g = 0; g <= this.height; g++){
        this.offContext.moveTo(0,g * this.fontSize);
        this.offContext.lineTo(this.canvas.width, g * this.fontSize);
        this.offContext.stroke();
      }
      */

      //this.context.drawImage(this.offCanvas, 0, 0);
    }
  }

  public finishRendering(){
    this.context.drawImage(this.offCanvas, 0, 0);
  }
}
