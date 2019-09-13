/*"use strict"*/
//pre init
		var sceneEl = document.querySelector("a-scene");
    	var entity = document.createElement("A-ENTITY"); 	 // Create a <button> element
		entity.position = "-5 0.5 3";   	                 // Insert text
		entity.rotation = "90 0 0";  	    	             // Insert text
		sceneEl.appendChild(entity);
		var box = document.createElement("A-BOX");
		box.setAttribute('color', '#32a852');
		box.id = "green";
		/*entity.appendChild(box);*/
    	
    	/*var info = document.getElementById('info');
    	info.setAttribute("text", "value:LOL RULEZ");*/

    	var welcomeMsgDelete = document.getElementById("ok");
    	welcomeMsgDelete.addEventListener('click', function (evt) { document.getElementById("welcomemsg").setAttribute('visible', false); });




//init
var oxygen = 80;
var nrOfAvailableObj = objects.length;
var alreadyTakenObjectsID = [];

var nrOfFoundObjects = 0;
var nrOfFoundMemories = 0;

var obj = document.getElementById("objNr");
var memo = document.getElementById("memoNr");
var thing = document.getElementById("thing");
var nation = document.getElementById("nation");
var year = document.getElementById("year");

var currentX = 0;
var currentZ = 0;

var olderPostions = [];
olderPostions.push({x: currentX, z: currentZ});

function isThisPossiblePosition(pos) {
	var found = true;
	var idx = 0;
	while(found && (idx<olderPostions.length-1)){
		if((olderPostions[idx].x == pos.x) && (olderPostions[idx].y == pos.y) && (olderPostions[idx].z == pos.z)){
			found = false;
		}
		++idx;
	}
	return found;
}

var cam = document.getElementById('cam');
function moveTo(x,y,z) {
	console.log("going to: "+x+y+z);
	y = 1;
	cam.setAttribute('position', {x,y,z});
	/**/
	if (oxygen>0) {
		oxygen = oxygen - 1;
		if (oxygen == 52 ) {
			document.getElementById("O1").setAttribute("material","wireframe: true");
		}
		
		if (oxygen == 26 ) {
			document.getElementById("O2").setAttribute("material","wireframe: true");
		}
		console.log("Oxygen: "+oxygen);
	}
	olderPostions.push({x: x, z: z});
	nextStepGenerator();
}

function alreadyTaken(id) {
	/*var tmp = alreadyTakenObjectsID.find(function(element) {return element == id;});
	if ( tmp == undefined) {return false;}
	else {return true;}*/
	/*
	var idx = 0;
	while (idx<alreadyTakenObjectsID.length-1){
		if(alreadyTakenObjectsID[idx] == id){
			return true;
		}
	}
	return false;*/
	var idx = 0;
	while (idx<objects.length){
		if(objects[idx] == undefined){
			return true;
		}
	}
	return false;
}

 function showObjInfo() {
 	var id = Math.floor(Math.random() * objects.length);
 	/*while(!alreadyTaken(id)){
	 	id = Math.floor(Math.random() * objects.length);
 	}*/
 	if (objects[id] != undefined) {
	 	thing.setAttribute("text", "value: " + objects[id].name);
	 	nation.setAttribute("text", "value: " + objects[id].nationality);
	 	year.setAttribute("text", "value: " + objects[id].year);
	 	console.log("info: " + objects[id].name + objects[id].nationality+ objects[id].year +" id: "+id);
	 	alreadyTakenObjectsID.push(id);
	 	delete objects[id];

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

		nrOfFoundObjects = nrOfFoundObjects+1;
 	}

 }
 
 function showMemoInfo() {
 	var id = Math.floor(Math.random() * memories.length);
 	if (memories[id] != undefined) {
	 	thing.setAttribute("text", "value: " + memories[id].name);
	 	nation.setAttribute("text", "value: ");
	 	year.setAttribute("text", "value: ");
	 	console.log("memo: " + memories[id].name +" id: "+id);
	 	//alreadyTakenmemoriesID.push(id);
	 	delete memories[id];

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

		nrOfFoundMemories = nrOfFoundMemories+1;
 	}
 }

//Generate tiles
function nextStepGenerator(e) {
	if(oxygen>0 && objects.length>18){
		var position = {x: (olderPostions[olderPostions.length-1]).x, y: -1, z: (olderPostions[olderPostions.length-1]).z};
		generateWASDTile(position);
		generateGatherable(position);
	} else {
	 	nation.setAttribute("text", "value: ");
	 	year.setAttribute("text", "value: ");
		if (oxygen<=0) {
			thing.setAttribute("text", "value: GAME OVER \n you can't breath anymore");
		} else{
			thing.setAttribute("text", "value: YOU WON \n you can go back to the Earth \n your score is: " + nrOfFoundMemories);
		}
	}
}

