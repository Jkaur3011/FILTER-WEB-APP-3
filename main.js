eyeleftx = 0;
eyelefty = 0;
eyerightx = 0;
eyerighty = 0;

function preload() {
    image_load1 = loadImage("https://i.postimg.cc/MpVG92c2/blue1.gif");
    image_load2 = loadImage("https://i.postimg.cc/266rRP55/blue2.png");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    capture = createCapture(VIDEO);
    capture.hide();

    pN = ml5.poseNet(capture, VideoLoaded);
    pN.on('pose', gotPOSES);
}

function gotPOSES(pose_result) {
    //console.log(pose_result);

    eyeleftx = pose_result[0].pose.leftEye.x;
    eyelefty = pose_result[0].pose.leftEye.y;

    console.log("el"+eyelefty);
    eyerightx = pose_result[0].pose.rightEye.x;
    eyerighty = pose_result[0].pose.rightEye.y;
    console.log("er"+eyerighty);

}

function draw() {
    image(capture, 0, 0, 380, 380);
    image(image_load1, eyeleftx - 200, eyelefty - 70, 30, 30);
    image(image_load2, eyerightx - 95, eyerighty - 70, 30, 30);

}

function VideoLoaded() {
    console.log("Your video has been loaded!");
}



function Take_MP() {
save("eyeshadowpic.jpg");
}