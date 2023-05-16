//Simple Paint

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let mouseIsPressed = false;
let mouseX, mouseY;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  //Draw a circle if mouseIsPressed
  if (mouseIsPressed) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
    ctx.fill();
  }

  requestAnimationFrame(loop);
}

//Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

function mousedownHandler(event) {
  console.log(event);
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
