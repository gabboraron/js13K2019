/*"use strict"*/
var objs = [ 
{ "name":"Luna 2" , "nationality":"Soviet" , "year":"1959"}, 
{ "name":"Luna 5" , "nationality":"Soviet" , "year":"1965"}, 
{ "name":"Luna 7" , "nationality":"Soviet" , "year":"1965"}, 
{ "name":"Luna 8" , "nationality":"Soviet" , "year":"1965"}, 
{ "name":"Luna 9" , "nationality":"Soviet" , "year":"1966"}, 
{ "name":"Luna 10" , "nationality":"Soviet" , "year":"1966"}, 
{ "name":"Luna 11" , "nationality":"Soviet" , "year":"1966"}, 
{ "name":"Luna 12" , "nationality":"Soviet" , "year":"1966"}, 
{ "name":"Luna 13" , "nationality":"Soviet" , "year":"1966"}, 
{ "name":"Luna 14" , "nationality":"Soviet" , "year":"1968"}, 
{ "name":"Luna 15" , "nationality":"Soviet" , "year":"1969"}, 
{ "name":"Luna 16 descent stage" , "nationality":"Soviet" , "year":"1970"}, 
{ "name":"Luna 17" , "nationality":"Soviet" , "year":"1970"}, 
{ "name":"Luna 18" , "nationality":"Soviet" , "year":"1971"}, 
{ "name":"Luna 19" , "nationality":"Soviet" , "year":"1972"}, 
{ "name":"Luna 20 descent stage" , "nationality":"Soviet" , "year":"1971"}, 
{ "name":"Luna 21" , "nationality":"Soviet" , "year":"1973"}, 
{ "name":"Luna 22" , "nationality":"Soviet" , "year":"1974"}, 
{ "name":"Luna 23" , "nationality":"Soviet" , "year":"1974"}, 
{ "name":"Luna 24 descent stage" , "nationality":"Soviet" , "year":"1976"}, 
{ "name":"Hiten-Hagoromo" , "nationality":"Japan" , "year":"1990"}, 
{ "name":"SELENE Rstar" , "nationality":"Japan" , "year":"2009"}, 
{ "name":"LCROSS" , "nationality":"US" , "year":"2009"}, 
{ "name":"GRAIL" , "nationality":"US" , "year":"2012"}, 
{ "name":"LADEE" , "nationality":"US" , "year":"2013"}, 
{ "name":"Chang'e 1" , "nationality":"China" , "year":"2009"}, 
{ "name":"Chang'e 3" , "nationality":"China" , "year":"2013"}, 
{ "name":"Chang'e 4" , "nationality":"China" , "year":"2019"}, 
{ "name":"Longjiang-2" , "nationality":"China" , "year":"2019"}, 
{ "name":"Beresheet" , "nationality":"Israel" , "year":"2019"}, 
{ "name":"Yutu" , "nationality":"China" , "year":"2013"}, 
{ "name":"SMART-1" , "nationality":"esa" , "year":"2006"}, 
{ "name":"Chandrayaan-1" , "nationality":"India" , "year":"2008"}, 
{ "name":"Lunokhod 1" , "nationality":"Soviet" , "year":"1970"}, 
{ "name":"Lunokhod 2" , "nationality":"Soviet" , "year":"1973"}, 
{ "name":"Lunar Orbiter 1" , "nationality":"US" , "year":"1966"}, 
{ "name":"Lunar Orbiter 2" , "nationality":"US" , "year":"1966"}, 
{ "name":"Lunar Orbiter 3" , "nationality":"US" , "year":"1966"}, 
{ "name":"Lunar Orbiter 4" , "nationality":"US" , "year":"1967"}, 
{ "name":"Lunar Orbiter 5" , "nationality":"US" , "year":"1967"}, 
{ "name":"Vostok rocket" , "nationality":"Soviet" , "year":"1959"}, 
{ "name":"Surveyor 1" , "nationality":"US" , "year":"1966"}, 
{ "name":"Surveyor 2" , "nationality":"US" , "year":"1966"}, 
{ "name":"Surveyor 3" , "nationality":"US" , "year":"1967"}, 
{ "name":"Surveyor 4" , "nationality":"US" , "year":"1967"}, 
{ "name":"Surveyor 5" , "nationality":"US" , "year":"1967"}, 
{ "name":"Surveyor 6" , "nationality":"US" , "year":"1967"}, 
{ "name":"Surveyor 7" , "nationality":"US" , "year":"1968"}, 
{ "name":"Explorer 35 (IMP-E)" , "nationality":"US" , "year":"1967"}, 
{ "name":"Apollo 10 LM-4" , "nationality":"US" , "year":"1967"}, 
{ "name":"Apollo 11 LM-5 descent stage" , "nationality":"US" , "year":"1969"}, 
{ "name":"Apollo 11 LM-5 ascent stage" , "nationality":"US" , "year":"1969"}, 
{ "name":"Apollo 12 LM-6 descent stage" , "nationality":"US" , "year":"1969"}, 
{ "name":"Apollo 12 LM-6 ascent stage" , "nationality":"US" , "year":"1969"}, 
{ "name":"Apollo 13 S-IVB" , "nationality":"US" , "year":"1970"}, 
{ "name":"Apollo 14 S-IVB" , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 14 LM-8 descent stage" , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 14 LM-8 ascent stage" , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 15 S-IVB" , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 15 LM-10 descent stage" , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 15 LM-10 ascent stage" , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 15 subsatellite" , "nationality":"US" , "year":"1971"}, 
{ "name":"A 15 Lunar Roving Vehicle " , "nationality":"US" , "year":"1971"}, 
{ "name":"Apollo 16 S-IVB" , "nationality":"US" , "year":"1972"}, 
{ "name":"Apollo 16 LM-11 descent stage" , "nationality":"US" , "year":"1972"}, 
{ "name":"Apollo 16 LM-11 ascent stage" , "nationality":"US" , "year":"1972"}, 
{ "name":"Apollo 16 subsatellite" , "nationality":"US" , "year":"1972"}, 
{ "name":"A 16 Lunar Roving Vehicle " , "nationality":"US" , "year":"1972"}, 
{ "name":"Apollo 17 S-IVB" , "nationality":"US" , "year":"1972"}, 
{ "name":"Apollo 17 LM-12 descent stage" , "nationality":"US" , "year":"1972"}, 
{ "name":"Apollo 17 LM-12 ascent stage" , "nationality":"US" , "year":"1972"}, 
{ "name":"A 17 Lunar Roving Vehicle " , "nationality":"US" , "year":"1972"}, 
{ "name":"Explorer 49" , "nationality":"US" , "year":"1973"}, 
{ "name":"Ranger 6" , "nationality":"US" , "year":"1964"}, 
{ "name":"Ranger 7" , "nationality":"US" , "year":"1964"}, 
{ "name":"Ranger 8" , "nationality":"US" , "year":"1965"}, 
{ "name":"Ranger 9" , "nationality":"US" , "year":"1965"}, 
{ "name":"Ranger 4" , "nationality":"US" , "year":"1962"} ]; 

