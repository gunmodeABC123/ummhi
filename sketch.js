function setup() {
  createCanvas(400, 400);
  fsButton=createButton("fullscreen")
  fsButton.position(0,0)
  fsButton.mousePressed(goFullScreen);
}

function draw() {
  background(220);
}
function goFullScreen(){
  let fs = fullscreen();
  fullscreen(!fs)
  if(!fs){
    resizeCanvas(displayWidth,displayHeight)
    fsButton.html("go back")
  }
  else{
    resizeCanvas(400,400)
    fsButton.html("fullscreen")
  }
 
  
}