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

//COMBAT intitial variables

hostileEncounter = true;

//Inventory variable
var Equipped = new Array();
var Inventory = new Map();
var InvObj = {},
    invFunc = function() {
};
InvKeyString = "Inventory";
//more inventory (probably should be a map but for now its just a list of variables.)

var invXML = new XMLHttpRequest();
invXML.open("GET", "EnemyNodes.xml", true);
invXML.onload = function(e) {
	if (invXML.readyState === 4) {
		if (invXML.status === 200) {
			if (window.DOMParser) {
				parser = new DOMParser();
				currentCombat = parser.parseFromString(invXML.responseText, "text/xml");
			} else {
				invXML = new ActiveXObject("Microsoft.XMLDOM");
				invXML.async = false;
				invXML.loadXML(RoomNodes);
			}

		} else {
			console.error(invXML.statusText);
		}
	}
};
invXML.onerror = function(e) {
	console.error(invXML.statusText);
};
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
//Health and conditions (IE food drink, injury system!)
var health = 100;

//skills
var Skills = new Array(5, 5, 5, 5, 5, 5);

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
//var dci = document.getElementById("datbutton");
//var nami = document.getElementById("mainbutton");
//var kami = document.getElementById("equipbtn");
$("#datmutton").hide();
$("#mainbutton").hide();
$("#eauipbtn").hide();
$("#closer").hide();
$("#hostileDongle").hide();
//var Norgami = document.getElementById("HostileDongle");

//kami.style.display = "none";
//dci.style.display = "none";
//nami.style.display = "none";
//Norgami.style.display = "none";

var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");
var kami = document.getElementById("invbtn");

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
xhr.onload = function() {

	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			if (window.DOMParser) {
				parser = new DOMParser();
				currentDesc = parser.parseFromString(xhr.responseText, "text/xml");
			} else {
				xhr = new ActiveXObject("Microsoft.XMLDOM");
				xhr.async = false;
				xhr.loadXML(RoomNodes);
			}

			startadv();

		} else {
			console.error(xhr.statusText);
		}
	}
};
xhr.onerror = function(e) {
	console.error(xhr.statusText);
};
xhr.send();

//log
function log(msg, clear) {
	var log = document.getElementById('log');
	if (clear) {
		log.innerHTML = "";
	}

	if (msg) {
		if (log.innerHTML !== "") {
			log.innerHTML = "<br>" + log.innerHTML + "<br>";
		}
		log.innerHTML = msg + "\n" + log.innerHTML;
	}
};

//starter
function startadv() {
	var start = /*prompt("Are you ready for an adventure through the planar universe?! (y/n)")*/"y";
	if (start == "y") {
		log("Have fun!");
		firstChain();
	} else {
		startadv();
	}
}

//skill display
//document.getElementById("health").innerHTML = health;

$("#str").text(strength);
$("#end").text(endurance);
$("#cha").text(charisma);
$("#int").text(intellegence);
$("#wis").text(wisdom);
$("#dex").text(dexterity);
//document.getElementById("end").innerHTML = endurance;
//document.getElementById("cha").innerHTML = charisma;
//document.getElementById("int").innerHTML = intellegence;
//document.getElementById("wis").innerHTML = wisdom;
//document.getElementById("dex").innerHTML = dexterity;


//chain runs
function firstChain(evt) {

	document.getElementById("choiceA").innerHTML = currentDesc.getElementsByTagName("startA")[0].childNodes[0].nodeValue + "<br>";
	document.getElementById("choiceB").innerHTML = currentDesc.getElementsByTagName("startA")[1].childNodes[0].nodeValue + "<br>";
	document.getElementById("choiceC").innerHTML = currentDesc.getElementsByTagName("startA")[2].childNodes[0].nodeValue + "<br>";
	document.getElementById("choiceD").innerHTML = currentDesc.getElementsByTagName("startA")[3].childNodes[0].nodeValue + "<br>";
	document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("StartOpDesc")[0].childNodes[0].nodeValue;
	firstChainRun = true;
}

//inventory functions
function InventoryCheck() {
	Tsugami.style.display = "";
	document.getElementById("inventory").innerHTML = Inventory.get(InvKeyString);

}

function EquipmentCheck() {
	Norgami.style.display = "";

}

function closeFunction() {
	Tsugami.style.display = "none";
	document.getElementById("inventory").innerHTML = "";
}

//changers
function changeForA() {
	if (firstChainRun == true && a == false) {
		log("You have no idea where Koth could be, so you do nothing!" + "<br>");
		//log("", true);
		a = true;

	}
	if (swordget == false && Swp1 == true) {
		log("", true);
		btnA.style.display = "none";
		btnB.style.display = "none";
		btnC.style.display = "none";
		btnD.style.display = "none";
		nami.style.display = "";
		document.getElementById("choiceA").innerHTML = "";
		document.getElementById("choiceB").innerHTML = "";
		document.getElementById("choiceC").innerHTML = "";
		document.getElementById("choiceD").innerHTML = "";
		document.getElementById("log").innerHTML = "";
		document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("swampOneAA")[0].childNodes[0].nodeValue;
		swordget = true;
		console.log(endurance);

	}
}

