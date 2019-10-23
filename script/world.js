let zoom = [0.6 , 0.8, 1, 1.2, 1.4, 1.6, 2.0, 2.4, 2.8, 3.2, 3.6, 4.0, 4.4, 4.8]; //Wartości zooma
let z = 1;  //init wartość zooma
let windowMode; //init trybu
let mapOffset = [getCurrentMapPos("x"),getCurrentMapPos("y")];  //init tab dla przeciągania mapy

function setup(){
    autoResize()    //init rozmiaru mapy
}

function windowResized(){
    autoResize()    //Zmiana rozmiaru mapy
}

function autoResize(){
    if(innerWidth < 600){  //PHONE
        z = 0;
        windowMode = 0
        mapOffset = [getCurrentMapPos('x'), getCurrentMapPos('y')];
        document.getElementById('mapa').style.transform = "translate( -50%, -50%) scale("+zoom[z]+")";
    }
    else if(innerWidth > 600 && innerWidth < 768){ //TABLET
        z = 0;
        windowMode = 1
        mapOffset = [getCurrentMapPos('x'), getCurrentMapPos('y')];
        document.getElementById('mapa').style.transform = "translate( -50%, -45%) scale("+zoom[z]+")"
    }
    else if(innerWidth > 768){   //DESKTOP
        z = 1;
        windowMode = 2
        mapOffset = [getCurrentMapPos('x'), getCurrentMapPos('y')];
        document.getElementById('mapa').style.transform = "translate( -50%, -50%) scale("+zoom[z]+")"
    }
    getCurrentMapPos()
}

function mouseDragged(){
     dragMap()  //przeciąganie mapy
 }


function mouseWheel(e){ //Zmiana przybliżenia kółkiem myszy
    let dir = 0;
    dir += e.delta;
    if(dir < 0){
        zoomIn();
    }
    else if(dir > 0){
        zoomOut();
    }
}

function getCurrentMapPos(ch){  //Jaka pozycja mapy w css
    let mapa = document.getElementById('mapa');
    let mapaStyl = window.getComputedStyle(mapa, null)
    let matrix = new WebKitCSSMatrix(mapaStyl.webkitTransform)
    if(ch == 'x'){
        return matrix.m41;
    }
    else if(ch == 'y'){
        return matrix.m42;
    }
}

function zoomIn(){
    if(z != zoom.length-1 || z < zoom.length-1){
        z++
        document.getElementById('mapa').style.transform = "translate("+mapOffset[0]+"px,"+mapOffset[1]+"px) scale("+zoom[z]+")";
    }
}

function zoomOut(){
    if(z != 0 || z > 0){
        z--
        document.getElementById('mapa').style.transform = "translate("+mapOffset[0]+"px,"+mapOffset[1]+"px) scale("+zoom[z]+")";
    }
}


 function dragMap(){    //przeciąganie mapy
    let x = 0
    let y = 0
    
    let barrier = {
        minX: -1460 * zoom[z],
        maxX: 420 * zoom[z],
        minY: -1060 * zoom[z],
        maxY: 320 * zoom[z]
    }
    console.log(barrier)
    if(mapOffset[0] >= barrier.minX && mapOffset[0] <= barrier.maxX){    //GRANICA LEWA i PRAWA
        x = mouseX - pmouseX;
    }
    else if(mapOffset[0] <= barrier.minX){ //LEWA
        x = 1;
    }
    else if(mapOffset[0] >= barrier.maxX){   //PRAWA
        x = -1;
    }

    if(mapOffset[1] >= barrier.minY && mapOffset[1] <= barrier.maxY){     //GRANICA GÓRNA i DOLNA
        y = mouseY - pmouseY;
    }
    else if(mapOffset[1] <= barrier.minY){  //GÓRNA
        console.log()
        y = 1;
    }
    else if(mapOffset[1] >= barrier.maxY){    //DOLNA
        y = -1;
    }
    
    mapOffset = [mapOffset[0]+x, mapOffset[1]+y]
    document.getElementById('mapa').style.transform = "translate("+mapOffset[0]+"px,"+mapOffset[1]+"px) scale("+zoom[z]+")";
 }

 function selectCountry(name){  //przejście do wybranego kraju
    window.location.href = "../../maps/html/"+name+".html";
 }