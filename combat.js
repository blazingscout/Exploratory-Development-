console.log('tbc');

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



var Skills = getCookie("skills");
console.log(Skills[0]);
var strength = Skills[0];
var endurance = Skills[1];
var charisma = Skills[2];
var intellegence = Skills[3];
var wisdom = Skills[4];
var dexterity = Skills[5];


function DamageIt() {
	var health = getCookie("health");
	console.log(health);
	var heal = parseInt(getCookie("health"));
	var heck = heal - 1;
	alert('your health' + " " + heck);
	setCookie("health", heck, 1)
	
}




//COMBAT XML LOADER\\
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
/*
//type
Slashing
Pierceing
Blugening
Fire
Poison
Frost
Lightning
Dark
Holy

//amp
Force
Finess

*/
//Weapon Catagoery
//
var sAmp = strength;
var fAmp = dexterity;

var type = null;
//damage
var random = Math.floor(Math.random() * ((10-1)+1) + 1);
//Math.floor(Math.random() * 9 + 1);


var bDamageS = random;
console.log(+bDamageS + +sAmp);
var Immune = 0;
var rDamage =  + sAmp / 2;
var Critical =  + sAmp * 2;




var head;
var arms;
var chest;
var upperbody;
var lowerbody;
var legs;
var feet;
var gloves;
var misc;
var knap;


var wheelLands = Math.floor((Math.random() * 1000) + 1);

