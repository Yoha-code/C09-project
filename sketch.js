var btn_red;
var btn_orange;
var btn_yellow;
var btn_green;
var btn_blue;
var btn_violet;
var btn_indigo;

var r = 0;
var g = 0;
var b = 0;

function setup() {
createCanvas(800, 800);  

btn_red = createButton("Red");
btn_red.position(25, 50);
btn_red.mousePressed(red_bg);

btn_orange = createButton("Orange");
btn_orange.position(125, 50);
btn_orange.mousePressed(orange_bg);

btn_yellow = createButton("Yellow");
btn_yellow.position(225, 50);
btn_yellow.mousePressed(yellow_bg);

btn_green = createButton("Green");
btn_green.position(325, 50);
btn_green.mousePressed(green_bg);

btn_blue = createButton("Blue");
btn_blue.position(425, 50);
btn_blue.mousePressed(blue_bg);

btn_violet = createButton("Violet");
btn_violet.position(525, 50);
btn_violet.mousePressed(violet_bg);

btn_indigo = createButton("Indigo");
btn_indigo.position(625, 50);
btn_indigo.mousePressed(indigo_bg);
}


function draw() {
  background(r,g,b);
}


function red_bg() {
    r = 255;
    g= 0;
    b=0;
  }

function orange_bg() {
    r = 255;
    g= 140;
    b= 0;
  }
function yellow_bg() {
    r = 255;
    g= 255;
    b= 0;
  }
  
function green_bg(){
   r = 0;
   g= 255;
   b=0;
 }

 function blue_bg() {
  r = 0;
  g= 0;
  b= 255;
}

function violet_bg() {
  r = 148;
  g= 0;
  b= 211;
}

function indigo_bg() {
  r = 75;
  g= 0;
  b= 130;
}

