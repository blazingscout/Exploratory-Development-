console.log("Hello! I am your console, and I won't let you load XML :P");
var currentDesc
var currentCombat
var InvResXML
var currentArea = "start"
//AREA CALL VARIABLES\\
/*
startarea = "start"
swamp1 = "swamp1"
*/
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
			StartArea();
		} else {
			console.error(xhr.statusText);
		}
	}
};
xhr.onerror = function(e) {
	console.error(xhr.statusText);
};
xhr.send();

//Inv items parcer
var invXML = new XMLHttpRequest();
invXML.open("GET", "ItemNodes.xml", true);
invXML.onload = function(e) {
	if (invXML.readyState === 4) {
		if (invXML.status === 200) {
			if (window.DOMParser) {
				parser = new DOMParser();
				invResXML = parser.parseFromString(invXML.responseText, "text/xml");
			} else {
				invXML = new ActiveXObject("Microsoft.XMLDOM");
				invXML.async = false;
				invXML.loadXML(ItemNodes);
			}

		} else {
			console.error(invXML.statusText);
		}
	
	tester();
	}
};
invXML.onerror = function(e) {
	console.error(invXML.statusText);
};


//COMBAT XML LOADER
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
				COMBAT.loadXML(EnemyNodes);
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
invXML.send();
COMBAT.send();

function CombatEngineStart() {
	if ( hostileEncounter = true){ 

		console.log("goodness me combat has arose!");
	}

}




//COMBAT intitial variables

hostileEncounter = true;

//END XML


//Inventory BEGIN\\
var Equipped = new Object();
Equipped['Head'] = "empty"
Equipped['RightArm'] = "empty"
Equipped['LeftArm'] = "empty"
Equipped['UpperBody'] = "empty"
Equipped['LowerBody'] = "empty"
Equipped['RightLeg'] = "empty"
Equipped['LeftLeg'] = "empty"
Equipped['Back'] = "empty"
Equipped['Misc']



var inventory = new Object();
inventory['slot1'] = "empty";
inventory['slot2'] = "empty";
inventory['slot3'] = "empty";
inventory['slot4'] = "empty";
inventory['slot5'] = "empty";
inventory['slot6'] = "empty";
inventory['slot7'] = "empty";
inventory['slot8'] = "empty";
console.log(inventory['slot1']);






// main inv system
var head;
var rightA;
var leftA;
var upperB;
var lowerB;
var rightL
var leftL
var rightH;
var leftH
var misc;
var knap;

$("#HeadValue").hide();
$("#LeftArm").hide();
$("#RightArm").hide();
$("#UpperValue").hide();
$("#LowerValue").hide();
$("#RightHandValue").hide();
$("#LeftHandValue").hide();
$("#RightLegValue").hide();
$("#LeftLegValue").hide();
$("#KnapValue").hide();
$("#MiscValue").hide();
function InventoryCheck(){
	
	$("#inventoryPrinter").text(inventory['slot1']);
	$("#closer").show();
}
function ShowEquip(){
	$("#HeadValue").show();
	$("#LeftArm").show();
	$("#RightArm").show();
	$("#UpperValue").show();
	$("#LowerValue").show();
	$("#RightHandValue").show();
	$("#LeftHandValue").show();
	$("#RightLegValue").show();
	$("#LeftLegValue").show();
	$("#KnapValue").show();
	$("#MiscValue").show();
	$("#closer").show();
}

function UniCloser(){
	$("#HeadValue").hide();
	$("#LeftArm").hide();
	$("#RightArm").hide();
	$("#UpperValue").hide();
	$("#LowerValue").hide();
	$("#RightHandValue").hide();
	$("#LeftHandValue").hide();
	$("#RightLegValue").hide();
	$("#LeftLegValue").hide();
	$("#KnapValue").hide();
	$("#MiscValue").hide();
	$("#closer").hide();
	
	$("#inventoryPrinter").text("");
	
}
//LOG(S)
//log
function log(msg, clear) {
	var log = $('#log');
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

/*
function InvLog(msg, clear) {
	var InvLog = $('#Inventoryprinter');
	if (clear) {
		InvLog.innerHTML = "";
	}

	if (msg) {
		if (InvLog.innerHTML !== "") {
			invLog.innerHTML = "<br>" + InvLog.innerHTML + "<br>";
		}
		InvLog.innerHTML = msg + "\n" + InvLog.innerHTML;
	}
};
*/
//END INVENTORY SYSTEM\\




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

function tester(){
	inventory['slot1'] = invResXML.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
	
}


//Status (IE food drink, injury system!)
var health =100;
var blood =100;
var upperRightArm =100;
var lowerRightArm =100;
var upperLeftArm =100;
var lowerLeftArm =100;
var upperChest =100;
var lowerChest =100;
var upperRightLeg=100;
var lowerRightLeg =100;
var upperLeftLeg =100;
var lowerLeftLeg =100;
var hands =100;
var horns =100;

//Surroundings Checks
function SurroundCheck(){
	var checkScore = Skills[3];
	console.log(Skills[3]);
	if(checkScore >= 5 && checkScore <=7){
		if(currentArea == "start" ){
			var tmp = currentDesc.getElementsByTagName("Nsurroundings")[0].childNodes[0].nodeValue
			log(tmp, "");
		}else{}
	}else{}
}


//END SETUP\\


//starter
function startadv() {
	var start = /*prompt("Are you ready for an adventure through the planar universe?! (y/n)")*/"y";
	if (start == "y") {
		StartArea();
		log("Have fun!");
	} else {
		startadv();
	}
}

		//BEGINS THE CHOICE ENGINE\\
var wheelLands = Math.floor((Math.random() * 1000) + 1);
console.log(wheelLands);
		//ROOMS
//beginArea
function StartArea(){
	log(currentDesc.getElementsByTagName("StartOpDesc")[0].childNodes[0].nodeValue, "");
	var empty = 666;
}		

//swamp
function SwampA() {
	if(wheelLands >= 1 && wheelLands <= 1000){
		var completionist = 0;
	}		
}
//document.getElementById("invetoryPrinter").innerHTML



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




var testsub = 0;

if(testsub == 0){
	testsub = 2;
}

console.log(testsub);








//COMBAT MODULE START!\\
var hit
var currentCombat;
var enemytype = new Map();
var armourN = 
//ARMOUR\\
//Lamellar
var HalfLamellar = 7
var FullLamellar = 10




function damage(){
	if(hit == true){
		hitDmg = EnemyWpn + EnemyStr - armourN;
		var hitLocation = Math.floor((Math.random() * 1000) + 1);
	}
}

//document.getElementById("myImage").src = "landscape.jpg";


//COMBAT MODULE END!\\



/* 
  ♫▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬♫ 
ＳＨＵＴ　ＵＰ　ＡＮＤ　ＥＮＪＯＹ　ＴＨＥ　ＮＩＧＨＴＣＯＲＥ ！ 
  ♫▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬♫
*/