function generateGatherable(position){
	var posW = {x:position.x, y:position.y, z: position.z-1};
	var posA = {x:position.x-1, y:position.y, z: position.z};
	var posS = {x:position.x, y:position.y, z: position.z+1};
	var posD = {x:position.x+1, y:position.y, z: position.z};
	console.log("posW"+posW.x+posW.y+posW.z);
	console.log("posA"+posA.x+posA.y+posA.z);
	console.log("posS"+posS.x+posS.y+posS.z);
	console.log("posD"+posD.x+posD.y+posD.z);

	for (var i = 0; i < 4; i++) {
		var id = Math.floor(Math.random() * 100);
		if (i == 0) {	//W
			var w = Math.floor(Math.random() * 3);
			if( w == 0){//obj case
				var objEntityW = new document.createElement("A-ENTITY");
				objEntityW.position = posW;
				objEntityW.rotation = "90 0 0";
				objEntityW.id=Math.floor(Math.random() * 100);
				objEntityW.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(objEntityW.id)); console.log("removed id: "+objEntityW.id); showObjInfo(); /*nrOfFoundObjects = nrOfFoundObjects+1;*/ obj.setAttribute("text", "value: "+ nrOfFoundObjects); });
				objEntityW.innerHTML = ' 	<a-box position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sceneEl.appendChild(objEntityW);	
				console.log("gatherable on: W");
			} else if (w == 1){//memory case
				var memoEntityW = new document.createElement("A-ENTITY");
				memoEntityW.position = posW;
				memoEntityW.rotation = "90 0 0";
				memoEntityW.id=Math.floor(Math.random() * 100);
				memoEntityW.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(memoEntityW.id)); console.log("removed id: "+memoEntityW.id); showMemoInfo(); /*nrOfFoundMemories = nrOfFoundMemories+1;*/ memo.setAttribute("text", "value: "+ nrOfFoundMemories); });
				memoEntityW.innerHTML = '       <a-entity position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" rotation="90 0 0"><a-box position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ posW.x + ' ' + posW.y + ' ' + posW.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sceneEl.appendChild(memoEntityW);	
				console.log("memo on: W");
			}
		}
		if (i == 1) {	//A
			var a = Math.floor(Math.random() * 3); 
			if(a == 0){//obj case
				var objEntityA = new document.createElement("A-ENTITY");
				objEntityA.position = posA;
				objEntityA.id=Math.floor(Math.random() * 100);
				objEntityA.rotation = "90 0 0";
				objEntityA.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(objEntityA.id)); console.log("removed id: "+objEntityA.id); showObjInfo(); /*nrOfFoundObjects = nrOfFoundObjects+1;*/ obj.setAttribute("text", "value: "+ nrOfFoundObjects);});
				objEntityA.innerHTML= ' 	<a-box position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sceneEl.appendChild(objEntityA);	
				console.log("gatherable on:  A");
			} else if (a == 1){//memory case
				var memoEntityA = new document.createElement("A-ENTITY");
				memoEntityA.position = posA;
				memoEntityA.rotation = "90 0 0";
				memoEntityA.id=Math.floor(Math.random() * 100);
				memoEntityA.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(memoEntityA.id)); console.log("removed id: "+memoEntityA.id); showMemoInfo(); /*nrOfFoundMemories = nrOfFoundMemories+1;*/ memo.setAttribute("text", "value: "+ nrOfFoundMemories); });
				memoEntityA.innerHTML = '       <a-entity position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" rotation="90 0 0"><a-box position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ posA.x + ' ' + posA.y + ' ' + posA.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sceneEl.appendChild(memoEntityA);	
				console.log("memo on: A");
			}
		}
		if (i == 2) {	//S
			var s = Math.floor(Math.random() * 3);
			if(s == 0){//obj case
				var objEntityS = new document.createElement("A-ENTITY");
				objEntityS.position = posS;
				objEntityS.id=Math.floor(Math.random() * 100);
				objEntityS.rotation = "90 0 0";
				objEntityS.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(objEntityS.id)); console.log("removed id: "+objEntityS.id); showObjInfo(); /*nrOfFoundObjects = nrOfFoundObjects+1;*/ obj.setAttribute("text", "value: "+ nrOfFoundObjects);});
				objEntityS.innerHTML= ' 	<a-box position="'+ posS.x+' '+posS.y+' '+posS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ posS.x+' '+posS.y+' '+posS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ posS.x+' '+posS.y+' '+posS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sceneEl.appendChild(objEntityS);	
				console.log("gatherable on: S");
			} else if (s == 1){//memory case
				var memoEntityS = new document.createElement("A-ENTITY");
				memoEntityS.position = posS;
				memoEntityS.rotation = "90 0 0";
				memoEntityS.id=Math.floor(Math.random() * 100);
				memoEntityS.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(memoEntityS.id)); console.log("removed id: "+memoEntityS.id); showMemoInfo(); /*nrOfFoundMemories = nrOfFoundMemories+1;*/ memo.setAttribute("text", "value: "+ nrOfFoundMemories); });
				memoEntityS.innerHTML = '       <a-entity position="'+ posS.x + ' ' + posS.y + ' ' + posS.z +'" rotation="90 0 0"><a-box position="'+ posS.x + ' ' + posS.y + ' ' + posS.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ posS.x + ' ' + posS.y + ' ' + posS.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ posS.x + ' ' + posS.y + ' ' + posS.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sceneEl.appendChild(memoEntityS);	
				console.log("memo on: S");
			}
		}
		if (i == 3) {	//D
			var d = Math.floor(Math.random() * 3);
			if(d == 0){//obj case
				var objEntityD = new document.createElement("A-ENTITY");
				objEntityD.id=Math.floor(Math.random() * 100);
				objEntityD.position = posD;
				objEntityD.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(objEntityD.id)); console.log("removed id: "+objEntityD.id); showObjInfo(); /*nrOfFoundObjects = nrOfFoundObjects+1;*/ obj.setAttribute("text", "value: "+ nrOfFoundObjects);});
				objEntityD.rotation = "90 0 0";
				objEntityD.innerHTML= ' 	<a-box position="'+ posD.x+' '+posD.y+' '+posD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+ posD.x+' '+posD.y+' '+posD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+ posD.x+' '+posD.y+' '+posD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>';
				sceneEl.appendChild(objEntityD);	
				console.log("gatherable on: D");
			} else if (d == 1){//memory case
				var memoEntityD = new document.createElement("A-ENTITY");
				memoEntityD.position = posD;
				memoEntityD.rotation = "90 0 0";
				memoEntityD.id=Math.floor(Math.random() * 100);
				memoEntityD.addEventListener('click', function (evt) { sceneEl.remove(document.getElementById(memoEntityD.id)); console.log("removed id: "+memoEntityD.id); showMemoInfo(); /*nrOfFoundMemories = nrOfFoundMemories+1;*/ memo.setAttribute("text", "value: "+ nrOfFoundMemories); });
				memoEntityD.innerHTML = '       <a-entity position="'+ posD.x + ' ' + posD.y + ' ' + posD.z +'" rotation="90 0 0"><a-box position="'+ posD.x + ' ' + posD.y + ' ' + posD.z +'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+ posD.x + ' ' + posD.y + ' ' + posD.z +'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+ posD.x + ' ' + posD.y + ' ' + posD.z +'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>';
				sceneEl.appendChild(memoEntityD);	
				console.log("memo on: D");
			}
		}
	}
}
//olderPostions.push({x:position.x, z:position.z});
function generateWASDTile(position) {

	var planeW = new document.createElement("A-PLANE");
	var positionW = {x:position.x, y: position.y, z: position.z-1}
	planeW.setAttribute('position', positionW);
	planeW.setAttribute('rotation', "-90 0 0");
	//planeW.setAttribute('color', "red");
	planeW.addEventListener('click', function(e){moveTo(positionW.x, positionW.y, positionW.z)});
	if(isThisPossiblePosition(positionW)){
		sceneEl.appendChild(planeW);
	}


	var planeA = new document.createElement("A-PLANE");
	var positionA = {x:position.x-1, y: position.y, z: position.z}
	planeA.setAttribute('position', positionA);
	planeA.setAttribute('rotation', "-90 0 0");
	planeA.addEventListener('click', function(e){moveTo(positionA.x, positionA.y, positionA.z)});
	console.log("posA: " + positionA.x + positionA.y + positionA.z);
	//planeA.addEventListener('click', function(e){moveTo(-1, -1, 0)});
	if(isThisPossiblePosition(positionA)){
		sceneEl.appendChild(planeA);
	}


	var planeS = new document.createElement("A-PLANE");
	var positionS = {x:position.x, y: position.y, z: position.z+1}
	planeS.setAttribute('position', positionS);
	planeS.setAttribute('rotation', "-90 0 0");
	planeS.addEventListener('click', function(e){moveTo(positionS.x, positionS.y, positionS.z)});
	if(isThisPossiblePosition(positionS)){
		sceneEl.appendChild(planeS);
	}


	var planeD = new document.createElement("A-PLANE");
	var positionD = {x:position.x+1, y: position.y, z: position.z}
	planeD.setAttribute('position', positionD);
	planeD.setAttribute('rotation', "-90 0 0");
	planeD.addEventListener('click', function(e){moveTo(positionD.x, positionD.y, positionD.z)});
	if(isThisPossiblePosition(positionD)){
		sceneEl.appendChild(planeD);
	}
}

nextStepGenerator();