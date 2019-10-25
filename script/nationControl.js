
    let name = getTitle();
    var svg = document.getElementById(String(name));
    var bbox = svg.getBBox();
    var bboxx = bbox.x + bbox.width + bbox.x +150
    var bboxy = bbox.y + bbox.width + bbox.x +150
    svg.setAttribute("viewBox", "-50 -50 "+bboxx+" "+bboxy+"");

function getTitle(){
	let url = String(window.location.href);
    let lastIndexOfSlash = url.lastIndexOf("/")+1;
    let preTitle = url.substr(lastIndexOfSlash);
    let title = preTitle.replace(".html","");
	return title;
}	