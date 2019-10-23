let nameTable;
function preload(){
    nameTable = loadJSON("../../lang/pl_Countries.json");
}

function setup(){
    fadeIn();
    setTitle();
}

let title = getTitle()

function fadeIn(){
    document.getElementById('canada').style.opacity = '1';
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
    return title;
    
}

function setTitle(){
    let newName;
    let i = 172;
    while(i > 0){
        if(nameTable[i]['countryName'] == title){
            newName = nameTable[i]['finCountryName'];
            document.getElementById('title').innerHTML = newName;
            console.log(newName);
            break;
        }
        i--;
    }
}