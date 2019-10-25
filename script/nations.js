let nameTable;
function preload(){
	nameTable = loadJSON('../../lang/pl_Countries.json');
}

function setup(){
    setContent()
}
let globalName = getTitle();
document.getElementById('ifrmkraj').setAttribute('src', globalName+".html");

function setContent(){
	let title = getTitle();
    let newName;
    let newProblems;
	let i = 172;
    while(i > 0){
        if(nameTable[i]['countryName'] == title){
            newName = nameTable[i]['finCountryName'];
            document.getElementById('title').innerHTML = newName;
			
			newProblems = nameTable[i]['problems'];
            divideData(newProblems);
            chPage(0);
            break;
        }
        i--;
    }
}

function getTitle(){
	let url = String(window.location.href);
    let lastIndexOfSlash = url.lastIndexOf("#")+1;
    let preTitle = url.substr(lastIndexOfSlash);
    let title = preTitle.replace(".html","");
	console.log(title);
	document.getElementById('title').innerHTML = title[0].toUpperCase()+title.substr(1);
	return title;
}	

let pages = [];
function divideData(data){
     let charPos = []; let txtLength;
    //znajdź wszystkie indeksy znaków przerwania//
    for(let i = 0; i < data.length; i++){
        if(data[i] == "&"){
            charPos.push(i);
        }
    }
    let bRead = 0; let finalChar = charPos.length;
    //dodaj pojedynczy problem do tablicy pages//
    for(let i = 0; i < (charPos.length+1); i++){
        if(i == finalChar){
            charPos.push(data.length);  //jeżeli nie ma już więcej znaków przerwania, dodaj długość danych
        }
        
        pages.push(data.substr(bRead, charPos[i] - bRead /* oblicz długość tekstu */));
        bRead = charPos[i]+1;
        if(i != finalChar+1){
            console.log(i)
            document.getElementById('pages').innerHTML+="<button class='page"+i+"'onclick='chPage("+i+")'>"+(i+1)+"</button>";
        }
    }
}
let pageNum = 0;
function chPage(n){
    document.getElementById('dataHolder').innerHTML = pages[n]
}