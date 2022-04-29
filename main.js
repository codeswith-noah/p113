
function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 30, 30, 420, 320);
    ellipse(40, 40, 50);
    ellipse(460, 40, 50);
    ellipse(40, 360, 50);
    ellipse(460, 360, 50);
    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot(){
    save("pic.png");
}