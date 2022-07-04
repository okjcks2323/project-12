function preload(){}

function setup() {
    canvas = createCanvas(370, 370);
    canvas.center();
}
function draw(){
}

function take_snapshot(){
    save('my_image.png');}
    noseX=0;
noseY=0;
function preload(){
    clownNose=loadImage('https://i.postimg.cc/bv6hZM3P/clown-eyewear-nose.png');
    mask=loadImage('https://i.postimg.cc/FzFdvwWL/OIP-5-removebg-preview.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotpose);
}
function draw(){
image(video,0,0,300,300);
fill(25,25,112);
stroke(225,0,0);

//image(clownNose,noseX,noseY,90,90);
image(mask,noseX,noseY,100,130)
}
function takesnapshot(){
    save("aalu.png")
}
function modelloaded(){
    console.log("posenet is intialized");
}
function gotpose(results){
    if (results.length>0) {
        console.log(results);  
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x-40;
    noseY=results[0].pose.nose.y-55;
  }
}