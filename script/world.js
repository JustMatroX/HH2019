let zoom = [0.8, 0.9, 1.15, 1.40, 1.65, 1.9, 2];
let z = 1;

function selectCountry(name){
    switch(name){
        case "canada":
            console.log('Canada!')
            break

    }
    
}

function zoomIn(){
    if(z != zoom.length-1 || z < zoom.length-1){
        z++
        console.log(zoom[z])
        document.getElementById('mapa').style.transform = "scale("+zoom[z]+")"
    }
}

function zoomOut(){
    if(z != 0 || z > 0){
        z--
        console.log(zoom[z])
        document.getElementById('mapa').style.transform = "scale("+zoom[z]+")"
    }
}

// function mouseDragged(){
//     let x = mouseX - pmouseX;
//     let y = mouseY - pmouseY;
//     console.log(x+" "+y)
// }