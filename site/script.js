var clicked = 0;
var seconds=0;
var map = document.getElementById("map");
var pkt = 0;
var pktpoziom = 0;
var speed = 1000;
var szybkosczar = 1000;
var prog = 1;
var prog2 = 1;
var kliczek = 1;
licznik = 0;
setTimeout(timeDisp, speed);
function myFunction()
{

clicked = clicked + kliczek;
pktpoziom++;
licznik++;
  document.getElementById("value").innerHTML = clicked;

}


function timeDisp() {
	
if(pktpoziom >=100)
{
pkt = pkt + 1;
pktpoziom = 0;
document.getElementById("value2").innerHTML = pkt;
}
  clicked = clicked + kliczek;
  pktpoziom++;
  licznik = licznik+1;
  document.getElementById("value").innerHTML = clicked;
document.getElementById("value3").innerHTML = szybkosczar;
if(licznik >= 10)
{
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
licznik = 0;
}
setTimeout(timeDisp, speed);
}

function szybkosc()
{
	if(pkt >= prog)
	{
      speed = speed-100;
      pkt = pkt - prog;
      prog = prog *2;
      szybkosczar = szybkosczar - 100;
      document.getElementById("value2").innerHTML = pkt;
      document.getElementById("komunikat").innerHTML = " ";
      document.getElementById("value3").innerHTML = szybkosczar;
	}
	else
	{
		document.getElementById("komunikat").innerHTML = "Nie masz wystarczającej ilości punktów! Potrzeba: " + prog;
	}
}

function klicz()
{
	if(pkt >= prog2)
	{
		kliczek = kliczek +1;
		pkt = pkt - prog2;
        prog2 = prog2 *2;
              document.getElementById("value2").innerHTML = pkt;
      document.getElementById("komunikat2").innerHTML = " ";
      document.getElementById("value3").innerHTML = szybkosczar;

	}
		else
	{
		document.getElementById("komunikat2").innerHTML = "Nie masz wystarczającej ilości punktów! Potrzeba: " + prog2;
	}
}