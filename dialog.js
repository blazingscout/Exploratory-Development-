console.log("Hello! I am your console, and I won't let you load XML :P");

var health = 100;

//COMBAT intitial variables

hostileEncounter = true;


//Inventory BEGIN\\
var Equipped = new Array();
var Inventory = new Map();
var InvObj = {},
    invFunc = function() {
};
InvKeyString = "Inventory";


//Inv items parcer
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


// main inv system
var head;
var shoulders;
var upperB;
var lowerB;
var legs;
var hands;
var misc;
var knap;

$("#HeadValue").hide();
$("#ShoulderValue").hide();
$("#UpperValue").hide();
$("#LowerValue").hide();
$("#HandValue").hide();
$("#LegValue").hide();
$("#KnapValue").hide();
$("#MiscValue").hide();

function ShowEquip(){
	$("#HeadValue").show();
	$("#ShoulderValue").show();
	$("#UpperValue").show();
	$("#LowerValue").show();
	$("#HandValue").show();
	$("#LegValue").show();
	$("#KnapValue").show();
	$("#MiscValue").show();
	$("#closer").show();
}

function UniCloser(){
	$("#HeadValue").hide();
	$("#ShoulderValue").hide();
	$("#UpperValue").hide();
	$("#LowerValue").hide();
	$("#HandValue").hide();
	$("#LegValue").hide();
	$("#KnapValue").hide();
	$("#MiscValue").hide();
	$("#closer").hide();
}
//END INVENTORY SYSTEM\\


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

$("#str").text(strength);
$("#end").text(endurance);
$("#cha").text(charisma);
$("#int").text(intellegence);
$("#wis").text(wisdom);
$("#dex").text(dexterity);




//Buttons
$("#continueBtn").hide();
$("#mainContinue").hide();
$("#eauipbtn").hide();
$("#closer").hide();
$("#hostileDongle").hide();
//Choice Buttons
$("#btnA").show();
$("#btnB").show();
$("#btnC").show();
$("#btnD").show();



//XML Parser
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
//END SETUP\\


//starter
function startadv() {
	var start = /*prompt("Are you ready for an adventure through the planar universe?! (y/n)")*/"y";
	if (start == "y") {
		log("Have fun!");
	} else {
		startadv();
	}
}

		//BEGINS THE CHOICE ENGINE\\
var wheelLands = Math.floor((Math.random() * 100) + 1);
console.log(wheelLands);
		//ROOMS
//swamp
function swampA() {
	var completionist = 0;
}




/*function changeForD() {
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
*/


function continueBASE() {

}


function continuer() {
}


function continuerChain() {

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
	if ( hostileEncounter = true){ 

		console.log("goodness me combat has arose!");
	}

}

//COMBAT MODULE END!\\





/* 
  ♫▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬♫ 
ＳＨＵＴ　ＵＰ　ＡＮＤ　ＥＮＪＯＹ　ＴＨＥ　ＮＩＧＨＴＣＯＲＥ ！ 
  ♫▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬♫
*/