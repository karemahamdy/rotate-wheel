let wheel = document.querySelector(".chart");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

let clicks = 0;
btn.onclick = function () {
  clicks += 1;
  wheel.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 360);
  if(clicks >= 2 ){
	clicks = 0;
  }
}