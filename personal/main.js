
let circle = [];
let square = [];


let morph = [];
happen=0;
count=0;
TextX=0;
enterX=0;

let state = false;
multf=100;
click=0;
TextA=500;
TextB=500;
TextC=500;
changeA=0;
changeB=0;
changeC=0;
size=100;
check=0;
smile=500;
mx=0;
main=0;
rev=false;
imgY=0;
curIndex=0;
temp=120;
done=0;
sliderY=0;
let s1, s2;
let gravity = 29.0;
let mass = 7.0;
let img;
hitX=250;
hitY=0;
hitX1=window.innerWidth-250;
hitY1=0;
norm=0;
pull=0;
on=0;
my=0;
over=0;
rev2=false;
key1=0;
start=0;
a=0;
b=0;
var myFont;
var myFont2;
var sourceText = "Hey! I'm Arshad , an undergraduate student doing my \nbachelor's in Computer Science and Design at \nthe Indraprastha Institute of Information Technology - Delhi.\nI specialize in coding (primarily in JAVA) and believe\nthat I have the qualities of an up and coming Designer.I \nhave worked on creating Games , UI/UX for Design Projects\nand dabbled in website development.I believe that the key to\nanything is communication and I try my best to incorporate \nthis belief into everything that I do :)";
var sourceText2="A FEW PROJECTS I'VE DONE";
var fugo="FUGO is a design project that me \nand 4 other college-mates made. \nWe designed a new age service that \nwould aim towards creating \nfuturistic waste to biofuel \nconversion bins as a part of the \n11th SDG goal of sustainable \ncities and communities.";
var alfa="ALFA is a single player game \nthat I made using PIXI.js. In \nthe game you play as a spirit \nwho is trying to escape \nfrom the enemy's territory";
var color1="This is remake of the popular \ngame Color Switch. I have \nadded some extra functionalities \nlike saving your game in \nmy version";
function preload() {
  img = loadImage('resources/arshad3.png');
  img2 = loadImage('resources/2.png');
  img3 = loadImage('resources/3.png');
  img4 = loadImage('resources/4.png');
  clickimg=loadImage('resources/click.png');
  gmail=loadImage("resources/gmail-logo.png");
  git=loadImage("resources/github.png");
  cv=loadImage("resources/cv.png");
  myFont = loadFont('resources/AmaticSC-Regular.ttf');
    myFont2 = loadFont('resources/AmaticSC-Bold.ttf');
  song = loadSound('resources/ting.wav');
}
function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(temp);

  // Create a circle using vectors pointing from center
  for (let angle = 0; angle < 360; angle += 9) {
    // Note we are not starting from 0 in order to match the
    // path of a circle.

    let v = p5.Vector.fromAngle(radians(angle - 135));
    v.mult(multf);

    circle.push(v);
    // Let's fill out morph ArrayList with blank PVectors while we are at it
    morph.push(createVector());
  }


  // A square is a bunch of vertices along straight lines
  // Top of square
  for (let x = -50; x < 50; x += 10) {
    square.push(createVector(x, -50));
  }
  // Right side
  for (let y = -50; y < 50; y += 10) {
    square.push(createVector(50, y));
  }
  // Bottom
  for (let x = 50; x > -50; x -= 10) {
    square.push(createVector(x, 50));
  }
  // Left side
  for (let y = 50; y > -50; y -= 10) {
    square.push(createVector(-50, y));
  }
  s1 = new Spring2D(0.0, 0, mass, gravity,"WHO AM I?");
  s2 = new Spring2D(0.0, 0, mass, gravity,"PROJECTS");

}
function Spring2D(xpos, ypos, m, g,text1) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 30;
  this.stiffness = 0.2;
  this.damping = 0.7;
  this.text1=text1;
  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }
   this.display = function(nx, ny) {
    if(on==0){
      noStroke();
    }
    else{
      strokeWeight(2)
      stroke(1);
    }
    fill("#004E4B");
    rect(this.x-50, this.y, 100, this.radius * 2);
    noStroke();
    fill(0);
    textSize(10);
    textAlign(CENTER, CENTER);
    fill("#FFB81C");
    textFont(myFont2);
    textSize(25);
    text(text1, this.x, this.y+20);
    textFont(myFont);
    strokeWeight(2);
    stroke(200);
    line(this.x, this.y, nx, ny);
    noStroke(); 
  }
  }
 function keyPressed(){
  if(click<=2){
    key1=1;
    
  }
 }
 function keyReleased(){
  if(click<=2){
    key1=0;
  }
 }
