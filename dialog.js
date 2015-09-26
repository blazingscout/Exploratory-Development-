console.log("Hello! I am your console, and I won't let you load XML :P");
var a = false;
var b = false;
var c = false;
var d = false;
var ca = false;
var cb = false;
var cc = false;
var cd = false;
var y;
var n;
var health = 100;

//ITEMS LIST OH LORDY


//COMBAT intitial variables

hostileEncounter = true;

//Inventory variable
var Equipped = new Array();
var Inventory = new Map();
var InvObj = {},
	invFunc = function (){}
	InvKeyString = "Inventory";
//more inventory (probably should be a map but for now its just a list of variables.)

var invXML = new XMLHttpRequest();
invXML.open("GET", "EnemyNodes.xml", true);
invXML.onload = function (e) {
	if (invXML.readyState === 4) {
  		if (invXML.status === 200) {
			if (window.DOMParser){
				parser=new DOMParser();
				currentCombat=parser.parseFromString(invXML.responseText,"text/xml");
			}else{
				invXML=new ActiveXObject("Microsoft.XMLDOM");
				invXML.async=false;
				invXML.loadXML(RoomNodes);
			}

    }else{
    	console.error(invXML.statusText);
  		}
  	}
}
invXML.onerror = function (e) {
	console.error(invXML.statusText);
}
invXML.send();

var head;
var shoulders;
var upperB;
var lowerB;
var legs;
var hands;
var misc;
var knap;

var HDis = document.getElementById("HeadValue");
var SDis = document.getElementById("ShoulderValue");
var UDis = document.getElementById("UpperValue");
var LDis = document.getElementById("LowerValue");
var LeDis = document.getElementById("HandValue");
var HaDis = document.getElementById("LegValue");
var MDis = document.getElementById("KnapValue");
var KDis = document.getElementById("MiscValue");

//skills
var Skills = new Array(5,5,5,5,5,5);

var strength = Skills[0];
var endurance = Skills[1];
var charisma = Skills[2];
var intellegence = Skills[3];
var wisdom = Skills[4];
var dexterity = Skills[5];

//chain runs
var firstChainRun = false;
var secondChainRun = false;
var thirdChainRun = false;
//other
var dci = document.getElementById("datbutton");
var nami = document.getElementById("mainbutton");
var kami = document.getElementById("EquipDongle");
var Tsugami = document.getElementById("closer");
var Norgami = document.getElementById("HostileDongle");

Tsugami.style.display = "none";
kami.style.display = "none"
dci.style.display = "none";
nami.style.display = "none";
Norgami.style.display = "none";

var buttA = document.getElementById("buttA");
var buttB = document.getElementById("buttB");
var buttC = document.getElementById("buttC");
var buttD = document.getElementById("buttD");
var kami = document.getElementById("invButt");


var goblinStatus = true;
var returner = false;
var currentDesc;
var theta = false;

var StartArea = false;



var Swp1 = false;
var swordget = false;

//chrome --allow-file-access-from-files

//XML Parser
//var xhr = "C:/Users/Student/Documents/AptanaStudio3Workspace/TheFirstLegend/theBombRange/RoomNodes.xml";
var xhr = new XMLHttpRequest();
xhr.open("GET", "RoomNodes.xml", true);
xhr.onload = function () {

	if (xhr.readyState === 4) {
  		if (xhr.status === 200) {
			if (window.DOMParser){
				parser=new DOMParser();
				currentDesc=parser.parseFromString(xhr.responseText,"text/xml");
			}else{
				xhr=new ActiveXObject("Microsoft.XMLDOM");
				xhr.async=false;
				xhr.loadXML(RoomNodes);
			}
			
			startadv();

    }else{
    	console.error(xhr.statusText);
  		}
  	}
}
xhr.onerror = function (e) {
	console.error(xhr.statusText);
}
xhr.send();



