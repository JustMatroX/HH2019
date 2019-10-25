
    let name = getTitle();
    var svg = document.getElementById(String(name));
    var bbox = svg.getBBox();
    var bboxx = bbox.x + bbox.width + bbox.x 
    var bboxy = bbox.y + bbox.height + bbox.y 
    console.log(bboxy)
    console.log(bboxx)
    svg.setAttribute("viewBox", "0 0 "+bboxx+" "+bboxy+"");

function getTitle(){
	let url = String(window.location.href);
    let lastIndexOfSlash = url.lastIndexOf("/")+1;
    let preTitle = url.substr(lastIndexOfSlash);
    let title = preTitle.replace(".html","");
	return title;
}	