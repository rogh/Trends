//
function Store(name){
	this.name = name;
	this.imageLink = "resources/images/meals/storesPNG/" + this.name + ".png";
}
var store1 = new Store("1");
var store2 = new Store("2");
var store3 = new Store("3");
var store4 = new Store("4");
var store5 = new Store("5");

var storeArray = [store1,store2,store3,store4,store5];
var num=1;

function changeImg(){
	if(num == 1){
		storeArray[0].imageLink = "resources/images/meals/storesPNG/" + storeArray[0].name + ".png"
		document.getElementById("store").setAttribute("src",storeArray[0].imageLink);

		num = 2;
		setTimeout("changeImg()",3000);
	}else if (num == 2){
		storeArray[1].imageLink = "resources/images/meals/storesPNG/" + storeArray[1].name + ".png"
		document.getElementById("store").setAttribute("src",storeArray[1].imageLink);
		num = 3;
		setTimeout("changeImg()",3000);
	}else if (num == 3){
		storeArray[2].imageLink = "resources/images/meals/storesPNG/" + storeArray[2].name + ".png"
		document.getElementById("store").setAttribute("src",storeArray[2].imageLink);
		num = 4;
		setTimeout("changeImg()",3000);
	}else if (num == 4){
		storeArray[3].imageLink = "resources/images/meals/storesPNG/" + storeArray[3].name + ".png"
		document.getElementById("store").setAttribute("src",storeArray[3].imageLink);
		num = 5;
		setTimeout("changeImg()",3000);
	}else{
		storeArray[4].imageLink = "resources/images/meals/storesPNG/" + storeArray[4].name + ".png"
		document.getElementById("store").setAttribute("src",storeArray[4].imageLink);
		num = 1;
		setTimeout("changeImg()",3000);
	}
}
function Banapple(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/breakfastPNG/banapple/" + this.name + ".png";
}
var banapple = new Banapple("1");
var banapple2 = new Banapple("2");
var banapple3 = new Banapple("3");
var banapple4 = new Banapple("4");
var banappleArray = [banapple,banapple2,banapple3,banapple4];

