let nameTable;
function preload(){
	nameTable = loadJSON('../../lang/pl_Countries.json');
}

function setup(){
	getContent();
    setTitle()
}

function setTitle(){
	let title = getTitle();
    let newName;
    let i = 172;
    while(i > 0){
        if(nameTable[i]['countryName'] == title){
            newName = nameTable[i]['finCountryName'];
            document.getElementById('title').innerHTML = newName;
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

function firstProblem(countryName)
{
    var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {
		var country = JSON.parse(this.responseText);
		console.log(country);
		document.getElementById("wynik").innerHTML = country.p1;
		}
	};
	
	
	xmlhttp.open("GET", countryName, true);
	xmlhttp.send();
}

function secondProblem(countryName)
{
    var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {
		var country = JSON.parse(this.responseText);
		document.getElementById("wynik").innerHTML = country.p2;
		}
	};
	
	xmlhttp.open("GET", countryName, true);
	xmlhttp.send();
}

function thirdProblem(countryName)
{
    var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {
		var country = JSON.parse(this.responseText);
		document.getElementById("wynik").innerHTML = country.p3;
		}
	};
	
	xmlhttp.open("GET", countryName, true);
	xmlhttp.send();
}


function getContent(){
    let url = String(window.location.href);
    let lastIndexOfSlash = url.lastIndexOf("#")+1;
    let preTitle = url.substr(lastIndexOfSlash);
    let title = preTitle.replace(".html","");
	console.log(title);
	document.getElementById('svgVp').innerHTML = "<img id='svgImg' src='../svg/"+title+"Low.svg#svgView(viewBox(0,50,1250,1250))'/>"

    switch(title)
    {
        case 'canada':
				countryName = "../../data/canada.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='canadap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='canadap2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='canadap3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'china':
				countryName = "../../data/chiny.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='chinyp1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='chinyp2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='chinyp3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'syria':
				countryName = "../../data/syria.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='syriap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='syriap1'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='syriap1'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'india':
				countryName = "../../data/indie.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='indiep1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='indiep1'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='indiep1'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'united_states':
				countryName = "../../data/usa.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='usap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='usap2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='usap3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'ukraine':
				countryName = "../../data/ukraina.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='ukrainap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='ukrainap2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='ukrainap3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'colombia':
				countryName = "../../data/kolumbia.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='kolumbiap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='kolumbiap2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='kolumbiap3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'brazil':
				countryName = "../../data/brazylia.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='brazyliap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='brazyliap2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='brazyliap3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
		
		case 'germany':
				countryName = "../../data/niemcy.php";
                document.getElementById('data').innerHTML =
                 "<button onclick='firstProblem(countryName)'><image src='../../theme/images/button1.png' alt='brazyliap1'/></button>" +
                 "<button onclick='secondProblem(countryName)'><image src='../../theme/images/button2.png' alt='niemcyp2'/></button>" +
                 "<button onclick='thirdProblem(countryName)'><image src='../../theme/images/button3.png' alt='niemcyp3'/></button>" +
                 "<br /><br /><p id='wynik'></p>";
                break;
				
		case "united_arab_emirates":
	        console.log(name)
	        break
	    case "afghanistan":
	        console.log(name)
	        break
	    case "albania":
	        console.log(name)
	        break
	    case "armenia":
	        console.log(name)
	        break
	    case "angola":
	        console.log(name)
	        break
	    case "argentina":
	        console.log(name)
	        break
	    case "austria":
	        console.log(name)
	        break
	    case "australia":
	        console.log(name)
	        break
	    case "azerbaijan":
	        console.log(name)
	        break
	    case "bosnia_and_herzegovina":
	        console.log(name)
	        break
	    case "bangladesh":
	        console.log(name)
	        break
	    case "belgium":
	        console.log(name)
	        break
	    case "burkina_faso":
	        console.log(name)
	        break
	    case "bulgaria":
	        console.log(name)
	        break
	    case "burundi":
	        console.log(name)
	        break
	    case "benin":
	        console.log(name)
	        break
	    case "brunei_darussalam":
	        console.log(name)
	        break
	    case "bolivia":
	        console.log(name)
	        break
	    case "brazil":
	        console.log(name)
	        break
	    case "bahamas":
	        console.log(name)
	        break
	    case "bhutan":
	        console.log(name)
	        break
	    case "botswana":
	        console.log(name)
	        break
	    case "belarus":
	        console.log(name)
	        break
	    case "belize":
	        console.log(name)
	        break
	    case "canada":
	        console.log(name)
	        break
	    case "democratic_republic_of_congo":
	        console.log(name)
	        break
	    case "central_african_republic":
	        console.log(name)
	        break
	    case "republic_of_congo":
	        console.log(name)
	        break
	    case "switzerland":
	        console.log(name)
	        break
	    case "côte_dIvoire":
	        console.log(name)
	        break
	    case "chile":
	        console.log(name)
	        break
	    case "cameroon":
	        console.log(name)
	        break
	    case "china":
	        console.log(name)
	        break
	    case "colombia":
	        console.log(name)
	        break
	    case "costa_rica":
	        console.log(name)
	        break
	    case "cuba":
	        console.log(name)
	        break
	    case "cyprus":
	        console.log(name)
	        break
	    case "czechia":
	        console.log(name)
	        break
	    case "germany":
	        console.log(name)
	        break
	    case "djibouti":
	        console.log(name)
	        break
	    case "denmark":
	        console.log(name)
	        break
	    case "dominican_republic":
	        console.log(name)
	        break
	    case "algeria":
	        console.log(name)
	        break
	    case "ecuador":
	        console.log(name)
	        break
	    case "estonia":
	        console.log(name)
	        break
	    case "egypt":
	        console.log(name)
	        break
	    case "western_sahara":
	        console.log(name)
	        break
	    case "eritrea":
	        console.log(name)
	        break
	    case "spain":
	        console.log(name)
	        break
	    case "ethiopia":
	        console.log(name)
	        break
	    case "falkland_islands":
	        console.log(name)
	        break
	    case "finland":
	        console.log(name)
	        break
	    case "fiji":
	        console.log(name)
	        break
	    case "france":
	        console.log(name)
	        break
	    case "gabon":
	        console.log(name)
	        break
	    case "united_kingdom":
	        console.log(name)
	        break
	    case "georgia":
	        console.log(name)
	        break
	    case "french_guiana":
	        console.log(name)
	        break
	    case "ghana":
	        console.log(name)
	        break
	    case "greenland":
	        console.log(name)
	        break
	    case "gambia":
	        console.log(name)
	        break
	    case "guinea":
	        console.log(name)
	        break
	    case "equatorial_guinea":
	        console.log(name)
	        break
	    case "greece":
	        console.log(name)
	        break
	    case "guatemala":
	        console.log(name)
	        break
	    case "guinea_bissau":
	        console.log(name)
	        break
	    case "guyana":
	        console.log(name)
	        break
	    case "honduras":
	        console.log(name)
	        break
	    case "croatia":
	        console.log(name)
	        break
	     case "haiti":
	         console.log(name)
	         break
	     case "hungary":
	         console.log(name)
	         break
	     case "indonesia":
	         console.log(name)
	         break
	     case "ireland":
	         console.log(name)
	         break
	     case "israel":
	         console.log(name)
	         break
	     case "india":
	         console.log(name)
	         break
	     case "iraq":
	         console.log(name)
	         break
	     case "iran":
	         console.log(name)
	         break
	     case "iceland":
	         console.log(name)
	         break
	     case "italy":
	         console.log(name)
	         break
	     case "jamaica":
	         console.log(name)
	         break
	     case "jordan":
	         console.log(name)
	         break
	     case "japan":
	         console.log(name)
	         break
	     case "kenya":
	         console.log(name)
	         break
	     case "kyrgyzstan":
	         console.log(name)
	         break
	     case "cambodia":
	         console.log(name)
	         break
	     case "north_korea":
	         console.log(name)
	         break
	     case "south_korea":
	         console.log(name)
	         break
	     case "kosovo":
	         console.log(name)
	         break
	     case "kuwait":
	         console.log(name)
	         break
	     case "kazakhstan":
	         console.log(name)
	         break
	     case "lao_peoples_remocratic_republic":
	         console.log(name)
	         break
	     case "lebanon":
	         console.log(name)
	         break
	     case "sri_lanka":
	         console.log(name)
	         break
	     case "liberia":
	         console.log(name)
	         break
	     case "lesotho":
	         console.log(name)
	         break
	     case "lithuania":
	         console.log(name)
	         break
	     case "luxembourg":
	         console.log(name)
	         break
	     case "latvia":
	         console.log(name)
	         break
	     case "libya":
	         console.log(name)
	         break
	     case "morocco":
	         console.log(name)
	         break
	     case "moldova":
	         console.log(name)
	         break
	     case "montenegro":
	         console.log(name)
	         break
	     case "madagascar":
	         console.log(name)
	         break
	     case "macedonia":
	         console.log(name)
	         break
	     case "mali":
	         console.log(name)
	         break
	     case "myanmar":
	         console.log(name)
	         break
	     case "mongolia":
	         console.log(name)
	         break
	     case "mauritania":
	         console.log(name)
	         break
	     case "malawi":
	         console.log(name)
	         break
	     case "mexico":
	         console.log(name)
	         break
	     case "malaysia":
	         console.log(name)
	         break
	     case "mozambique":
	         console.log(name)
	         break
	     case "namibia":
	         console.log(name)
	         break
	     case "new_caledonia":
	         console.log(name)
	         break
	     case "niger":
	         console.log(name)
	         break
	     case "nigeria":
	         console.log(name)
	         break
	     case "nicaragua":
	         console.log(name)
	         break
	     case "netherlands":
	         console.log(name)
	         break
	     case "norway":
	         console.log(name)
	         break
	     case "nepal":
	         console.log(name)
	         break
	     case "new_zealand":
	         console.log(name)
	         break
	     case "oman":
	         console.log(name)
	         break
	     case "panama":
	         console.log(name)
	         break
	     case "peru":
	         console.log(name)
	         break
	     case "papua_new_guinea":
	         console.log(name)
	         break
	     case "philippines":
	         console.log(name)
	         break
	     case "poland":
	         console.log(name)
	         break
	     case "pakistan":
	         console.log(name)
	         break
	     case "puerto_rico":
	         console.log(name)
	         break
	     case "palestinian_territories":
	         console.log(name)
	         break
	     case "portugal":
	         console.log(name)
	         break
	     case "paraguay":
	         console.log(name)
	         break
	     case "qatar":
	         console.log(name)
	         break
	     case "romania":
	         console.log(name)
	         break
	     case "serbia":
	         console.log(name)
	         break
	     case "russia":
	         console.log(name)
	         break
	     case "rwanda":
	         console.log(name)
	         break
	     case "saudi_arabia":
	         console.log(name)
	         break
	     case "solomon_islands":
	         console.log(name)
	         break
	     case "sudan":
	         console.log(name)
	         break
	     case "sweden":
	         console.log(name)
	         break
	     case "slovenia":
	         console.log(name)
	         break
	     case "svalbard_and_jan_mayen":
	         console.log(name)
	         break
	     case "slovakia":
	         console.log(name)
	         break
	     case "sierra_leone":
	         console.log(name)
	         break
	     case "senegal":
	         console.log(name)
	         break
	     case "somalia":
	         console.log(name)
	         break
	     case "suriname":
	         console.log(name)
	         break
	     case "south_sudan":
	         console.log(name)
	         break
	     case "el_salvador":
	         console.log(name)
	         break
	     case "syria":
	         console.log(name)
	         break
	     case "swaziland":
	         console.log(name)
	         break
	     case "chad":
	         console.log(name)
	         break
	     case "togo":
	         console.log(name)
	         break
	     case "thailand":
	         console.log(name)
	         break
	     case "tajikistan":
	         console.log(name)
	         break
	     case "timor_leste":
	         console.log(name)
	         break
	     case "turkmenistan":
	         console.log(name)
	         break
	     case "tunisia":
	         console.log(name)
	         break
	     case "turkey":
	         console.log(name)
	         break
	     case "trinidad_and_tobago":
	         console.log(name)
	         break
	     case "taiwan":
	         console.log(name)
	         break
	     case "tanzania":
	         console.log(name)
	         break
	     case "ukraine":
	         console.log(name)
	         break
	     case "uganda":
	         console.log(name)
	         break
	     case "united_states":
	         console.log(name)
	         break
	     case "uruguay":
	         console.log(name)
	         break
	     case "uzbekistan":
	         console.log(name)
	         break
	     case "venezuela":
	         console.log(name)
	         break
	     case "vietnam":
	         console.log(name)
	         break
	     case "vanuatu":
	         console.log(name)
	         break
	     case "yemen":
	         console.log(name)
	         break
	     case "south_africa":
	         console.log(name)
	         break
	     case "zambia":
	         console.log(name)
	         break
	     case "zimbabwe":
	         console.log(name)
	         break
		
		default: console.log('Progress in work!');
		
	}


}