/***/
var mem = [ 
{ "name" : "bag of human waste"}, 
{ "name" : "Apollo 12 plaque"}, 
{ "name" : "Apollo 13 plaque"}, 
{ "name" : "Apollo 14 plaque"}, 
{ "name" : "Apollo 15 plaque"}, 
{ "name" : "Apollo 16 plaque"}, 
{ "name" : "Apollo 17 plaque"}, 
{ "name" : "US flag"}, 
{ "name" : "golf ball"}, 
{ "name" : "retroreflector"}, 
{ "name" : "ALSEP"}, 
{ "name" : "EASEP"}, 
{ "name" : "footprint"}, 
{ "name" : "the Bible left by David Scott"}, 
{ "name" : "silver astronaut pin left by Alan Bean"}, 
{ "name" : "goodwill messages disc"}, 
{ "name" : "The Fallen Astronaut memorial"}]; 

//pre init
		var sEl = document.querySelector("a-scene");
    	var entity = document.createElement("A-ENTITY"); 	 // Create a <button> element
		entity.position = "-5 0.5 3";   	                 // Insert text
		entity.rotation = "90 0 0";  	    	             // Insert text
		sEl.appendChild(entity);

    	var welcomeMsgDelete = document.getElementById("ok");
    	welcomeMsgDelete.addEventListener('click', function (evt) { document.getElementById("welcomemsg").setAttribute('visible', false); });




