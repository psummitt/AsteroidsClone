const FPS = 30; // frames per second
const SHIP_SIZE = 30; // ship height in pixels


/** @type {HTMLCanvasElement'} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

var ship = {
    x: canv.width / 2,
    y: canv.height / 2,
    r: SHIP_SIZE / 2,
    a: 90 /180 * Math.PI // convert to radians
}

// set up the game loop
setInterval(update, 1000/FPS);

function update() {
    // draw space
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // draw ship
    ctx.strokeStyle


    // rotate ship

    // move ship 
}