function changeForB() {
	if (firstChainRun == true && b == false) {
		log("", true);
		document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("startAA")[1].childNodes[0].nodeValue;
		dci.style.display = "";
		b = true;
		btnA.style.display = "none";
		btnB.style.display = "none";
		btnC.style.display = "none";
		btnD.style.display = "none";
		document.getElementById("choiceA").innerHTML = "";
		document.getElementById("choiceB").innerHTML = "";
		document.getElementById("choiceC").innerHTML = "";
		document.getElementById("choiceD").innerHTML = "";

	}

};
function changeForC() {
	if (firstChainRun == true && c == false) {
		log(startarea.answerSetStart[1] + "<br>", true);
		dci.style.display = "";
		c = true;
		btnA.style.display = "none";
		btnB.style.display = "none";
		btnC.style.display = "none";
		btnD.style.display = "none";
	}
}

function changeForD() {
	if (firstChainRun == true && d == false) {
		//log(startarea.answerSetStart[2] + "<br>", true);
		dci.style.display = "";
		btnA.style.display = "none";
		btnB.style.display = "none";
		btnC.style.display = "none";
		btnD.style.display = "none";
		d = true;
	}
}

//this is useless after getting to the second chain!
function continueBASE() {
	if (a == true) {
		a = false;
	}
	if (b == true) {
		Swamp1();
		b = false;
	}
	if (c == true) {
		secondChain();
		c = false;
	}
	if (d == true) {
		secondChain();
		d = false;
	}
}

function continuer() {
	if (a == true) {
		continuerChain();
		a = false;
	}
	if (b == true) {
		continuerChain();
		b = false;
	}
	if (c == true) {
		continuerChain();
		c = false;
	}
	if (d == true) {
		continuerChain();
		d = false;
	}
	if (Swp1 == true && swordget == true) {
		Swamp1();
	}
}

function continuerChain() {
	if ( Swamp1 = true) {
		if ( a = true) {
			btnA.style.display = "none";
			btnB.style.display = "none";
			btnC.style.display = "none";
			btnD.style.display = "none";
		}
	}
}

function Swamp1() {
	Swp1 = true;
	firstChainRun = false;
	$("#choiceA");
	document.getElementById("choiceA").innerHTML = currentDesc.getElementsByTagName("swampOneA")[0].childNodes[0].nodeValue + "<br>";
	document.getElementById("choiceB").innerHTML = currentDesc.getElementsByTagName("swampOneA")[1].childNodes[0].nodeValue + "<br>";
	document.getElementById("choiceC").innerHTML = currentDesc.getElementsByTagName("swampOneA")[2].childNodes[0].nodeValue + "<br>";
	document.getElementById("choiceD").innerHTML = currentDesc.getElementsByTagName("swampOneA")[3].childNodes[0].nodeValue + "<br>";
	document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("swampOneOpDesc")[0].childNodes[0].nodeValue + "<br>";
	endurance = endurance + 1;
	document.getElementById("end").innerHTML = endurance;
	dci.style.display = "none";

	btnA.style.display = "";
	btnC.style.display = "";
	btnB.style.display = "";
	btnD.style.display = "";
	function dosomething() {
		if (swordget == true) {
			document.getElementById("choiceA").innerHTML = currentDesc.getElementsByTagName("swampOneA")[1].childNodes[0].nodeValue + "<br>";
			document.getElementById("choiceB").innerHTML = currentDesc.getElementsByTagName("swampOneA")[2].childNodes[0].nodeValue + "<br>";
			document.getElementById("choiceC").innerHTML = currentDesc.getElementsByTagName("swampOneA")[3].childNodes[0].nodeValue + "<br>";
			document.getElementById("choiceD").innerHTML = "";
			document.getElementById("log").innerHTML = currentDesc.getElementsByTagName("swampOneOpDescS")[0].childNodes[0].nodeValue + "<br>";
			btnD.style.display = "none";
			nami.style.display = "none";
			Inventory.set(InvKeyString, "Runed Bastard-Sword");
			intellegence = intellegence - 1;
			document.getElementById("int").innerHTML = intellegence;
		}
	}

	dosomething();

}

//COMBAT MODULE START!\\

var currentCombat;
var enemytype = new Map();
var chipitychip;

var COMBAT = new XMLHttpRequest();
COMBAT.open("GET", "EnemyNodes.xml", true);
COMBAT.onload = function(e) {

	if (COMBAT.readyState === 4) {
		if (COMBAT.status === 200) {
			if (window.DOMParser) {
				parser = new DOMParser();
				currentCombat = parser.parseFromString(COMBAT.responseText, "text/xml");
			} else {
				COMBAT = new ActiveXObject("Microsoft.XMLDOM");
				COMBAT.async = false;
				COMBAT.loadXML(RoomNodes);
			}
			CombatEngineStart();
			// currentDesc = xhr.responseText;
			// theta = xhr.responseXML;
			//console.log(currentDesc);
		} else {
			console.error(COMBAT.statusText);
		}
	}
};

COMBAT.onerror = function(e) {
	console.error(COMBAT.statusText);
};

COMBAT.send();

function CombatEngineStart() {
	if ( hostileEncounter = true) {

		console.log("goodness me combat has arose!");
	}

}

//COMBAT MODULE END!\\