//init
var O2 = 80;

var nOFO = 0;
var nOFM = 0;

var obj = document.getElementById("objNr");
var m = document.getElementById("memoNr");
var t = document.getElementById("thing");
var nation = document.getElementById("nation");
var year = document.getElementById("year");

var oP = [];
oP.push({x: 0, z: 0});

function iTP(p) {
	var i = 0;
	while(i<oP.length-1){
		if((oP[i].x == p.x) && (oP[i].y == p.y) && (oP[i].z == p.z)){
			return false;
		}
		++i;
	}
	return true;
}

var cam = document.getElementById('cam');
function moT(x,y,z) {
	
	y = 1;
	cam.setAttribute('position', {x,y,z});
	/**/
	if (O2>0) {
		O2 = O2 - 1;
		if (O2 == 52 ) {
			document.getElementById("O1").setAttribute("material","wireframe: true");
		}
		
		if (O2 == 26 ) {
			document.getElementById("O2").setAttribute("material","wireframe: true");
		}
		
	}
	oP.push({x: x, z: z});
	nSG();
}

 function sOI() {
 	var id = Math.floor(Math.random() * objs.length);
 	if (objs[id] != undefined) {
	 	t.setAttribute("text", "value: " + objs[id].name);
	 	nation.setAttribute("text", "value: " + objs[id].nationality);
	 	year.setAttribute("text", "value: " + objs[id].year);
	 	delete objs[id];

		with(new AudioContext)
		with(G=createGain())
		for(i in D=[,,,,,,,,16,,15,,11,,10])
		with(createOscillator())
		if(D[i])
		connect(G),
		G.connect(destination),
		start(i*.1),
		frequency.setValueAtTime(440*1.06**(13-D[i]),i*.1),
		gain.setValueAtTime(1,i*.1),
		gain.setTargetAtTime(.0001,i*.1+.08,.005),
		stop(i*.1+.09)

		nOFO = nOFO+1;
 	}

 }
 
 function sMI() {
 	var id = Math.floor(Math.random() * mem.length);
 	if (mem[id] != undefined) {
	 	t.setAttribute("text", "value: " + mem[id].name);
	 	nation.setAttribute("text", "value: ");
	 	year.setAttribute("text", "value: ");
	 	
	 	//alreadyTakenmemID.push(id);
	 	delete mem[id];

	 	with(new AudioContext)
		with(G=createGain())
		for(i in D=[,,,,,,,,14,13,12,,11])
		with(createOscillator())
		if(D[i])
		connect(G),
		G.connect(destination),
		start(i*.1),
		frequency.setValueAtTime(440*1.06**(13-D[i]),i*.1),
		gain.setValueAtTime(1,i*.1),
		gain.setTargetAtTime(.0001,i*.1+.08,.005),
		stop(i*.1+.09)

		nOFM = nOFM+1;
 	}
 }

//Generate tiles
function nSG(e) {
	if(O2>0 && objs.length>18){
		var position = {x: (oP[oP.length-1]).x, y: -1, z: (oP[oP.length-1]).z};
		gT(position);
		gG(position);
	} else {
	 	nation.setAttribute("text", "value: ");
	 	year.setAttribute("text", "value: ");
		if (O2<=0) {
			t.setAttribute("text", "value: GAME OVER \n you can't breath anymore");
		} else{
			t.setAttribute("text", "value: YOU WON \n you can go back to the Earth \n your score is: " + nOFM);
		}
	}
}

