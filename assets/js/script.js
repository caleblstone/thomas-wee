var canvas = document.createElement("canvas");
const dpr = window.devicePixelRatio;
canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;
document.getElementsByTagName("body")[0].appendChild(canvas);
var ctx = canvas.getContext("2d");
var pause = false;

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height); 
ctx.scale(dpr, dpr);
canvas.style.width = `${canvas.width / dpr}px`;
canvas.style.height = `${canvas.height / dpr}px`;


setInterval(function(){
    if(!pause)
        animate();   
}, 10000/500);

    var ptheta = 50;
    var theta = 50;
    var px = 0;
    var py = 0;
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var a = 0.3;

    var rand = 0;
    var angleVar = 0;


function animate(){
    rand = Math.random();
    angleVar = ((2*rand-1) * a * Math.PI);
    theta = ptheta + angleVar;
    px = x;
    py = y;
    r = Math.random() * 20;
    // Calculate new position
    let newX = px + r * Math.cos(ptheta);
    let newY = py + r * Math.sin(ptheta);

    // Clamp to stay within viewport
    newX = Math.max(0, Math.min(window.innerWidth, newX));
    newY = Math.max(0, Math.min(window.innerHeight, newY));

    x = newX;
    y = newY;
    ptheta = theta;
    
    //draw
    ctx.lineWidth = 1 //make this random
    ctx.beginPath()
    ctx.moveTo(px, py)
    ctx.strokeStyle = "#000" // fallback color
    ctx.lineTo(x, y)
    ctx.lineCap = "round"
    ctx.stroke()
}
