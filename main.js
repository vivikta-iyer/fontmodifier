difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('poseNet is initialised');
}


function gotPoses(results){
   if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
   }
    
}
function draw(){
    background("#969A97")
    document.getElementById('square_side').innerHTML='font size will be = '+ difference +'px';
    fill('violet');
stroke('pink');
textSize(difference);
text('word',50,400);
}