function gG(p){
	var pW = {x:p.x, y:p.y, z: p.z-1};
	var pA = {x:p.x-1, y:p.y, z: p.z};
	var pS = {x:p.x, y:p.y, z: p.z+1};
	var pD = {x:p.x+1, y:p.y, z: p.z};

	for (var i = 0; i < 4; i++) {
		var id = Math.floor(Math.random() * 100);
		if (i == 0) {	//W
			var w = Math.floor(Math.random() * 3);
			if( w == 0){//obj case
				var oEW = new document.createElement("A-ENTITY");
				oEW.position = pW;
				oEW.rotation = "90 0 0";
				oEW.id=Math.floor(Math.random() * 100);
				oEW.addEventListener('click', function (evt) { sEl.remove(document.getElementById(oEW.id)); /*nOFO = nOFO+1;*/ obj.setAttribute("text", "value: "+ nOFO); });
				oEW.innerHTML = ' 	<a-box position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sEl.appendChild(oEW);	
			} else if (w == 1){//memory case
				var mEW = new document.createElement("A-ENTITY");
				mEW.position = pW;
				mEW.rotation = "90 0 0";
				mEW.id=Math.floor(Math.random() * 100);
				mEW.addEventListener('click', function (evt) { sEl.remove(document.getElementById(mEW.id)); sMI(); /*nOFM = nOFM+1;*/ m.setAttribute("text", "value: "+ nOFM); });
				mEW.innerHTML = '       <a-entity position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" rotation="90 0 0"><a-box position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ pW.x + ' ' + pW.y + ' ' + pW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sEl.appendChild(mEW);	
			}
		}
		if (i == 1) {	//A
			var a = Math.floor(Math.random() * 3); 
			if(a == 0){//obj case
				var oEA = new document.createElement("A-ENTITY");
				oEA.position = pA;
				oEA.id=Math.floor(Math.random() * 100);
				oEA.rotation = "90 0 0";
				oEA.addEventListener('click', function (evt) { sEl.remove(document.getElementById(oEA.id)); /*nOFO = nOFO+1;*/ obj.setAttribute("text", "value: "+ nOFO);});
				oEA.innerHTML= ' 	<a-box position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sEl.appendChild(oEA);	
			} else if (a == 1){//memory case
				var mEA = new document.createElement("A-ENTITY");
				mEA.position = pA;
				mEA.rotation = "90 0 0";
				mEA.id=Math.floor(Math.random() * 100);
				mEA.addEventListener('click', function (evt) { sEl.remove(document.getElementById(mEA.id)); sMI();/*nOFM = nOFM+1;*/ m.setAttribute("text", "value: "+ nOFM); });
				mEA.innerHTML = '       <a-entity position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" rotation="90 0 0"><a-box position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ pA.x + ' ' + pA.y + ' ' + pA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sEl.appendChild(mEA);
			}
		}
		if (i == 2) {	//S
			var s = Math.floor(Math.random() * 3);
			if(s == 0){//obj case
				var oES = new document.createElement("A-ENTITY");
				oES.position = pS;
				oES.id=Math.floor(Math.random() * 100);
				oES.rotation = "90 0 0";
				oES.addEventListener('click', function (evt) { sEl.remove(document.getElementById(oES.id)); sOI(); /*nOFO = nOFO+1;*/ obj.setAttribute("text", "value: "+ nOFO);});
				oES.innerHTML= ' 	<a-box position="'+ pS.x+' '+pS.y+' '+pS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ pS.x+' '+pS.y+' '+pS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ pS.x+' '+pS.y+' '+pS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sEl.appendChild(oES);	
			} else if (s == 1){//memory case
				var mES = new document.createElement("A-ENTITY");
				mES.position = pS;
				mES.rotation = "90 0 0";
				mES.id=Math.floor(Math.random() * 100);
				mES.addEventListener('click', function (evt) { sEl.remove(document.getElementById(mES.id)); sMI(); /*nOFM = nOFM+1;*/ m.setAttribute("text", "value: "+ nOFM); });
				mES.innerHTML = '       <a-entity position="'+ pS.x + ' ' + pS.y + ' ' + pS.z +'" rotation="90 0 0"><a-box position="'+ pS.x + ' ' + pS.y + ' ' + pS.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ pS.x + ' ' + pS.y + ' ' + pS.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ pS.x + ' ' + pS.y + ' ' + pS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sEl.appendChild(mES);	
			}
		}
		if (i == 3) {	//D
			var d = Math.floor(Math.random() * 3);
			if(d == 0){//obj case
				var oED = new document.createElement("A-ENTITY");
				oED.id=Math.floor(Math.random() * 100);
				oED.position = pD;
				oED.addEventListener('click', function (evt) { sEl.remove(document.getElementById(oED.id));  sOI(); /*nOFO = nOFO+1;*/ obj.setAttribute("text", "value: "+ nOFO);});
				oED.rotation = "90 0 0";
				oED.innerHTML= ' 	<a-box position="'+ pD.x+' '+pD.y+' '+pD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ pD.x+' '+pD.y+' '+pD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ pD.x+' '+pD.y+' '+pD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sEl.appendChild(oED);
			} else if (d == 1){//memory case
				var mED = new document.createElement("A-ENTITY");
				mED.position = pD;
				mED.rotation = "90 0 0";
				mED.id=Math.floor(Math.random() * 100);
				mED.addEventListener('click', function (evt) { sEl.remove(document.getElementById(mED.id));  sMI(); /*nOFM = nOFM+1;*/ m.setAttribute("text", "value: "+ nOFM); });
				mED.innerHTML = '       <a-entity position="'+ pD.x + ' ' + pD.y + ' ' + pD.z +'" rotation="90 0 0"><a-box position="'+ pD.x + ' ' + pD.y + ' ' + pD.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ pD.x + ' ' + pD.y + ' ' + pD.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ pD.x + ' ' + pD.y + ' ' + pD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sEl.appendChild(mED);	
			}
		}
	}
}

