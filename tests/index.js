// reset body paading and margin

document.querySelector("body").style.padding=0;
document.querySelector("body").style.margin=0;
document.querySelector("body").style.overflow = "hidden";


const canvas = document.querySelector(".canvas");
// gl api
const gl = canvas.getContext("2d");

// width and height for canvas
const height = window.innerHeight;
const width = window.innerWidth; 

canvas.width = width;
canvas.height = height;

// Set CSS display size
canvas.style.width = width + "px"; 
canvas.style.height = height + "px"; 
canvas.style.backgroundColor = "yellow";

//  default ball
function drawBall(ball_x_pos, ball_y_pos, ball_radius, ball_color) {
    gl.beginPath();
    gl.arc(ball_x_pos, ball_y_pos, ball_radius, 0, Math.PI * 2);
    gl.fillStyle = ball_color;
    gl.fill();
    gl.stroke();
    gl.closePath();
}

// Corrected function call (Positional arguments only)
drawBall(200+count, 200+count, 40, "red")

// for (let count = 0; count < 10; i++) {

//     drawBall(200+count, 200+count, 40, "red");
    
//     count+=1;
// }

