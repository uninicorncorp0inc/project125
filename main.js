//Variables to set the nose position
noseX = 0 ;
noseY = 0 ;

//Variables to change the size of the square:
 leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    //Add code for accessing the webcam
    video = createCapture(VIDEO);
    video.size(550,500);
    //give size to the webcam
    
    

    //Add code for creating a canvas:
    canvas = createCanvas(500,500);
canvas.position(500,150);
    

    //Add code for initializing posenet:
   poseNet = ml5.poseNet(video, gotPoses);
poseNet.on('pose', gotPoses);
}



function draw(){
    background("#C8A2C9");
    //Color for the rectangle
   fill("#18FFFF");

    //Code for rectangle:
    rect(noseX,noseY, difference, 200);

}

//Define modelLoaded:
function modelLoaded(){
    console.log("model initialized ok!")
}

//Define function gotPoses:
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference = leftWristX-rightWristX;
}
}
