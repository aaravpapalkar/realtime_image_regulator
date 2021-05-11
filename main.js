noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(575, 200);
    video = createCapture(VIDEO);
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("ModelLoaded!");
}

function draw() {
    background("gray");
    textSize(difference);
    document.getElementById("square_side").innerHTML = "Size of the text = " + difference + "px";
    fill("red");
    text("Aarav", noseX, noseY);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(Number(leftWristX) - Number(rightWristX));
    }
}
