let nameTable;
function preload(){
	nameTable = loadJSON('../../lang/pl_Countries.json');
}

function setup(){
    setContent()
}

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
			document.getElementById('data').innerHTML = newProblems;
			document.getElementById('svgVp').innerHTML = "<img id='svgImg' src='../svg/"+title+"Low.svg#svgView(viewBox(0,50,1250,1250))'/>"
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