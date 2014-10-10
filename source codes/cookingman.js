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
var kaldereta = new Recipe("kaldereta");
var karekare = new Recipe("karekare");
var tinola = new Recipe("tinola");
var pinakbet = new Recipe("pinakbet");

alling.ing= ["beef","manok","kamatis","sayote","malunggay","luya","paminta","asin","okra","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika","patatas","liverspread","sili","cheese","peas","carrots"];
adobo.ing = ["bawang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika"];
kaldereta.ing = ["mantika","patatas","liverspread","beef","tubig","sili","cheese","peas","carrots","toyo"];
karekare.ing = ["beef","tubig","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang"];
tinola.ing=["manok","malunggay","sayote","tubig","mantika","luya","bawang","sibuyas"];
pinakbet.ing=["baboy","bawang","kamatis","asin","luya","paminta","sibuyas","tubig","kalabasa","alamang","okra","sitaw","talong",];

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
		var num = _obj.ing.length;
		if (no_ing < _obj.ing.length) {

		var newImg = document.createElement("img");
		newImg.setAttribute("src","resources/meals/alling/"+_name+".png");
		newImg.setAttribute("height","100px");
		var z = _name + 1;
		newImg.setAttribute("id",z);
		
		newImg.setAttribute("onClick","back('"+z+"','"+_name+"',"+num+")");
		document.getElementById("choice").appendChild(newImg);
		
		foodChoices.push(_name);
		
		if(no_ing == _obj.ing.length-1){
			
				var p = document.createElement("img");
				p.setAttribute("id","check1");
				p.setAttribute("src","resources/images/button.png");
				p.setAttribute("onClick","checkIng("+_obj.name+")");
				p.setAttribute("height","80px");
				document.getElementById("choice").appendChild(p);
				}
		no_ing++;
		}
	}
	function checkIng(_obj) {
		var temp1=foodChoices;
		var temp2=_obj.ing;
		temp1.sort();
		temp2.sort();
		var diff = 0;
		for ( var i = 0; i < _obj.ing.length; i++) {
			if(temp2[i] == temp1[i]) {	
				
			}
			else {
				diff = 1;
				i = _obj.ing.length;
			}
			
		}
		if(diff == 0){
		var h = document.createElement("img");
				h.setAttribute("id","check2");
				h.setAttribute("src","resources/images/button1.png");
				h.setAttribute("height","80px");
				h.setAttribute("onClick","cook("+_obj+")");
				document.getElementById("choice").appendChild(h);
		}else{
			alert("Ooops. A unknown ingredient is on your list!");
			console.log(foodChoices);
		}
	}
	
	function back(_name,_name1,_obj){
		no_ing=no_ing-1;
		var elem = document.getElementById(_name);
		elem.parentNode.removeChild(elem);
		console.log(_name1);
		var index = foodChoices.indexOf(_name1);
		delete foodChoices[index];
		//foodChoices.splice(_name1,1);
		console.log(foodChoices);
		
		if(no_ing == _obj-1){
			var elem2 = document.getElementById("check1");
			elem2.parentNode.removeChild(elem2);
			var elem3 = document.getElementById("check2");
			elem3.parentNode.removeChild(elem3);
		}
	
	}
	function cook(_obj){
	console.log(_obj.name);
		document.getElementById("content").innerHTML = '';
	}
	






