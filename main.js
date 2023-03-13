objects = [];
status = "";
input = "";
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

function preload(){
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    input = document.getElementById("input").value;
    console.log(input);
}

function modelLoaded(){
    console.log("Model Loaded...");
    status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}