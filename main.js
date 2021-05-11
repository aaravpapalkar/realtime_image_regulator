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

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }
}
