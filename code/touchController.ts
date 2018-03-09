/// <reference path="./mapView.ts"/>

class touchController {
    
    private mapRenderer : mapView = null; 

    private mouseX : number;
    private mouseY : number;
    private mouseOnCanvas : boolean = false;
    private mouseDown : boolean = false;

    constructor(mapRenderer) {
        this.mapRenderer = mapRenderer;
    }
}