//log
function log(msg,clear){
	var p = document.getElementById('log')
	if(clear){
		p.innerHTML = "";
	}

	if(msg){
		if (p.innerHTML !== ""){
			p.innerHTML = "<br>" + p.innerHTML +"<br>";
		}
		p.innerHTML = msg + "\n" + p.innerHTML;
	}
}
//starter
function startadv(){
   	var start = /*prompt("Are you ready for an adventure through the planar universe?! (y/n)")*/ "y";
   	if(start == "y"){
   		log("Have fun!");
   		firstChain();
   	}else{
   		startadv();
   	}
}
//skill display
document.getElementById("health").innerHTML = health;

document.getElementById("str").innerHTML = strength;
document.getElementById("end").innerHTML = endurance;
document.getElementById("cha").innerHTML = charisma;
document.getElementById("int").innerHTML = intellegence;
document.getElementById("wis").innerHTML = wisdom;
document.getElementById("dex").innerHTML = dexterity;
//chain runs
function firstChain(evt){
	
	document.getElementById("a").innerHTML = currentDesc.getElementsByTagName("startA")[0].childNodes[0].nodeValue + "<br>";
	document.getElementById("b").innerHTML = currentDesc.getElementsByTagName("startA")[1].childNodes[0].nodeValue + "<br>";
	document.getElementById("c").innerHTML = currentDesc.getElementsByTagName("startA")[2].childNodes[0].nodeValue + "<br>";
	document.getElementById("d").innerHTML = currentDesc.getElementsByTagName("startA")[3].childNodes[0].nodeValue + "<br>";
	document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("StartOpDesc")[0].childNodes[0].nodeValue;
	firstChainRun = true;		
}
//inventory functions
function InventoryCheck(){
	Tsugami.style.display="";
	document.getElementById("inventory").innerHTML = Inventory.get(InvKeyString); 	  	


}
function EquipmentCheck(){
	Norgami.style.display="";
	

}



function closeFunction(){
	Tsugami.style.display="none";
	document.getElementById("inventory").innerHTML="";
}

