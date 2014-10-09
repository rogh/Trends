//setTimeout("changeImg()",3000);

var no_ing = 0;
var num = 1;
var el = 0;
var foodChoices= [];
//setTimeout("changeImg()",1000);
function changeImg(){
	if(num ==1){
		document.getElementById("manong").setAttribute("src","resources/images/manong"+num+".png");
		num = 2;
		setTimeout("changeImg()",1000);
	}else{
		document.getElementById("manong").setAttribute("src","resources/images/manong"+num+".png");
		num = 1;
		setTimeout("changeImg()",1000);
	}
}

function Recipe(_name){
	this.name=_name;
	this.ing = [];
}

var alling = new Recipe("alling");
var adobo = new Recipe("adobo");
var kaldereta = new Recipe("Kaldereta");
var karekare = new Recipe("Kare Kare");

alling.ing= ["beef","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika","patatas","liverspread","sili","cheese","peas","carrots"];
adobo.ing = ["bawang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika"];
kaldereta.ing = ["mantika","patatas","liverspread","beef","water","sili","cheese","peas","carrots","toyo"];
karekare.ing = ["beef","water","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang"];

console.log(adobo);
console.log(kaldereta);
console.log(karekare);

function removeContent(){
		document.getElementById("content").innerHTML = '';
	}
	
function display(_name,_reci,_objname){
el = 1;
foodChoices = [];
no_ing = 0;
el = 0;
	document.getElementById("menu").innerHTML = _reci;
	
	document.getElementById("list").innerHTML = '';

	
	var div = document.createElement("div");
	div.setAttribute("id","listofing");
	document.getElementById("list").appendChild(div);
	
	var div2 = document.createElement("div");
	div2.setAttribute("id","choice");
	document.getElementById("list").appendChild(div2);
	
	var count = _name.ing.length;
	for (var i = 0; i< count; i++){
	
	var img = document.createElement("img");
	img.setAttribute("src","resources/meals/"+_name.name+"/"+_name.ing[i]+".png");
	img.setAttribute("height","100px");
	img.setAttribute("id",_name.ing[i])
	var name = _name.ing[i];
	img.setAttribute("onClick","addToChoice(\""+name+"\","+_objname+")");
	document.getElementById("listofing").appendChild(img);
	}
	}
	function addToChoice(_name,_obj){
	
		if (no_ing < _obj.ing.length) {

		var newImg = document.createElement("img");
		newImg.setAttribute("src","resources/meals/alling/"+_name +".png");
		newImg.setAttribute("height","100px");
		var z = _name + 1;
		newImg.setAttribute("id",z);
		var ids = z;
		
		newImg.setAttribute("onClick","back('"+ids+"')");
		document.getElementById("choice").appendChild(newImg);
		no_ing++;
		foodChoices.push(_name);
		el = 1;
		}else{
		if(el == 1){
		var div3 = document.createElement("div");
		div3.setAttribute("id","check");
		document.getElementById("choice").appendChild(div3);
		var p = document.createElement("p");
		p.setAttribute("id","check1");
		p.setAttribute("onClick","checkIng("+_obj.name+")");
		document.getElementById("check").appendChild(p);
		document.getElementById("check1").innerHTML = "Check Ingredients";
		/* var a = document.createElement("a");
		a.setAttribute("id","a");
		a.setAttribute("onClick","checkIng()")
		document.getElementById("check1").appendChild(a);
		document.getElementById("a").innerHTML = "Check Ingredients";
	*/
		el=0;
		}
		
		}
	}
	function checkIng(_obj) {
		foodChoices.sort();
		_obj.ing.sort();
		
		for ( var i = 0; i < _obj.ing.length; i++) {
			if(_obj.ing[i] == foodChoices[i]) {	
				alert("Tama");
			}
			else {
				alert("mali");
				i = _obj.ing.length;
			}
		}
	}
	
	function back(_name){
		no_ing=no_ing-1;
		var elem = document.getElementById(_name);
		elem.parentNode.removeChild(elem);
		if(no_ing < foodChoices.length){
			var elem1 = document.getElementById("check");
			elem1.parentNode.removeChild(elem1);
			var elem2 = document.getElementById("check1");
			elem2.parentNode.removeChild(elem2);
		}
	
	}
	






