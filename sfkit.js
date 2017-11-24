	var sfkit_cast = [
		{data:{
			alertness:0,
			appearance:1,
			arena:0,
			athletics:0,
			bkglabel:["","","","","",""],
			bkgval:[0,0,0,0,0,0],
			blindFighting:0,
			block:0,
			block_cost:"",
			block_dmg:"",
			block_mov:"",
			block_obs:"",
			block_spd:"",
			bookie:0,
			campaign:"",
			charisma:1,
			chi_permanent:0,
			chi_temporary:0,
			combos:"",
			computer:0,
			concept:"",
			cybernetics:0,
			demolitions:0,
			dexterity:1,
			disguise:0,
			division:"",
			divisionDraws:"0",
			divisionKOs:"0",
			divisionLosses:"0",
			divisionRank:"0",
			divisionWins:"0",
			drive:0,
			experience:"",
			fierce_cost:"",
			fierce_dmg:"",
			fierce_mov:"",
			fierce_obs:"",
			fierce_spd:"",
			finance:0,
			focus:0,
			forward_cost:"",
			forward_dmg:"",
			forward_mov:"",
			forward_obs:"",
			forward_spd:"",
			glory_permanent:0,
			glory_temporary:0,
			grab:0,
			grab_cost:"",
			grab_dmg:"",
			grab_mov:"",
			grab_obs:"",
			grab_spd:"",
			health_permanent:10,
			health_temporary:0,
			honor_permanent:0,
			honor_temporary:0,
			insight:0,
			instruction:0,
			intelligence:1,
			interrogation:0,
			intimidation:0,
			investigation:0,
			jab_cost:"",
			jab_dmg:"",
			jab_mov:"",
			jab_obs:"",
			jab_spd:"",
			kick:0,
			knwllabel:[],
			knwlval:[],
			language:0,
			law:0,
			leadership:0,
			manage:0,
			manipulation:1,
			medicine:0,
			move_cost:"",
			move_dmg:"",
			move_mov:"",
			move_obs:"",
			move_spd:"",
			mysteries:0,
			name:"",
			notes:"",
			perception:1,
			player:"",
			publicist:0,
			punch:0,
			repair:0,
			roundhouse_cost:"",
			roundhouse_dmg:"",
			roundhouse_mov:"",
			roundhouse_obs:"",
			roundhouse_spd:"",
			school:"",
			science:0,
			search:0,
			security:0,
			short_cost:"",
			short_dmg:"",
			short_mov:"",
			short_obs:"",
			short_spd:"",
			signature:"",
			skllabel:[],
			sklval:[],
			specman_cost:["","","","","","","","","",""],
			specman_dmg:["","","","","","","","","",""],
			specman_mov:["","","","","","","","","",""],
			specman_name:["","","","","","","","","",""],
			specman_obs:["","","","","","","","","",""],
			specman_spd:["","","","","","","","","",""],
			stable:"",
			stamina:1,
			stealth:0 ,
			streetwise:0,
			strength:1,
			strong_cost:"",
			strong_dmg:"",
			strong_mov:"",
			strong_obs:"",
			strong_spd:"",
			style:"",
			styleLore:0,
			subterfuge:0,
			survival:0,
			tallabel:["",""],
			talval:[0,0],
			team:"",
			techlabel:[],
			techval:[],
			willpower_permanent:0,
			willpower_temporary:0,
			wits:1
		}
	}];

	var sfkit_draw = {
	dotsOf8:["○○○○○ ○○○","●○○○○ ○○○","●●○○○ ○○○","●●●○○ ○○○","●●●●○ ○○○","●●●●● ○○○","●●●●● ●○○","●●●●● ●●○","●●●●● ●●●"],
	dotsOf10:["○○○○○ ○○○○○","●○○○○ ○○○○○","●●○○○ ○○○○○","●●●○○ ○○○○○","●●●●○ ○○○○○","●●●●● ○○○○○","●●●●● ●○○○○","●●●●● ●●○○○","●●●●● ●●●○○","●●●●● ●●●●○","●●●●● ●●●●●"],
	boxesOf10:["□□□□□ □□□□□","■□□□□ □□□□□","■■□□□ □□□□□","■■■□□ □□□□□","■■■■□ □□□□□","■■■■■ □□□□□","■■■■■ ■□□□□","■■■■■ ■■□□□","■■■■■ ■■■□□","■■■■■ ■■■■□","■■■■■ ■■■■■"]
	};

	var sfkit_specManLines = 10;
	
	function sfkit_labelFromTag(tag){
		var theLabel=tag;
		for (var i = 1; i < theLabel.length; i++) {
			if (theLabel.charAt(i)!=theLabel.charAt(i).toLowerCase()){
				theLabel=theLabel.slice(0,i-1)+" "+theLabel.charAt(i).toUpperCase()+theLabel.slice(i+1);
			};
			if (theLabel.charAt(i)==="_") {
				theLabel=theLabel.slice(0,i-1);
				break;
			};
		};
		theLabel=theLabel.charAt(0).toUpperCase()+theLabel.slice(1);
		return theLabel;
	};

	function sfkit_updateFixed8(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			var tempVal=window.prompt("Update "+tag+" to:",sfkit_cast[who].data[tag]);
			if (tempVal===undefined||tempVal<0||tempVal>8) {
				tempVal=sfkit_cast[who].data[tag];
			};
			sfkit_cast[who].data[tag]=tempVal;
			document.getElementById(tag+ident).innerHTML=sfkit_draw.dotsOf8[Math.round(tempVal)];
		};
	};

	function sfkit_updateCustom8(tag,number,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag+"label"]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			var tempVal=window.prompt("Update "+sfkit_cast[who].data[tag+"label"][number]+" to:",sfkit_cast[who].data[tag+"val"][number]);
			if (tempVal===undefined||tempVal<0||tempVal>8) {
				tempVal=sfkit_cast[who].data[tag+"val"][number];
			};
			sfkit_cast[who].data[tag+"val"][number]=tempVal;
			document.getElementById(tag+"val"+number+ident).innerHTML=sfkit_draw.dotsOf8[Math.round(tempVal)];
		};
	};

	function sfkit_updateCustomLabel(tag,number,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag+"label"]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			sfkit_cast[who].data[tag+"label"][number]=document.getElementById(tag+"label"+number+ident).value;
		};
	};

	function sfkit_updateField(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			sfkit_cast[who].data[tag]=document.getElementById(tag+ident).value;
		};
	};

	function sfkit_updateManeuver(tag,number,property,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag+"_"+property]===undefined){
			alert("tag "+tag+"_"+property+" doesn't exist yet...");
		} else {
			sfkit_cast[who].data[tag+"_"+property][number]=document.getElementById(tag+number+"_"+property+ident).value;
		};
	};

	function sfkit_updateTenDots(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			var tempVal=window.prompt("Update "+tag+" to:",sfkit_cast[who].data[tag]);
			if (tempVal===undefined||tempVal<0||tempVal>10) {
				tempVal=sfkit_cast[who].data[tag];
			};
			sfkit_cast[who].data[tag]=tempVal;
			document.getElementById(tag+ident).innerHTML=sfkit_draw.dotsOf10[Math.round(tempVal)];
		};
	};

	function sfkit_updateTenBoxes(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			var tempVal=window.prompt("Update "+tag+" to:",sfkit_cast[who].data[tag]);
			if (tempVal===undefined||tempVal<0||tempVal>10) {
				tempVal=sfkit_cast[who].data[tag];
			};
			sfkit_cast[who].data[tag]=tempVal;
			document.getElementById(tag+ident).innerHTML=sfkit_draw.boxesOf10[Math.round(tempVal)];
		};
	};

	function sfkit_updateTwentyDots(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			var tempVal=window.prompt("Update "+tag+" to:",sfkit_cast[who].data[tag]);
			if (tempVal===undefined||tempVal<0||tempVal>20) {
				tempVal=sfkit_cast[who].data[tag];
			};
			sfkit_cast[who].data[tag]=tempVal;
			document.getElementById(tag+"Upper"+ident).innerHTML=sfkit_draw.dotsOf10[Math.min(10,tempVal)];
			document.getElementById(tag+"Lower"+ident).innerHTML=sfkit_draw.dotsOf10[Math.max(0,(tempVal-10))];;
		};
	};

	function sfkit_updateTwentyBoxes(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data[tag]===undefined){
			alert("tag "+tag+" doesn't exist yet...");
		} else {
			var tempVal=window.prompt("Update "+tag+" to:",sfkit_cast[who].data[tag]);
			if (tempVal===undefined||tempVal<0||tempVal>20) {
				tempVal=sfkit_cast[who].data[tag];
			};
			sfkit_cast[who].data[tag]=tempVal;
			document.getElementById(tag+"Upper"+ident).innerHTML=sfkit_draw.boxesOf10[Math.min(10,tempVal)];
			document.getElementById(tag+"Lower"+ident).innerHTML=sfkit_draw.boxesOf10[Math.max(0,(tempVal-10))];
		};
	};

	function sfkit_loadJSON(who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (window.File && window.FileReader && window.FileList && window.Blob) {} else {
			alert('The File APIs are not fully supported in this browser.');
			return;
		}
		var uler=document.getElementById("jsonuler");
		uler.setAttribute("accept","application/json");
		uler.onchange=sfkit_processJSON;
		uler.click();
	};

	function sfkit_saveJSON(who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		var datastream="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(sfkit_cast[who].data));
		var dler=document.getElementById('jsondler');
		dler.setAttribute("href",datastream);
		var filename=sfkit_cast[who].data.name;
		if (filename==="") {filename="character"};
		dler.setAttribute("download",filename+".json");
		dler.click();
	};

	function sfkit_processJSON(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		var uler=document.getElementById("jsonuler");
		
		if (!uler.files) {alert("no files property?");};
		if (!uler.files[0]){
			alert("Cancelled");
		} else {
			var jsonprocessor=new FileReader();
			for (var i=0;i<uler.files.length;i++) {
				jsonprocessor.onload=function(){sfkit_updateSheet(jsonprocessor.result,who+i)};
				jsonprocessor.readAsText(uler.files[i]);
			};
		};
	};

	function sfkit_addLine(tag,who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		var quote="\u0022";
		var column=document.getElementById(tag+ident);
		var line=document.createElement("div");
		var lineclass=document.createAttribute("class");
		lineclass.value="row lineOf8";
		line.setAttributeNode(lineclass);
		line.innerHTML="<span class='field'><input type='text' id='"+tag+"label"+sfkit_cast[who].data[tag+"label"].length+ident+"' onblur='sfkit_updateCustomLabel("+quote+tag+quote+","+sfkit_cast[who].data[tag+"label"].length+","+who+")'></input></span><span id='"+tag+"val"+sfkit_cast[who].data[tag+"val"].length+ident+"' class='outOf8' onclick='sfkit_updateCustom8("+quote+tag+quote+","+sfkit_cast[who].data[tag+"val"].length+","+who+")'>○○○○○ ○○○</span>";
		column.appendChild(line);
		sfkit_cast[who].data[tag+"label"].push("");
		sfkit_cast[who].data[tag+"val"].push(0);
	};

	function sfkit_removeLine(tag,who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		var column=document.getElementById(tag+ident);
		var row=document.getElementById(tag+"val"+(sfkit_cast[who].data[tag+"val"].length-1)+ident).parentNode;
		column.removeChild(row);
		sfkit_cast[who].data[tag+"label"].pop();
		sfkit_cast[who].data[tag+"val"].pop();
	};

	function sfkit_addSpecialManeuverLine(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		var quote="\u0022";
		var theTable=document.getElementById("maneuvers");
		var lastRow=theTable.rows.length;
		var fieldNumber=sfkit_specManLines;
		theTable.insertRow();
		theTable.rows[lastRow].innerHTML=" \n            <td><input type='text' id='specman"+fieldNumber+"_name' title='Name' onblur='sfkit_updateManeuver("+quote+"specman"+quote+","+fieldNumber+","+quote+"name"+quote+")'></input></td>\n            <td class='number'><input type='text' id='specman"+fieldNumber+"_spd' title='Speed (dex+mod)' onblur='sfkit_updateManeuver("+quote+"specman"+quote+","+fieldNumber+","+quote+"spd"+quote+")'></input></td>\n            <td class='number'><input type='text' id='specman"+fieldNumber+"_dmg' title='Damage (str+technique+mod)' onblur='sfkit_updateManeuver("+quote+"specman"+quote+","+fieldNumber+","+quote+"dmg"+quote+")'></input></td>\n            <td class='number'><input type='text' id='specman"+fieldNumber+"_mov' title='Move (athletics+mod)' onblur='sfkit_updateManeuver("+quote+"specman"+quote+","+fieldNumber+","+quote+"mov"+quote+")'></input></td>\n            <td class='number'><input type='text' id='specman"+fieldNumber+"_cost' title='Cost' onblur='sfkit_updateManeuver("+quote+"specman"+quote+","+fieldNumber+","+quote+"cost"+quote+")'></input></td>\n            <td><input type='text' id='specman"+fieldNumber+"_obs' title='Notes' onblur='sfkit_updateManeuver("+quote+"specman"+quote+","+fieldNumber+","+quote+"obs"+quote+")'></input></td>\n";
		sfkit_specManLines++;
	};

	function sfkit_addAbilities(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		sfkit_addLine("tal",who);
		sfkit_addLine("skl",who);
		sfkit_addLine("knwl",who);
	};

	function sfkit_removeAbilities(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data.talval.length<3) {
			alert("Can't have less rows than this.")
		} else {
			sfkit_removeLine("tal",who);
			sfkit_removeLine("skl",who);
			sfkit_removeLine("knwl",who);
		};
	};

	function sfkit_addAdvantages(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		sfkit_addLine("bkg",who);
		sfkit_addLine("tech",who);
		alert((sfkit_cast[who].data.techval.length));
		document.getElementById("combos").style.height=105+20*(sfkit_cast[who].data.techval.length)+"px"
	};

	function sfkit_removeAdvantages(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data.techval.length<1) {
			alert("Can't have less rows than this.")
		} else {
			sfkit_removeLine("bkg",who);
			sfkit_removeLine("tech",who);
			document.getElementById("combos").style.height=105+20*sfkit_cast[who].data.techval.length+"px"
		};
	};

	function sfkit_addSpecialManeuvers(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		sfkit_addSpecialManeuverLine(who);
		sfkit_cast[who].data.specman_name.push("");
		sfkit_cast[who].data.specman_spd.push("");
		sfkit_cast[who].data.specman_dmg.push("");
		sfkit_cast[who].data.specman_mov.push("");
		sfkit_cast[who].data.specman_cost.push("");
		sfkit_cast[who].data.specman_obs.push("");
	};

	function sfkit_removeSpecialManeuvers(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		if (sfkit_cast[who].data.specman_name.length<1) {
			alert("Can't have less rows than this.")
		} else {
			var theTable=document.getElementById("maneuvers");
			var lastRow=theTable.rows.length-1;
			theTable.deleteRow(lastRow);
			sfkit_specManLines--;
			sfkit_cast[who].data.specman_name.pop();
			sfkit_cast[who].data.specman_spd.pop();
			sfkit_cast[who].data.specman_dmg.pop();
			sfkit_cast[who].data.specman_mov.pop();
			sfkit_cast[who].data.specman_cost.pop();
			sfkit_cast[who].data.specman_obs.pop();
		};
	};

	function sfkit_setField(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		document.getElementById(tag).value=sfkit_cast[who].data[tag];
	};

	function sfkit_set8(tag,who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		document.getElementById(tag).innerHTML=sfkit_draw.dotsOf8[sfkit_cast[who].data[tag]];
	};

	function sfkit_setCustom8(tag,who){
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		for (var i=0;i<sfkit_cast[who].data[tag+"label"].length;i++){
			document.getElementById(tag+"label"+i).value=sfkit_cast[who].data[tag+"label"][i];
			document.getElementById(tag+"val"+i).innerHTML=sfkit_draw.dotsOf8[sfkit_cast[who].data[tag+"val"][i]];
		};
	}

	function sfkit_set10(tag,who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		document.getElementById(tag+"_permanent").innerHTML=sfkit_draw.dotsOf10[sfkit_cast[who].data[tag+"_permanent"]];
		document.getElementById(tag+"_temporary").innerHTML=sfkit_draw.boxesOf10[sfkit_cast[who].data[tag+"_temporary"]];
	};

	function sfkit_set20(tag,who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		document.getElementById(tag+"_permanentUpper").innerHTML=sfkit_draw.dotsOf10[Math.min(10,sfkit_cast[who].data[tag+"_permanent"])];
		document.getElementById(tag+"_permanentLower").innerHTML=sfkit_draw.dotsOf10[Math.max(0,(sfkit_cast[who].data[tag+"_permanent"]-10))];
		document.getElementById(tag+"_temporaryUpper").innerHTML=sfkit_draw.boxesOf10[Math.min(10,sfkit_cast[who].data[tag+"_temporary"])];
		document.getElementById(tag+"_temporaryLower").innerHTML=sfkit_draw.boxesOf10[Math.max(0,(sfkit_cast[who].data[tag+"_temporary"]-10))];
	};

	function sfkit_setStdMan(tag,who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		document.getElementById(tag+"_spd").value=sfkit_cast[who].data[tag+"_spd"];
		document.getElementById(tag+"_dmg").value=sfkit_cast[who].data[tag+"_dmg"];
		document.getElementById(tag+"_mov").value=sfkit_cast[who].data[tag+"_mov"];
		document.getElementById(tag+"_cost").value=sfkit_cast[who].data[tag+"_cost"];
		document.getElementById(tag+"_obs").value=sfkit_cast[who].data[tag+"_obs"];
	};

	function sfkit_setSpecMan(who) {
		if (who===undefined) {who=0};
		if (who===0) {var ident=""} else {var ident="_"+who};
		for (var i=0;i<sfkit_cast[who].data.specman_name.length;i++){
			if (i>(sfkit_specManLines-1)) {sfkit_addSpecialManeuverLine(who);};
			document.getElementById("specman"+i+"_name"+ident).value=sfkit_cast[who].data.specman_name[i];
			document.getElementById("specman"+i+"_spd"+ident).value=sfkit_cast[who].data.specman_spd[i];
			document.getElementById("specman"+i+"_dmg"+ident).value=sfkit_cast[who].data.specman_dmg[i];
			document.getElementById("specman"+i+"_mov"+ident).value=sfkit_cast[who].data.specman_mov[i];
			document.getElementById("specman"+i+"_cost"+ident).value=sfkit_cast[who].data.specman_cost[i];
			document.getElementById("specman"+i+"_obs"+ident).value=sfkit_cast[who].data.specman_obs[i];
		}
	};

	function sfkit_updateSheet(jsondata) {
		sfkit_cast[0]["data"]=JSON.parse(jsondata);
		var list="";
		var i=0;
		list=document.getElementsByClassName("textField");
		for (i=0; i<list.length;i++) {
			sfkit_setField(list[i].id);};
		list=document.getElementsByClassName("setOf8");
		for (i=0; i<list.length;i++) {sfkit_set8(list[i].id);};
		list=document.getElementsByClassName("custom8");
		for (i=0; i<list.length;i++) {sfkit_setCustom8(list[i].id);};
		list=document.getElementsByClassName("setOf10");
		for (i=0; i<list.length;i++) {sfkit_set10(list[i].id);};
		list=document.getElementsByClassName("setOf20");
		for (i=0; i<list.length;i++) {sfkit_set20(list[i].id);};
		list=document.getElementsByClassName("stdman");
		for (i=0; i<list.length;i++) {sfkit_setStdMan(list[i].id);};
		sfkit_setSpecMan();
	};

	function sfkit_updateCombatCards(jsondata,who) {};


function setupListeners() {
	function distributeFunctions(thisClass,thisFunction){
		var listOfElements = document.getElementsByClassName(thisClass);
		//alert("Found "+listOfElements.length+" elements of class "+thisClass);
		for (var i = 0; i < listOfElements.length; i++) {
			//alert("Adding "+thisFunction+" to "+listOfElements[i].id);
			//listOfElements[i].addEventListener('click', thisFunction(listOfElements[i].id), false);
			listOfElements[i].onclick=thisFunction+"("+ListOfElements[i].id+")"
		};
	
	distributeFunctions("listOf8",sfkit_draw.updateFixed8);
	distributeFunctions("custom8",sfkit_draw.updateCustom8);
	};
};