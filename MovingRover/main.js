

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

var background_image = "mars.jpg";
var rover_image = "rover.png";
var rover_x = 10;
var rover_y = 10;
var rover_width = 40;
var rover_height = 40;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d'); 

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function up()
{
    if(rover_y>=0);
    {
        rover_y =rover_y-10;
        console.log("When W is pressed" + rover_x+" - "+rover_y);
        uploadBackground()
        uploadrover()
    }
}
//completes here
function down(){
if (rover_y<=500){
    rover_y = rover_y+10;
    console.log("When S is pressed" + rover_x + " - " + rover_y);
    uploadBackground()
    uploadrover()
}
}
//completes here
function left(){
    if (rover_x>=0){
        rover_x = rover_x-10;
        console.log("When A is pressed" + rover_x + " - " + rover_y);
        uploadBackground()
        uploadrover()
    }

}

//completes here

function right(){
    if (rover_x<=800){
        rover_x = rover_x+10;
        console.log("When D is pressed" + rover_x + " - " + rover_y);
        uploadBackground()
        uploadrover()
    }

}

//completes here

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '87'){
        up();
        console.log("W-87-UP");
    }
    if(keyPressed == '83'){
        down();
        console.log("S-87-DOWN");
    }
    if(keyPressed == '65'){
        left();
        console.log("A-65-LEFT");
    }
    if(keyPressed == '68'){
        right();
        console.log("D-68-RIGHT");
    }

}