function draw() {

  background("#004E4B");
  textSize(80);
  if(click==1){
    fill("#FFB81C");
  }
//  image(gmail, 800, 0);
  textFont(myFont2);
  strokeWeight(4);
  text("HELLO", (window.innerWidth/2)-300+TextX, (window.innerHeight/2)+30)
  text("WELCOME TO ", (window.innerWidth)+TextA, (window.innerHeight/2)-200)
  text("ARSHAD's", (window.innerWidth)+TextB, (window.innerHeight/2)+40)
  strokeWeight(13);
  text("Website", (window.innerWidth)+TextC, (window.innerHeight/2)+200)
  // We will keep how far the vertices are from their target
  let totalDistance = 0;
  noStroke();
  fill("#FFB81C");
  rect(window.innerWidth/2, -1000, window.innerWidth, window.innerHeight+enterX);
  if(start==0&&click==0){
    image(clickimg,window.innerWidth/2-50,window.innerHeight/2-60);
  }
  if(start==1&&click==0){
  fill("#FFB81C");
  text("CLICK!",window.innerWidth/2+100,window.innerHeight/2-100);
  }

 if(click==1){
  noStroke();
  enterX+=50;
  TextX+=2;
  if(changeA==0){
    TextA-=5;
  //  size-=0.5;
  }
  else{
    TextA+=4;
    
  }
 }


 if(changeA==1&&changeB==0){
  TextB-=5;
  
 }
 if((window.innerWidth+TextB)<=0){
  changeB=1;
 
 }
 if(changeB==1){
  TextB+=4;
 }
if(changeB==1&&changeC==0){
  TextC-=5;
  ellipse((window.innerWidth/2)-200, (window.innerHeight/2)-220,size,size);
  
 }
 if((window.innerWidth+TextC)<=0){
  changeC=1;
 
 }
if(changeC==1){
  TextC+=5;
  ellipse((window.innerWidth/2)-200, (window.innerHeight/2)-220,size,size);
}
 if(changeC==1&&TextC<-240){
  
  fill("#004E4B");
 // rect(900,(window.innerHeight/2)-220,150,50);

  ellipse((window.innerWidth/2)+200, (window.innerHeight/2)-220,size,size);
 }
 else if(changeC==1&&TextC<-150){
  fill("#004E4B");
  rect((window.innerWidth/2)+200,(window.innerHeight/2)-220,100,40);
 }
 else if(changeC==1&&click!=2){
  fill(1);
  textSize(25);
  text("press any key to wink",window.innerWidth-200,100);
  fill("#004E4B");
  if(key1==0){
    ellipse((window.innerWidth/2)+200, (window.innerHeight/2)-220,size,size);
  }
  else{
    fill("#004E4B");
  rect((window.innerWidth/2)+200,(window.innerHeight/2)-220,100,40);
  }
  if(over==1){
  strokeWeight(2);
  stroke(1);
  }
  else{
    noStroke();
  }
  triangle((window.innerWidth-200)+mx, window.innerHeight-100, (window.innerWidth-200)+mx, window.innerHeight-150, (window.innerWidth-150)+mx, window.innerHeight-125);
  if(rev==false){
    mx+=0.5;
    if(mx>=10){
      rev=true;
    }
  }
  if(rev==true){
    mx-=0.5;
    if(mx==0){
      rev=false;
    }
  }

  
      if (
    mouseX >= (window.innerWidth-200) &&
    mouseX <= (window.innerWidth-100)&&
    mouseY >= window.innerHeight-200 &&
    mouseY <= window.innerHeight-100
  ){
    over=1;
    if(mouseIsPressed==true){
    click=2;
  }
      }
      else{
        over=0;
      }
 }


if(click==2){
  fill("#FFB81C");
  rect(-window.innerWidth+mx,0, window.innerWidth, window.innerHeight);
  if(mx-window.innerWidth<-window.innerWidth/2){
    mx+=10;
  }
  main=1;
  smile=0;
}

if(main==1&&click==2){
  squareColor = color(0);
  squareColor.setAlpha(50);
  fill(squareColor);
  textSize(100);
  textAlign(CENTER,CENTER);
  text("ARSHAD's WEBSITE :)", (window.innerWidth/2), (window.innerHeight/2))
  textSize(25);
  squareColor.setAlpha(200);
  fill(squareColor);
  text("Click and hold on the box to reveal",window.innerWidth/2-600,220);

  noFill();
  strokeWeight(2);
  stroke(0);
  arc(window.innerWidth/2-550, 200, 70, 70, PI, PI + QUARTER_PI);
  noStroke();
  fill("#004E4B");
  s1.update(hitX, hitY);
  s1.display(250, 0);
//first dangle
  if (
    mouseX >= hitX-50 &&
    mouseX <= hitX+50&&
    mouseY >= hitY-20+120 &&
    mouseY <= hitY+20+200
  ){ on=1;
    a=1;
   // stroke(1);
   // noFill();
   // rect(hitX,hitY,100,100);
    noStroke();
    if(mouseIsPressed==true){
      hitX=mouseX;
      hitY=mouseY+pull;
      pull+=5;

    }
    else{
      pull=0;
    }
    if(pull>=300){
      click=3;
    }
   // hitX=random(-1,1)*hitX;
   // hitY=random(-1,1)*hitY;
    norm=1;  
  }
  else if(norm==1){
    norm==0;
    hitX=250;
    hitY=0;
    on=0;
    a=0;
  }
  else{
    a=0;
    on=0;
  }
  fill("#004E4B");
  quad(200, 0, 300, 0, 280+smile, 20,220+smile, 20 );
/*
        if (
    mouseX >= 200 &&
    mouseX <= 300&&
    mouseY >= 0 &&
    mouseY <= 30
  ){    //smile=20;
       // rect(100,100,100,100);
      if(mouseIsPressed==true){
      click=3;

        }
    
  } */ //QUAD CLICK FOR TEST
if( mouseX >= hitX+20 &&
    mouseX <= hitX+80&&
    mouseY >= hitY-20+150 &&
    mouseY <= hitY+20+200){
  if(mouseIsPressed==true)
  {
    hitX-=120;
    hitY-=100;
  }
  
}
if( mouseX >= hitX-80 &&
    mouseX <= hitX-20&&
    mouseY >= hitY-20+150 &&
    mouseY <= hitY+20+200){
  if(mouseIsPressed==true)
  {
    hitX+=120;
    hitY-=100;
  }
  }
//PROJECTS
  s2.update(hitX1, hitY1);
  s2.display(window.innerWidth-250, 0);
  if (
    mouseX >= hitX1-50 &&
    mouseX <= hitX1+50&&
    mouseY >= hitY1-20+150 &&
    mouseY <= hitY1+20+200
  ){  on=1;
      b=1;
    if(mouseIsPressed==true){
      hitX1=mouseX;
      hitY1=mouseY+pull;
      pull+=5;

    }
    else{
      pull=0;
    }
    if(pull>=300){
      click=6;
    }
   // hitX=random(-1,1)*hitX;
   // hitY=random(-1,1)*hitY;
    norm=1;  
  }
  else if(norm==1){
    norm==0;
    hitX1=window.innerWidth-250;
    hitY1=0;
     on=0;
     b=0;
  }
  else{
    on=0;
    b=0;
  }
  if( mouseX >= hitX1+20 &&
    mouseX <= hitX1+50&&
    mouseY >= hitY1-20+150 &&
    mouseY <= hitY1+20+200){
  if(mouseIsPressed==true)
  {
    hitX1-=250;
    hitY1-=100;
  }
  
}
  if( mouseX >= hitX1-50 &&
    mouseX <= hitX1-20&&
    mouseY >= hitY1-20+150 &&
    mouseY <= hitY1+20+200){
  if(mouseIsPressed==true)
  {
    hitX1+=250;
    hitY1-=100;
  }
  
}
  fill("#004E4B");
  quad(window.innerWidth-300, 0, window.innerWidth-200, 0, window.innerWidth-220, 20,window.innerWidth-280, 20 );

        if (
    mouseX >= window.innerWidth-300 &&
    mouseX <= window.innerWidth-200&&
    mouseY >= 0 &&
    mouseY <= 30
  ){    smile=20;
       // rect(100,100,100,100);
      if(mouseIsPressed==true){
      click=6;

        }
    
  }
  fill("#004E4B");
  rect(window.innerWidth/2-150,window.innerHeight/2+300-20,320,400);
  image(gmail, window.innerWidth/2-100, window.innerHeight/2+240+70-20); 
  image(git, window.innerWidth/2, window.innerHeight/2+240+70-20);
  image(cv, window.innerWidth/2+100, window.innerHeight/2+240+70-20);
  //gmail
  if( mouseX >= window.innerWidth/2-100 &&
    mouseX <= window.innerWidth/2-100+32&&
    mouseY >= window.innerHeight/2+240+70-20 &&
    mouseY <= window.innerHeight/2+240+32+70-20){
    stroke("#FFB81C");
    noFill();
    rect(window.innerWidth/2-100-4,window.innerHeight/2+240+70-20,40,32)
  if(mouseIsPressed==true)
  {
    window.open("mailto:arshad19300@iiitd.ac.in");
  }
  
} 
//git
  if( mouseX >= window.innerWidth/2 &&
    mouseX <= window.innerWidth/2+32&&
    mouseY >= window.innerHeight/2+240+70-20 &&
    mouseY <= window.innerHeight/2+240+32+70-20){
    stroke("#FFB81C");
    noFill();
    rect(window.innerWidth/2-4,window.innerHeight/2+240+70-20,40,32)
  if(mouseIsPressed==true)
  {
    window.open("https://github.com/arshadx6");
  }
  
}
//CV
  if( mouseX >= window.innerWidth/2+100 &&
    mouseX <= window.innerWidth/2+100+32&&
    mouseY >= window.innerHeight/2+240+70-20 &&
    mouseY <= window.innerHeight/2+240+32+70-20)
  {
    stroke("#FFB81C");
    noFill();
    rect(window.innerWidth/2+100-4,window.innerHeight/2+240+70-20,40,32)
  if(mouseIsPressed==true)
  {
    window.open("https://drive.google.com/file/d/1QZp6gCO9zWf2jiKisu-VmiiAZL9PHK43/view?usp=sharing");

  }
  
}

}
if(click==3){

  if(imgY<580){
    imgY+=5;
  }
  else{
    done=1;
  }
  fill("#FFB81C");
  rect(0,0,window.innerWidth,window.innerHeight);
  fill("#004E4B");
  quad(200, 0+sliderY, 300, 0+sliderY, 280, 20+sliderY,220, 20+sliderY );
  squareColor = color(0);
  squareColor.setAlpha(80);
  fill(squareColor);
  rect(0,0,window.innerWidth,window.innerHeight);
  fill("#004E4B");
  rect(200,-1000+smile,window.innerWidth-370,window.innerHeight-100);
  if((20+sliderY)<window.innerHeight-50){
    sliderY+=5;
  }
  //image(img, 100, 400);
  image(img, 300, -400+imgY);
  if((smile+-1000)<50){
    smile+=10;
  }
  if(done==1){
  fill("#FFB81C")
  textSize(30);
  textFont(myFont2);
  textAlign(LEFT, CENTER);
  if((smile+-1000)>=50){
    frameRate(25);
      text(
    sourceText.substring(0, curIndex+1),
    (width/2)-3, height/2);
  
  if (curIndex <= sourceText.length) {
    curIndex++;
  } 
  triangle(220, window.innerHeight-80+my, 280,window.innerHeight-80+my, 250,window.innerHeight-60+my );
  }
  
  if(rev2==false){
    my+=0.5;
    if(my>=2){
      rev2=true;
    }
  }
  if(rev2==true){
    my-=0.5;
    if(my==0){
      rev2=false;
    }
  }
  }


 if(
    mouseX >= 200 &&
    mouseX <= 300&&
    mouseY >= window.innerHeight-100 &&
    mouseY <= window.innerHeight-50
  )
      if(mouseIsPressed==true)
      {
        frameRate(120);
        click=4;

        }
}


if(click==4){
  fill("#FFB81C");
  rect(0,0,window.innerWidth,window.innerHeight);
  if(done!=2){
  squareColor = color(0);
  squareColor.setAlpha(80);
  fill(squareColor);
  rect(0,0,window.innerWidth,window.innerHeight);
  }

  fill("#004E4B");
  rect(200,-1000+smile,window.innerWidth-370,window.innerHeight-100);
  fill("#004E4B");

  quad(200, 0+sliderY, 300, 0+sliderY, 280, 20+sliderY,220, 20+sliderY );
  image(img, 200, -400+imgY);
  if(imgY>0){
    imgY-=5;
  }
  if(smile>20){
    smile-=10;
  }
  curIndex=0;
  if(sliderY>0){
    sliderY-=5;
    done=2;
  }
  if(sliderY<=0){
    click+=1;
  }
}


if(click==5){

  fill("#FFB81C");
  rect(0,0,window.innerWidth,window.innerHeight);
  fill("#004E4B");
  squareColor = color(0);
  squareColor.setAlpha(50);
  fill(squareColor);
  textSize(100);
  textAlign(CENTER,CENTER);
  text("ARSHAD's WEBSITE :)", (window.innerWidth/2), (window.innerHeight/2))
  textSize(25);
  squareColor.setAlpha(200);
  fill(squareColor);
  textFont(myFont2);
  text("Click and hold on the box to reveal",window.innerWidth/2-600,220);
  noFill();
  strokeWeight(2);
  stroke(0);
  arc(window.innerWidth/2-550, 200, 70, 70, PI, PI + QUARTER_PI);
  s1.update(hitX, hitY);
  s1.display(250, 0);
  if (
    mouseX >= hitX-20 &&
    mouseX <= hitX+20&&
    mouseY >= hitY-20+150 &&
    mouseY <= hitY+20+210
  ){ on=1;
    a=1;
    if(mouseIsPressed==true){
      hitX=mouseX;
      hitY=mouseY+pull;
      pull+=5;

    }
    else{
      pull=0;
    }
    if(pull>=300){
      click=3;
    }
   // hitX=random(-1,1)*hitX;
   // hitY=random(-1,1)*hitY;
    norm=1;  
  }
  else if(norm==1){
    norm==0;
    hitX=250;
    hitY=0;
    on=0;
    a=0;
  }
  else{
    a=0;
    on=0;
  }
  if( mouseX >= hitX+20 &&
    mouseX <= hitX+80&&
    mouseY >= hitY-20+150 &&
    mouseY <= hitY+20+200){
  if(mouseIsPressed==true)
  {
    hitX-=120;
    hitY-=100;
  }
  
}
if( mouseX >= hitX-80 &&
    mouseX <= hitX-20&&
    mouseY >= hitY-20+150 &&
    mouseY <= hitY+20+200){
  if(mouseIsPressed==true)
  {
    hitX+=120;
    hitY-=100;
  }
  
}
  fill("#004E4B");
  quad(200, 0+sliderY, 300, 0+sliderY, 280, 20+sliderY,220, 20+sliderY );
  done=1;
 /* if(
    mouseX >= 200 &&
    mouseX <= 300&&
    mouseY >= 0 &&
    mouseY <= 120
  )
      if(mouseIsPressed==true)
      {
      click=3;
      } */ //for check

 s2.update(hitX1, hitY1);
s2.display(window.innerWidth-250, 0);
  if (
    mouseX >= hitX1-50 &&
    mouseX <= hitX1+50&&
    mouseY >= hitY1-20+150 &&
    mouseY <= hitY1+20+200
  ){ on=1;
    b=1;
    if(mouseIsPressed==true){
      hitX1=mouseX;
      hitY1=mouseY+pull;
      pull+=5;

    }
    else{
      pull=0;
    }
    if(pull>=300){
      click=6;
    }
   // hitX=random(-1,1)*hitX;
   // hitY=random(-1,1)*hitY;
    norm=1;  
  }
  else if(norm==1){
    norm==0;
    hitX1=window.innerWidth-250;
    hitY1=0;
    on=0;
    b=0;
  }
  else{
    on=0;
    b=0;
  }
    if( mouseX >= hitX1+20 &&
    mouseX <= hitX1+50&&
    mouseY >= hitY1-20+150 &&
    mouseY <= hitY1+20+200){
  if(mouseIsPressed==true)
  {
    hitX1-=250;
    hitY1-=100;
  }
  
}
  if( mouseX >= hitX1-50 &&
    mouseX <= hitX1-20&&
    mouseY >= hitY1-20+150 &&
    mouseY <= hitY1+20+200){
  if(mouseIsPressed==true)
  {
    hitX1+=250;
    hitY1-=100;
  }
  
}
  fill("#004E4B");
  quad(window.innerWidth-300, 0, window.innerWidth-200, 0, window.innerWidth-220, 20,window.innerWidth-280, 20 );

        if (
    mouseX >= window.innerWidth-300 &&
    mouseX <= window.innerWidth-200&&
    mouseY >= 0 &&
    mouseY <= 30
  ){ 
       // rect(100,100,100,100);
      if(mouseIsPressed==true){
      click=6;

        }
    
  }
 fill("#004E4B");
  rect(window.innerWidth/2-150,window.innerHeight/2+300-20,320,400);
  image(gmail, window.innerWidth/2-100, window.innerHeight/2+240+70-20); 
  image(git, window.innerWidth/2, window.innerHeight/2+240+70-20);
  image(cv, window.innerWidth/2+100, window.innerHeight/2+240+70-20);
  //gmail
  if( mouseX >= window.innerWidth/2-100 &&
    mouseX <= window.innerWidth/2-100+32&&
    mouseY >= window.innerHeight/2+240+70-20 &&
    mouseY <= window.innerHeight/2+240+32+70-20){
    stroke("#FFB81C");
    noFill();
    rect(window.innerWidth/2-100-4,window.innerHeight/2+240+70-20,40,32)
  if(mouseIsPressed==true)
  {
    window.open("mailto:arshad19300@iiitd.ac.in");
  }
  
} 
//git
  if( mouseX >= window.innerWidth/2 &&
    mouseX <= window.innerWidth/2+32&&
    mouseY >= window.innerHeight/2+240+70-20 &&
    mouseY <= window.innerHeight/2+240+32+70-20){
    stroke("#FFB81C");
    noFill();
    rect(window.innerWidth/2-4,window.innerHeight/2+240+70-20,40,32)
  if(mouseIsPressed==true)
  {
    window.open("https://github.com/arshadx6");
  }
  
}
//CV
  if( mouseX >= window.innerWidth/2+100 &&
    mouseX <= window.innerWidth/2+100+32&&
    mouseY >= window.innerHeight/2+240+70-20 &&
    mouseY <= window.innerHeight/2+240+32+70-20)
  {
    stroke("#FFB81C");
    noFill();
    rect(window.innerWidth/2+100-4,window.innerHeight/2+240+70-20,40,32)
  if(mouseIsPressed==true)
  {
    window.open("https://drive.google.com/file/d/1QZp6gCO9zWf2jiKisu-VmiiAZL9PHK43/view?usp=sharing");

  }
  
}        
}



if(changeC==1&&TextC==-600){
  smile=1;
}
if(smile==1&&click<2){
  noStroke();
  fill("#FFB81C");  
  arc((window.innerWidth/2), 400, 500, 200, PI/2, PI);
   fill("#004E4B");
  arc((window.innerWidth/2), 400, 500, 200, 2*PI, PI/2);
}
 if(click==1&&(window.innerWidth+TextA)<=0)
  { 
    changeA=1;
    TextB-=200;
    
  }

  if(click==6)
  {
  if(imgY<550){
    imgY+=5;
  }
  else{
    done=2;
  }
  fill("#FFB81C");
  rect(0,0,window.innerWidth,window.innerHeight);
  fill("#004E4B");
  quad(innerWidth-300, 0+sliderY, innerWidth-200, 0+sliderY, innerWidth-220, 20+sliderY,innerWidth-280, 20+sliderY );
  squareColor = color(0);
  squareColor.setAlpha(80);
  fill(squareColor);
  rect(0,0,window.innerWidth,window.innerHeight);
  fill("#004E4B");
  rect(200,-1000+smile,window.innerWidth-370,window.innerHeight-100);
  if((20+sliderY)<window.innerHeight-50){
    sliderY+=5;
  }
  //image(img, 100, 400);
  image(img2, 400, -400+imgY);
  image(img3,(200+window.innerWidth-370)/2+80, -400+imgY+20);
  image(img4, (200+window.innerWidth-370)/2 + 350+40+15,-400+imgY);
  //FUGO
  if(
    mouseX >= 400 &&
    mouseX <= 400+108&&
    mouseY >= -400+imgY &&
    mouseY <= -400+imgY+120
    ){
    fill("#FFB81C");  
    rect(350,-400+imgY+150,200,200);
    textSize(18);
    fill(1);
    textAlign(CENTER,CENTER);
    text(fugo,350+10+90,-400+imgY+250);

    if(mouseIsPressed==true)
      {
        window.open("https://linktr.ee/fugo_initiative");

        }

  }
//ALFA
    if(
    mouseX >= (200+window.innerWidth-370)/2+80 &&
    mouseX <= (200+window.innerWidth-370)/2+80+94&&
    mouseY >= -400+imgY+20 &&
    mouseY <= -400+imgY+120
    ){
    fill("#FFB81C");  
    rect((200+window.innerWidth-370)/2+10,-400+imgY+150,200,200);
    textSize(18);
    fill(1);
    textAlign(CENTER,CENTER);
    text(alfa,(200+window.innerWidth-370)/2+100+10,-400+imgY+250);
    if(mouseIsPressed==true)
      {
        window.open("https://1-alfa-1.netlify.app/");

        }

  }
//COLOR SWITCH REMAKE
    if(
    mouseX >= (200+window.innerWidth-370)/2 + 350+40+15 &&
    mouseX <= (200+window.innerWidth-370)/2 + 350+100+15&&
    mouseY >= -400+imgY &&
    mouseY <= -400+imgY+120
    ){
    fill("#FFB81C");  
    rect((200+window.innerWidth-370)/2 + 350,-400+imgY+150,200,200);
    textSize(18);
    fill(1);
    textAlign(CENTER,CENTER);
    text(color1,(200+window.innerWidth-370)/2 + 350+100,-400+imgY+250);
    if(mouseIsPressed==true)
      {
        window.open("https://github.com/arshadx6/APfinalProject");
        }

  }

  if((smile+-1000)<50){
    smile+=10;
  }
  if(done==2){
  
  fill("#FFB81C")
  triangle(window.innerWidth-280, window.innerHeight-80+my, window.innerWidth-220,window.innerHeight-80+my, window.innerWidth-250,window.innerHeight-60+my );
  textSize(30);
  textFont(myFont2);
  textAlign(LEFT, CENTER);
  if((smile+-1000)>=50){
    frameRate(25);
      text(
    sourceText2.substring(0, curIndex+1),
    (200+window.innerWidth-370)/2, height/2-250);
  
  if (curIndex <= sourceText.length) {
    curIndex++;
    } 
  }
  }
   if(
    mouseX >= window.innerWidth-300 &&
    mouseX <= window.innerWidth-200&&
    mouseY >= window.innerHeight-80 &&
    mouseY <= window.innerHeight-60 
      )
      if(mouseIsPressed==true)
      {
        frameRate(120);
        click=7;

        }

if(rev2==false)
{
    my+=0.5;
    if(my>=2)
    {
      rev2=true;
    }
}
  if(rev2==true)
  {
    my-=0.5;
    if(my==0){
      rev2=false;
    }
  }
  
}
  if(a==1&&click!=3&&click!=4){
    textFont(myFont2);
  textSize(30);
  fill(1);
  text("come here next!",window.innerWidth/2+350,200);
  fill("FFB81C");
  }
  if(b==1&&click!=6&&click!=7){
    textFont(myFont2);
  textSize(30);
  fill(1);
  text("come here next!",window.innerWidth/2-350,200);
  fill("FFB81C");
  }
if(click==7){
  fill("#FFB81C");
  rect(0,0,window.innerWidth,window.innerHeight);
  if(done!=2){
  squareColor = color(0);
  squareColor.setAlpha(80);
  fill(squareColor);
  rect(0,0,window.innerWidth,window.innerHeight);
  }

  fill("#004E4B");
  rect(200,-1000+smile,window.innerWidth-370,window.innerHeight-100);
  fill("#004E4B");

  quad(innerWidth-300, 0+sliderY, innerWidth-200, 0+sliderY, innerWidth-220, 20+sliderY,innerWidth-280, 20+sliderY );
  //image(img2, 250, -400+imgY);
  if(imgY>0){
    imgY-=5;
  }
  if(smile>20){
    smile-=10;
  }
  curIndex=0;
  if(sliderY>0){
    sliderY-=5;
    done=2;
  }
  if(sliderY<=0){
    click=5;
  }
}
  // Look at each vertex
  for (let i = 0; i < circle.length; i++) {
    let v1=square[i];
    // Are we lerping to the circle or square?
    if (state&&happen==1) {
      v1 = circle[i];
    } else {
      v1 = square[i];
    }
    // Get the vertex we will draw
    let v2 = morph[i];
    // Lerp to the target

    v2.lerp(v1, 0.1);
    // Check how far we are from target
    totalDistance += p5.Vector.dist(v1, v2);

  }


  // If all the vertices are close, switch shape
  if (totalDistance < 0.1) {
    if(happen==0){
      state = !state;
    }
    
  }

  // Draw relative to center
  translate(width / 2, height / 2);
  //strokeWeight(4);
  // Draw a polygon that makes up all the vertices
  if(click==0){
  beginShape();
  noFill();
  stroke("#FFB81C");

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
}
  
      if (
    mouseX >= (window.innerWidth/2)-50 &&
    mouseX <= (window.innerWidth/2)+50&&
    mouseY >= (window.innerHeight/2)-50 &&
    mouseY <= (window.innerHeight/2)+50
  ) {

  happen=1;
  TextX+=1;
  start=1;

  if(mouseIsPressed==true){
    click=1;
    start=2;
  }

  }
  else{
    happen=0;
    if(click==0){
      TextX-=1;
    }
    start=0;
    
  }
}
//https://drive.google.com/file/d/1QZp6gCO9zWf2jiKisu-VmiiAZL9PHK43/view?usp=sharing