function showBanapple(){
	for (var i in banappleArray){
		var img = document.createElement("img");
		banappleArray[i].imageLink = "resources/images/meals/breakfastPNG/banapple/" + banappleArray[i].name + ".png";
		img.setAttribute("src",banappleArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontBanapple").appendChild(img);
	}
} // banapple

function EarlyBird(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/breakfastPNG/earlybird/" + this.name + ".png";
}
var earlyBird = new EarlyBird("1");
var earlyBird2 = new EarlyBird("2");
var earlyBird3 = new EarlyBird("3");
var earlyBird4 = new EarlyBird("4");
var earlyBirdArray = [earlyBird,earlyBird2,earlyBird3,earlyBird4];

function showBird(){
	for (var i in earlyBirdArray){
		var img = document.createElement("img");
		earlyBirdArray[i].imageLink = "resources/images/meals/breakfastPNG/earlybird/" + earlyBirdArray[i].name + ".png";
		img.setAttribute("src",earlyBirdArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontBird").appendChild(img);
	}
} // earlybird
function FoodRecovery(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/breakfastPNG/foodRecovery/" + this.name + ".png";
}
var food = new FoodRecovery("1");
var food2 = new FoodRecovery("2");
var food3 = new FoodRecovery("3");
var food4 = new FoodRecovery("4");
var foodArray = [food,food2,food3,food4];

function foodRecovery(){
	for (var i in foodArray){
		var img = document.createElement("img");
		foodArray[i].imageLink = "resources/images/meals/breakfastPNG/foodRecovery/" + foodArray[i].name + ".png";
		img.setAttribute("src",foodArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontReco").appendChild(img);
	}
} // foodRecovery
function Maple(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/breakfastPNG/maple/" + this.name + ".png";
}
var maple = new Maple("1");
var maple2 = new Maple("2");
var maple3 = new Maple("3");
var maple4 = new Maple("4");
var mapleArray = [maple,maple2,maple3,maple4];

function showmaple(){
	for (var i in mapleArray){
		var img = document.createElement("img");
		mapleArray[i].imageLink = "resources/images/meals/breakfastPNG/maple/" + mapleArray[i].name + ".png";
		img.setAttribute("src",mapleArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontMaple").appendChild(img);
	}
} // maple
function Wild(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/breakfastPNG/wild flour/" + this.name + ".png";
}
var wild = new Wild("1");
var wild2 = new Wild("2");
var wild3 = new Wild("3");
var wild4 = new Wild("4");
var wildArray = [wild,wild2,wild3,wild4];

function showWild(){
	for (var i in wildArray){
		var img = document.createElement("img");
		wildArray[i].imageLink = "resources/images/meals/breakfastPNG/wild flour/" + wildArray[i].name + ".png";
		img.setAttribute("src",wildArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontWild").appendChild(img);
	}
} // wild
function Revolve(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/lunchDinnerPNG/100Revolving/" + this.name + ".png";
}
var revolve = new Revolve("1");
var revolve2 = new Revolve("2");
var revolve3 = new Revolve("3");
var revolveArray = [revolve,revolve2,revolve3];

function showRevolve(){
	for (var i in revolveArray){
		var img = document.createElement("img");
		revolveArray[i].imageLink = "resources/images/meals/lunchDinnerPNG/100Revolving/" + revolveArray[i].name + ".png";
		img.setAttribute("src",revolveArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontRevol").appendChild(img);
	}
} // revolve
function Brass(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/lunchDinnerPNG/BrasserieGirolle/" + this.name + ".png";
}
var brass = new Brass("1");
var brass2 = new Brass("2");
var brass3 = new Brass("3");
var brassArray = [brass,brass2,brass3];

function showBrass(){
	for (var i in brassArray){
		var img = document.createElement("img");
		brassArray[i].imageLink = "resources/images/meals/lunchDinnerPNG/BrasserieGirolle/" + brassArray[i].name + ".png";
		img.setAttribute("src",brassArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontBasser").appendChild(img);
	}
} // brass
function Cowrie(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/lunchDinnerPNG/CowrieGrill/" + this.name + ".png";
}
var cowrie = new Cowrie("1");
var cowrie2 = new Cowrie("2");
var cowrie3 = new Cowrie("3");
var cowrieArray = [cowrie,cowrie2,cowrie3];

function showCowrie(){
	for (var i in cowrieArray){
		var img = document.createElement("img");
		cowrieArray[i].imageLink = "resources/images/meals/lunchDinnerPNG/CowrieGrill/" + cowrieArray[i].name + ".png";
		img.setAttribute("src",cowrieArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontCowrie").appendChild(img);
	}
} // cowriea
function Ginza(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/lunchDinnerPNG/GinzaBairin/" + this.name + ".png";
}
var ginza = new Ginza("1");
var ginza2 = new Ginza("2");
var ginza3 = new Ginza("3");
var ginzaArray = [ginza,ginza2,ginza3];

function showGinza(){
	for (var i in ginzaArray){
		var img = document.createElement("img");
		ginzaArray[i].imageLink = "resources/images/meals/lunchDinnerPNG/GinzaBairin/" + ginzaArray[i].name + ".png";
		img.setAttribute("src",ginzaArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontGinza").appendChild(img);
	}
} // ginza
function Pastures(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/lunchDinnerPNG/GreenPastures/" + this.name + ".png";
}
var pastures = new Pastures("1");
var pastures2 = new Pastures("2");
var pastures3 = new Pastures("3");
var pasturesArray = [pastures,pastures2,pastures3];

function showPastures(){
	for (var i in pasturesArray){
		var img = document.createElement("img");
		pasturesArray[i].imageLink = "resources/images/meals/lunchDinnerPNG/GreenPastures/" + pasturesArray[i].name + ".png";
		img.setAttribute("src",pasturesArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontPasture").appendChild(img);
	}
} // ginza
// ------------- DESSERTS ------------------
function Crepes(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/desserts/CrepesPNG/" + this.name + ".png";
}
var crepes = new Crepes("1");
var crepes2 = new Crepes("2");
var crepes3 = new Crepes("3");
var crepesArray = [crepes,crepes2,crepes3];

function showCrepes(){
	for (var i in crepesArray){
		var img = document.createElement("img");
		crepesArray[i].imageLink = "resources/images/meals/desserts/CrepesPNG/" + crepesArray[i].name + ".png";
		img.setAttribute("src",crepesArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontCrepes").appendChild(img);
	}
} // crepes
function Cup(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/desserts/CupcakelabPNG/" + this.name + ".png";
}
var cup = new Cup("1");
var cup2 = new Cup("2");
var cup3 = new Cup("3");
var cupArray = [cup,cup2,cup3];

function showCup(){
	for (var i in cupArray){
		var img = document.createElement("img");
		cupArray[i].imageLink = "resources/images/meals/desserts/CupcakelabPNG/" + cupArray[i].name + ".png";
		img.setAttribute("src",cupArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontLab").appendChild(img);
	}
} // cupcake
function Dq(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/desserts/DairyQueenPNG/" + this.name + ".png";
}
var dq = new Dq("1");
var dq2 = new Dq("2");
var dq3 = new Dq("3");
var dqArray = [dq,dq2,dq3];

function showDQ(){
	for (var i in dqArray){
		var img = document.createElement("img");
		dqArray[i].imageLink = "resources/images/meals/desserts/DairyQueenPNG/" + dqArray[i].name + ".png";
		img.setAttribute("src",dqArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontDQ").appendChild(img);
	}
} // dq
function Estrel(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/desserts/EstrelPNG/" + this.name + ".png";
}
var estrel = new Estrel("1");
var estrel2 = new Estrel("2");
var estrel3 = new Estrel("3");
var estrelArray = [estrel,estrel2,estrel3];

function showEstrel(){
	for (var i in estrelArray){
		var img = document.createElement("img");
		estrelArray[i].imageLink = "resources/images/meals/desserts/EstrelPNG/" + estrelArray[i].name + ".png";
		img.setAttribute("src",estrelArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontEstrel").appendChild(img);
	}
} // estrel
function Iscream(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/desserts/IscreamistPNG/" + this.name + ".png";
}
var iscream = new Iscream("1");
var iscream2 = new Iscream("2");
var iscream3 = new Iscream("3");
var iscreamArray = [iscream,iscream2,iscream3];

function showIscream(){
	for (var i in iscreamArray){
		var img = document.createElement("img");
		iscreamArray[i].imageLink = "resources/images/meals/desserts/IscreamistPNG/" + iscreamArray[i].name + ".png";
		img.setAttribute("src",iscreamArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontIscreamist").appendChild(img);
	}
} // estrel
//------------ DRINKS ----------------------
function Chattime(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/drinks/ChatimePNG/" + this.name + ".png";
}
var chattime = new Chattime("1");
var chattime2 = new Chattime("2");
var chattimeArray = [chattime,chattime2];

function showChat(){
	for (var i in chattimeArray){
		var img = document.createElement("img");
		chattimeArray[i].imageLink = "resources/images/meals/drinks/ChatimePNG/" + chattimeArray[i].name + ".png";
		img.setAttribute("src",chattimeArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontChattime").appendChild(img);
	}
} // chattime
function Dau(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/drinks/DaUDePNG/" + this.name + ".png";
}
var dau = new Dau("1");
var dau2 = new Dau("2");
var dauArray = [dau,dau2];

function showDau(){
	for (var i in dauArray){
		var img = document.createElement("img");
		dauArray[i].imageLink = "resources/images/meals/drinks/DaUDePNG/" + dauArray[i].name + ".png";
		img.setAttribute("src",dauArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontDaUde").appendChild(img);
	}
} // dau
function Gongcha(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/drinks/GongChaPNG/" + this.name + ".png";
}
var gongcha = new Gongcha("1");
var gongcha2 = new Gongcha("2");
var gongchaArray = [gongcha,gongcha2];

function showGong(){
	for (var i in gongchaArray){
		var img = document.createElement("img");
		gongchaArray[i].imageLink = "resources/images/meals/drinks/GongChaPNG/" + gongchaArray[i].name + ".png";
		img.setAttribute("src",gongchaArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontGongCha").appendChild(img);
	}
} // gongcha
function Saints(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/drinks/SaintsAlpPNG/" + this.name + ".png";
}
var saints = new Saints("1");
var saints2 = new Saints("2");
var saintsArray = [saints,saints2];

function showAlp(){
	for (var i in saintsArray){
		var img = document.createElement("img");
		saintsArray[i].imageLink = "resources/images/meals/drinks/SaintsAlpPNG/" + saintsArray[i].name + ".png";
		img.setAttribute("src",saintsArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontSaints").appendChild(img);
	}
} // saints
function Tokyo(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/drinks/TokyoPNG/" + this.name + ".png";
}
var tokyo = new Tokyo("1");
var tokyo2 = new Tokyo("2");
var tokyoArray = [tokyo,tokyo2];

function showTok(){
	for (var i in tokyoArray){
		var img = document.createElement("img");
		tokyoArray[i].imageLink = "resources/images/meals/drinks/TokyoPNG/" + tokyoArray[i].name + ".png";
		img.setAttribute("src",tokyoArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontTokyo").appendChild(img);
	}
} // tokyo

// ----SNACKS----
function Shawarma(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/snacks/ShawarmaSnack - png/" + this.name + ".png";
}
var shawarma = new Shawarma("1");
var shawarma2 = new Shawarma("2");
var shawarmaArray = [shawarma,shawarma2];

function showShawarma(){
	for (var i in shawarmaArray){
		var img = document.createElement("img");
		shawarmaArray[i].imageLink = "resources/images/meals/snacks/ShawarmaSnack - png/" + shawarmaArray[i].name + ".png";
		img.setAttribute("src",shawarmaArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontShawarma").appendChild(img);
	}
} // shawarma

function Snack(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/snacks/SnackShack - png/" + this.name + ".png";
}
var snack = new Snack("1");
var snack2 = new Snack("2");
var snackArray = [snack,snack2];

function showSnack(){
	for (var i in snackArray){
		var img = document.createElement("img");
		shawarmaArray[i].imageLink = "resources/images/meals/snacks/SnackShack - png/" + snackArray[i].name + ".png";
		img.setAttribute("src",snackArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontSnack").appendChild(img);
	}
} // snackshack

function Aling(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/snacks/AlingNorma - png/" + this.name + ".png";
}
var aling = new Aling("1");
var alingArray = [aling];

function showAling(){
	for (var i in alingArray){
		var img = document.createElement("img");
		shawarmaArray[i].imageLink = "resources/images/meals/snacks/AlingNorma - png/" + alingArray[i].name + ".png";
		img.setAttribute("src",alingArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontAling").appendChild(img);
	}
} // aling norma

function Heaven(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/snacks/HeavenBBQ - png/" + this.name + ".png";
}
var heaven = new Heaven("1");
var heaven2 = new Heaven("2");
var heavenArray = [heaven,heaven2];

function showHeaven(){
	for (var i in heavenArray){
		var img = document.createElement("img");
		shawarmaArray[i].imageLink = "resources/images/meals/snacks/HeavenBBQ - png/" + heavenArray[i].name + ".png";
		img.setAttribute("src",heavenArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontHeaven").appendChild(img);
	}
} // heavenbbq

function Kabig(name){ 
	this.name = name;
	this.imageLink = "resources/images/meals/snacks/Kabigting - png/" + this.name + ".png";
}
var kabig = new Kabig("1");
var kabig2 = new Kabig("2");
var kabigArray = [kabig, kabig2];

function showKabigting(){
	for (var i in kabigArray){
		var img = document.createElement("img");
		shawarmaArray[i].imageLink = "resources/images/meals/snacks/Kabigting - png/" + kabigArray[i].name + ".png";
		img.setAttribute("src",kabigArray[i].imageLink);
		img.setAttribute("height","100px");
		document.getElementById("frontKabigting").appendChild(img);
	}
} // aling norma