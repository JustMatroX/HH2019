let zoom = [0.6 , 0.8, 1, 1.2, 1.4, 1.6, 2.0, 2.4, 2.8, 3.2, 3.6, 4.0, 4.4, 4.8];
let z = 1;
let windowMode;
let dragIter = 0;
let mapOffset = [getCurrentMapPos("x"),getCurrentMapPos("y")];

function setup(){
    createCanvas(innerWidth, windowHeight)
    
    autoResize()
    
}
function draw(){
    
}

function windowResized(){
    autoResize()
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
     dragMap()
     
 }


function mouseWheel(e){
    let dir = 0;
    dir += e.delta;
    if(dir < 0){
        zoomIn();
    }
    else if(dir > 0){
        zoomOut();
    }
}

function getCurrentMapPos(ch){
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


 function dragMap(){
    let x = 0
    let y = 0
    
    if(mapOffset[0] >= -1060 && mapOffset[0] <= 140){    //GRANICA LEWA i PRAWA
        x = mouseX - pmouseX;
    }
    else if(mapOffset[0] <= -1060){ //LEWA
        x = 1;
    }
    else if(mapOffset[0] >= 140){   //PRAWA
        x = -1;
    }

    if(mapOffset[1] >= -720 && mapOffset[1] <= 40){     //GRANICA GÓRNA i DOLNA
        y = mouseY - pmouseY;
    }
    else if(mapOffset[1] <= -720){  //GÓRNA
        y = 1;
    }
    else if(mapOffset[1] >= 40){    //DOLNA
        y = -1;
    }
    
    mapOffset = [mapOffset[0]+x, mapOffset[1]+y]
    document.getElementById('mapa').style.transform = "translate("+mapOffset[0]+"px,"+mapOffset[1]+"px) scale("+zoom[z]+")";
 }

 function selectCountry(name){
     console.log(name)
    window.location.href = "../../maps/html/"+name+".html";
    // switch(name){
    //     case "united_arab_emirates":
    //         console.log(name)
    //         break
    //     case "afghanistan":
    //         console.log(name)
    //         break
    //     case "albania":
    //         console.log(name)
    //         break
    //     case "armenia":
    //         console.log(name)
    //         break
    //     case "angola":
    //         console.log(name)
    //         break
    //     case "argentina":
    //         console.log(name)
    //         break
    //     case "austria":
    //         console.log(name)
    //         break
    //     case "australia":
    //         console.log(name)
    //         break
    //     case "azerbaijan":
    //         console.log(name)
    //         break
    //     case "bosnia_and_herzegovina":
    //         console.log(name)
    //         break
    //     case "bangladesh":
    //         console.log(name)
    //         break
    //     case "belgium":
    //         console.log(name)
    //         break
    //     case "burkina_faso":
    //         console.log(name)
    //         break
    //     case "bulgaria":
    //         console.log(name)
    //         break
    //     case "burundi":
    //         console.log(name)
    //         break
    //     case "benin":
    //         console.log(name)
    //         break
    //     case "brunei_darussalam":
    //         console.log(name)
    //         break
    //     case "bolivia":
    //         console.log(name)
    //         break
    //     case "brazil":
    //         console.log(name)
    //         break
    //     case "bahamas":
    //         console.log(name)
    //         break
    //     case "bhutan":
    //         console.log(name)
    //         break
    //     case "botswana":
    //         console.log(name)
    //         break
    //     case "belarus":
    //         console.log(name)
    //         break
    //     case "belize":
    //         console.log(name)
    //         break
    //     case "canada":
    //         console.log(name)
    //         break
    //     case "democratic_republic_of_congo":
    //         console.log(name)
    //         break
    //     case "central_african_republic":
    //         console.log(name)
    //         break
    //     case "republic_of_congo":
    //         console.log(name)
    //         break
    //     case "switzerland":
    //         console.log(name)
    //         break
    //     case "côte_dIvoire":
    //         console.log(name)
    //         break
    //     case "chile":
    //         console.log(name)
    //         break
    //     case "cameroon":
    //         console.log(name)
    //         break
    //     case "china":
    //         console.log(name)
    //         break
    //     case "colombia":
    //         console.log(name)
    //         break
    //     case "costa_rica":
    //         console.log(name)
    //         break
    //     case "cuba":
    //         console.log(name)
    //         break
    //     case "cyprus":
    //         console.log(name)
    //         break
    //     case "czechia":
    //         console.log(name)
    //         break
    //     case "germany":
    //         console.log(name)
    //         break
    //     case "djibouti":
    //         console.log(name)
    //         break
    //     case "denmark":
    //         console.log(name)
    //         break
    //     case "dominican_republic":
    //         console.log(name)
    //         break
    //     case "algeria":
    //         console.log(name)
    //         break
    //     case "ecuador":
    //         console.log(name)
    //         break
    //     case "estonia":
    //         console.log(name)
    //         break
    //     case "egypt":
    //         console.log(name)
    //         break
    //     case "western_sahara":
    //         console.log(name)
    //         break
    //     case "eritrea":
    //         console.log(name)
    //         break
    //     case "spain":
    //         console.log(name)
    //         break
    //     case "ethiopia":
    //         console.log(name)
    //         break
    //     case "falkland_islands":
    //         console.log(name)
    //         break
    //     case "finland":
    //         console.log(name)
    //         break
    //     case "fiji":
    //         console.log(name)
    //         break
    //     case "france":
    //         console.log(name)
    //         break
    //     case "gabon":
    //         console.log(name)
    //         break
    //     case "united_kingdom":
    //         console.log(name)
    //         break
    //     case "georgia":
    //         console.log(name)
    //         break
    //     case "french_guiana":
    //         console.log(name)
    //         break
    //     case "ghana":
    //         console.log(name)
    //         break
    //     case "greenland":
    //         console.log(name)
    //         break
    //     case "gambia":
    //         console.log(name)
    //         break
    //     case "guinea":
    //         console.log(name)
    //         break
    //     case "equatorial_guinea":
    //         console.log(name)
    //         break
    //     case "greece":
    //         console.log(name)
    //         break
    //     case "guatemala":
    //         console.log(name)
    //         break
    //     case "guinea_bissau":
    //         console.log(name)
    //         break
    //     case "guyana":
    //         console.log(name)
    //         break
    //     case "honduras":
    //         console.log(name)
    //         break
    //     case "croatia":
    //         console.log(name)
    //         break
    //     case "haiti":
    //         console.log(name)
    //         break
    //     case "hungary":
    //         console.log(name)
    //         break
    //     case "indonesia":
    //         console.log(name)
    //         break
    //     case "ireland":
    //         console.log(name)
    //         break
    //     case "israel":
    //         console.log(name)
    //         break
    //     case "india":
    //         console.log(name)
    //         break
    //     case "iraq":
    //         console.log(name)
    //         break
    //     case "iran":
    //         console.log(name)
    //         break
    //     case "iceland":
    //         console.log(name)
    //         break
    //     case "italy":
    //         console.log(name)
    //         break
    //     case "jamaica":
    //         console.log(name)
    //         break
    //     case "jordan":
    //         console.log(name)
    //         break
    //     case "japan":
    //         console.log(name)
    //         break
    //     case "kenya":
    //         console.log(name)
    //         break
    //     case "kyrgyzstan":
    //         console.log(name)
    //         break
    //     case "cambodia":
    //         console.log(name)
    //         break
    //     case "north_korea":
    //         console.log(name)
    //         break
    //     case "south_korea":
    //         console.log(name)
    //         break
    //     case "kosovo":
    //         console.log(name)
    //         break
    //     case "kuwait":
    //         console.log(name)
    //         break
    //     case "kazakhstan":
    //         console.log(name)
    //         break
    //     case "lao_peoples_remocratic_republic":
    //         console.log(name)
    //         break
    //     case "lebanon":
    //         console.log(name)
    //         break
    //     case "sri_lanka":
    //         console.log(name)
    //         break
    //     case "liberia":
    //         console.log(name)
    //         break
    //     case "lesotho":
    //         console.log(name)
    //         break
    //     case "lithuania":
    //         console.log(name)
    //         break
    //     case "luxembourg":
    //         console.log(name)
    //         break
    //     case "latvia":
    //         console.log(name)
    //         break
    //     case "libya":
    //         console.log(name)
    //         break
    //     case "morocco":
    //         console.log(name)
    //         break
    //     case "moldova":
    //         console.log(name)
    //         break
    //     case "montenegro":
    //         console.log(name)
    //         break
    //     case "madagascar":
    //         console.log(name)
    //         break
    //     case "macedonia":
    //         console.log(name)
    //         break
    //     case "mali":
    //         console.log(name)
    //         break
    //     case "myanmar":
    //         console.log(name)
    //         break
    //     case "mongolia":
    //         console.log(name)
    //         break
    //     case "mauritania":
    //         console.log(name)
    //         break
    //     case "malawi":
    //         console.log(name)
    //         break
    //     case "mexico":
    //         console.log(name)
    //         break
    //     case "malaysia":
    //         console.log(name)
    //         break
    //     case "mozambique":
    //         console.log(name)
    //         break
    //     case "namibia":
    //         console.log(name)
    //         break
    //     case "new_caledonia":
    //         console.log(name)
    //         break
    //     case "niger":
    //         console.log(name)
    //         break
    //     case "nigeria":
    //         console.log(name)
    //         break
    //     case "nicaragua":
    //         console.log(name)
    //         break
    //     case "netherlands":
    //         console.log(name)
    //         break
    //     case "norway":
    //         console.log(name)
    //         break
    //     case "nepal":
    //         console.log(name)
    //         break
    //     case "new_zealand":
    //         console.log(name)
    //         break
    //     case "oman":
    //         console.log(name)
    //         break
    //     case "panama":
    //         console.log(name)
    //         break
    //     case "peru":
    //         console.log(name)
    //         break
    //     case "papua_new_guinea":
    //         console.log(name)
    //         break
    //     case "philippines":
    //         console.log(name)
    //         break
    //     case "poland":
    //         console.log(name)
    //         break
    //     case "pakistan":
    //         console.log(name)
    //         break
    //     case "puerto_rico":
    //         console.log(name)
    //         break
    //     case "palestinian_territories":
    //         console.log(name)
    //         break
    //     case "portugal":
    //         console.log(name)
    //         break
    //     case "paraguay":
    //         console.log(name)
    //         break
    //     case "qatar":
    //         console.log(name)
    //         break
    //     case "romania":
    //         console.log(name)
    //         break
    //     case "serbia":
    //         console.log(name)
    //         break
    //     case "russia":
    //         console.log(name)
    //         break
    //     case "rwanda":
    //         console.log(name)
    //         break
    //     case "saudi_arabia":
    //         console.log(name)
    //         break
    //     case "solomon_islands":
    //         console.log(name)
    //         break
    //     case "sudan":
    //         console.log(name)
    //         break
    //     case "sweden":
    //         console.log(name)
    //         break
    //     case "slovenia":
    //         console.log(name)
    //         break
    //     case "svalbard_and_jan_mayen":
    //         console.log(name)
    //         break
    //     case "slovakia":
    //         console.log(name)
    //         break
    //     case "sierra_leone":
    //         console.log(name)
    //         break
    //     case "senegal":
    //         console.log(name)
    //         break
    //     case "somalia":
    //         console.log(name)
    //         break
    //     case "suriname":
    //         console.log(name)
    //         break
    //     case "south_sudan":
    //         console.log(name)
    //         break
    //     case "el_salvador":
    //         console.log(name)
    //         break
    //     case "syria":
    //         console.log(name)
    //         break
    //     case "swaziland":
    //         console.log(name)
    //         break
    //     case "chad":
    //         console.log(name)
    //         break
    //     case "togo":
    //         console.log(name)
    //         break
    //     case "thailand":
    //         console.log(name)
    //         break
    //     case "tajikistan":
    //         console.log(name)
    //         break
    //     case "timor_leste":
    //         console.log(name)
    //         break
    //     case "turkmenistan":
    //         console.log(name)
    //         break
    //     case "tunisia":
    //         console.log(name)
    //         break
    //     case "turkey":
    //         console.log(name)
    //         break
    //     case "trinidad_and_tobago":
    //         console.log(name)
    //         break
    //     case "taiwan":
    //         console.log(name)
    //         break
    //     case "tanzania":
    //         console.log(name)
    //         break
    //     case "ukraine":
    //         console.log(name)
    //         break
    //     case "uganda":
    //         console.log(name)
    //         break
    //     case "united_states":
    //         console.log(name)
    //         break
    //     case "uruguay":
    //         console.log(name)
    //         break
    //     case "uzbekistan":
    //         console.log(name)
    //         break
    //     case "venezuela":
    //         console.log(name)
    //         break
    //     case "vietnam":
    //         console.log(name)
    //         break
    //     case "vanuatu":
    //         console.log(name)
    //         break
    //     case "yemen":
    //         console.log(name)
    //         break
    //     case "south_africa":
    //         console.log(name)
    //         break
    //     case "zambia":
    //         console.log(name)
    //         break
    //     case "zimbabwe":
    //         console.log(name)
    //         break

    // }
    
}