function gT(p) {

	var pW = new document.createElement("A-PLANE");
	var poW = {x:p.x, y: p.y, z: p.z-1}
	pW.setAttribute('position', poW);
	pW.setAttribute('rotation', "-90 0 0");
	//pW.setAttribute('color', "red");
	pW.addEventListener('click', function(e){moT(poW.x, poW.y, poW.z)});
	if(iTP(poW)){
		sEl.appendChild(pW);
	}


	var pA = new document.createElement("A-PLANE");
	var poA = {x:p.x-1, y: p.y, z: p.z}
	pA.setAttribute('position', poA);
	pA.setAttribute('rotation', "-90 0 0");
	pA.addEventListener('click', function(e){moT(poA.x, poA.y, poA.z)});
	//pA.addEventListener('click', function(e){moT(-1, -1, 0)});
	if(iTP(poA)){
		sEl.appendChild(pA);
	}


	var pS = new document.createElement("A-PLANE");
	var poS = {x:p.x, y: p.y, z: p.z+1}
	pS.setAttribute('position', poS);
	pS.setAttribute('rotation', "-90 0 0");
	pS.addEventListener('click', function(e){moT(poS.x, poS.y, poS.z)});
	if(iTP(poS)){
		sEl.appendChild(pS);
	}


	var pD = new document.createElement("A-PLANE");
	var poD = {x:p.x+1, y: p.y, z: p.z}
	pD.setAttribute('position', poD);
	pD.setAttribute('rotation', "-90 0 0");
	pD.addEventListener('click', function(e){moT(poD.x, poD.y, poD.z)});
	if(iTP(poD)){
		sEl.appendChild(pD);
	}
}

nSG();
