const pageContainer = document.getElementById("pageContainer");
const cyclingDivs = document.getElementsByClassName("cyclingDiv");
const cyclingLinks = document.getElementsByClassName("cyclingLinks");
const img1 = document.getElementById("img1");

let circlePos = 0;
let scrollAmount = 100;

placeDivsOnWheel();

function placeDivsOnWheel() {
  circlePos = scrollAmount * Math.PI / 2000;
  let distanceAmongDivs = Math.PI / 3;

  let positions = [0, distanceAmongDivs, distanceAmongDivs * 2, distanceAmongDivs * 3, distanceAmongDivs * 4, distanceAmongDivs * 5];

  console.log(circlePos);

  function positionToColor(depth) {
    let valueMinusOneToOne = Math.cos(depth)
    let reds = 40 - Math.floor(valueMinusOneToOne * 20);
    let greens = 120 + Math.floor(valueMinusOneToOne * 40);
    let blues = 60;
    return ("#" + reds.toString(16) + greens.toString(16) + blues.toString(16));
  }

  for (let i = 0; i < cyclingDivs.length; i++) {
    cyclingDivs[i].style.top = Math.sin((circlePos + positions[i])) * 150 + 300 + "px";
    cyclingDivs[i].style.width = Math.cos((circlePos + positions[i])) * 50  + 350 + "px";
    cyclingDivs[i].style.height = Math.cos((circlePos + positions[i])) * 15 + 60 + "px";
    cyclingDivs[i].style.zIndex = Math.floor(Math.cos((circlePos + positions[i])) + 0.2);
    cyclingDivs[i].style.backgroundColor = positionToColor(circlePos + positions[i]);
    cyclingDivs[i].style.fontSize = Math.cos((circlePos + positions[i])) * 5 + 25 + "px";
    
    if (cyclingDivs[i].style.zIndex < 0) 
    {cyclingLinks[i].style.color = "grey";
     cyclingLinks[i].textDecoration = "none";
  } 
    else {cyclingLinks[i].style.color = "white"};
  }
}

pageContainer.addEventListener("wheel", spin, { passive: false });

function spin(event) {
  scrollAmount += event.deltaY;

  placeDivsOnWheel();

  
}
