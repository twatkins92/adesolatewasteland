/// <reference path="./mapView.ts"/>

class mouseController {
    
    private mapRenderer : mapView = null; 

    private mouseX : number;
    private mouseY : number;
    private mouseOnCanvas : boolean = false;
    private mouseDown : boolean = false;

    constructor(mapRenderer) {
        this.mapRenderer = mapRenderer;

        this.mouseOnCanvas = false;
        this.mapRenderer.getCanvas().onmousemove = (event) => this.mouseMoved(event);
        this.mapRenderer.getCanvas().onmouseenter = (event) => {this.mouseOnCanvas = true;}
        this.mapRenderer.getCanvas().onmouseleave = (event) => {this.mouseOnCanvas = false; this.mouseDown = false;}
        this.mapRenderer.getCanvas().onmousedown = (event) => {this.mouseDown = true;}
        this.mapRenderer.getCanvas().onmouseup = (event) => {this.mouseDown = false;}
        this.mapRenderer.getCanvas().onclick = () => this.mapRenderer.canvasClick();
    }

    private mousePos(evt){
        var rect = this.mapRenderer.getCanvas().getBoundingClientRect();
        this.mouseX = Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*this.mapRenderer.getCanvas().width);
        this.mouseY = Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*this.mapRenderer.getCanvas().height);
    }

    private mouseMoved(evt) {
        this.mousePos(evt);
        this.mapRenderer.mouseMoved(this.mouseX, this.mouseY, this.mouseDown);
    }

}