var clicked = 0;
var seconds=0;
var map = document.getElementById("map");
var pkt = 0;
var pktpoziom = 0;
var speed = 1000;
var szybkosczar = 1000;
var prog = 1;
setTimeout(timeDisp, speed);
function myFunction()
{

clicked = clicked + 1;
pktpoziom++;
  document.getElementById("value").innerHTML = clicked;

    var min = Math.ceil(20);
var max = Math.floor(600);
  var liczba = Math.floor(Math.random() * (max - min)) + min;
    var liczba2 = Math.floor(Math.random() * (max - min)) + min;
var img = document.createElement("img");
img.src = "dot.png";
img.style.position = "absolute";
img.style.left = liczba + "px";
img.style.top = liczba2 + "px";
var src = document.getElementById("map");
src.appendChild(img);
}


function timeDisp() {
	console.log(pktpoziom);
if(pktpoziom >=100)
{
pkt = pkt + 1;
pktpoziom = 0;
document.getElementById("value2").innerHTML = pkt;
}
  clicked++;
  pktpoziom++;

  var min = Math.ceil(20);
var max = Math.floor(600);
  var liczba = Math.floor(Math.random() * (max - min)) + min;
    var liczba2 = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("value").innerHTML = clicked;
document.getElementById("value3").innerHTML = szybkosczar;
var img = document.createElement("img");
img.src = "dot.png";
img.style.position = "absolute";
img.style.left = liczba + "px";
img.style.top = liczba2 + "px";
var src = document.getElementById("map");
src.appendChild(img);
setTimeout(timeDisp, speed);
}

function szybkosc()
{
	if(pkt >= prog)
	{
      speed = speed-100;
      pkt = pkt - prog;
      prog = prog *2;
      szybkosczar = szybkosczar + 100;
      document.getElementById("value2").innerHTML = pkt;
      document.getElementById("komunikat").innerHTML = " ";
      document.getElementById("value3").innerHTML = szybkosczar;
	}
	else
	{
		document.getElementById("komunikat").innerHTML = "Nie masz wystarczającej ilości punktów! Potrzeba: " + prog;
	}
}

