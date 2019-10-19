function setup(){
    fadeIn();
    getTitle();
   
}


function fadeIn(){
    document.getElementById('nation').style.opacity = '1';
    document.getElementById('container').style.opacity = '1';
}

function selectRegion(name){
    //cokolwiek dla regionów (można skopiować switcha z world.js i zmienić case'y)
}

function getTitle(){
    let url = String(window.location.href);
    let lastIndexOfSlash = url.lastIndexOf("/")+1;
    let preTitle = url.substr(lastIndexOfSlash);
    let title = preTitle.replace(".html","");
    console.log(title)
    document.getElementById('title').innerHTML = title[0].toUpperCase()+title.substr(1);
}