//changers
function changeForA(){
	if (firstChainRun == true && a == false){
		log("You have no idea where Koth could be, so you do nothing!" + "<br>");
		//log("", true);
		a = true;

	}
	if(swordget == false && Swp1 == true){
 		log("", true);
		buttA.style.display ="none";
		buttB.style.display ="none";
		buttC.style.display ="none";
		buttD.style.display ="none";
		nami.style.display ="";
		document.getElementById("a").innerHTML = "";
		document.getElementById("b").innerHTML = "";
		document.getElementById("c").innerHTML = "";
		document.getElementById("d").innerHTML = "";
		document.getElementById("log").innerHTML = ""
		document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("swampOneAA")[0].childNodes[0].nodeValue;
		swordget = true;
		console.log(endurance);

	}		
}
function changeForB(){
	if (firstChainRun == true && b == false){
		log("", true);
		document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("startAA")[1].childNodes[0].nodeValue;
		dci.style.display = "";
		b = true;
		buttA.style.display ="none";
		buttB.style.display ="none";
		buttC.style.display ="none";
		buttD.style.display ="none";
		document.getElementById("a").innerHTML = "";
		document.getElementById("b").innerHTML = "";
		document.getElementById("c").innerHTML = "";
		document.getElementById("d").innerHTML = "";

	}
	
};
function changeForC(){
	if (firstChainRun == true && c == false){
		log(startarea.answerSetStart[1] + "<br>", true);
		dci.style.display ="";
		c = true;
		buttA.style.display ="none";
		buttB.style.display ="none";
		buttC.style.display ="none";
		buttD.style.display ="none";
	}
}	
function changeForD(){
	if (firstChainRun == true && d == false){
		//log(startarea.answerSetStart[2] + "<br>", true);
		dci.style.display = "";
		buttA.style.display ="none";
		buttB.style.display ="none";
		buttC.style.display ="none";
		buttD.style.display ="none";
		d = true;
	}
}
//this is useless after getting to the second chain!
function continueBASE () {
	if(a == true){
		a = false;
	}
	if(b == true){
		Swamp1();
		b = false;
	}
	if(c == true){
		secondChain();
		c = false;
	}
	if(d == true){
		secondChain();
		d = false;
	}
}
function continuer(){
	if(a == true){
		continuerChain();
		a = false;
	}
	if(b == true){
		continuerChain();
		b = false
	}
	if(c == true){
		continuerChain();
		c = false;
	}
	if(d == true){
		continuerChain();
		d = false;
	}
	if(Swp1 == true && swordget == true){
		Swamp1();
	}
}
function continuerChain(){
	if (Swamp1 = true){
		if(a = true){
			buttA.style.display ="none";
			buttB.style.display ="none";
			buttC.style.display ="none";
			buttD.style.display ="none";
		}
	}
}
function Swamp1(){
	Swp1 = true;
	firstChainRun = false;
	document.getElementById("a").innerHTML = currentDesc.getElementsByTagName("swampOneA")[0].childNodes[0].nodeValue + "<br>";
	document.getElementById("b").innerHTML = currentDesc.getElementsByTagName("swampOneA")[1].childNodes[0].nodeValue + "<br>";
	document.getElementById("c").innerHTML = currentDesc.getElementsByTagName("swampOneA")[2].childNodes[0].nodeValue + "<br>";
	document.getElementById("d").innerHTML = currentDesc.getElementsByTagName("swampOneA")[3].childNodes[0].nodeValue + "<br>"; 
	document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("swampOneOpDesc")[0].childNodes[0].nodeValue + "<br>";
	endurance = endurance +1;
	document.getElementById("end").innerHTML = endurance;
	dci.style.display ="none";

	buttA.style.display ="";
	buttB.style.display ="";
	buttC.style.display ="";
	buttD.style.display ="";
	function dosomething(){
		if(swordget == true){
			document.getElementById("a").innerHTML = currentDesc.getElementsByTagName("swampOneA")[1].childNodes[0].nodeValue + "<br>";
			document.getElementById("b").innerHTML = currentDesc.getElementsByTagName("swampOneA")[2].childNodes[0].nodeValue + "<br>";
			document.getElementById("c").innerHTML = currentDesc.getElementsByTagName("swampOneA")[3].childNodes[0].nodeValue + "<br>"; 
			document.getElementById("d").innerHTML = "" ;
			document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("swampOneOpDescS")[0].childNodes[0].nodeValue + "<br>";
			buttD.style.display ="none";
			nami.style.display ="none";
			Inventory.set(InvKeyString, "Runed Bastard-Sword");
			intellegence = intellegence -1;
			document.getElementById("int").innerHTML = intellegence;
		}	
	}
	dosomething();

}



//COMBAT MODULE START!\\

var currentCombat
var enemytype = new Map();
var chipitychip;

var COMBAT = new XMLHttpRequest();
COMBAT.open("GET", "EnemyNodes.xml", true);
COMBAT.onload = function (e) {

	if (COMBAT.readyState === 4) {
  		if (COMBAT.status === 200) {
			if (window.DOMParser){
				parser=new DOMParser();
				currentCombat=parser.parseFromString(COMBAT.responseText,"text/xml");
			}else{
				COMBAT=new ActiveXObject("Microsoft.XMLDOM");
				COMBAT.async=false;
				COMBAT.loadXML(RoomNodes);
			}
			CombatEngineStart();
			// currentDesc = xhr.responseText;
			// theta = xhr.responseXML;
      	//console.log(currentDesc);
    }else{
    	console.error(COMBAT.statusText);
  		}
  	}
}
COMBAT.onerror = function (e) {
	console.error(COMBAT.statusText);
}
COMBAT.send();


function CombatEngineStart(){
	if (hostileEncounter = true){

		console.log("goodness me combat has arose!")
	}

}
//COMBAT MODULE END!\\
