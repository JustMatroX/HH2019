
function createRect(x, y){
    rect(x, random(200, 400), x*2, y*2)
}
var i = 0;
function rectRand(n){
    var tab = [];
    var x = 0; var y = height;
     
    while(i < n){
        x = random(width);
        y = 200;
        append(tab, createRect(x, y));
        i++
    }
    x += 5;
    tab;
}

function setup(){
    createCanvas(800, 400);
    background('#333');
}

function draw(){
    rectRand(8);
}