var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;

var canvas = document.getElementById("drawingPad");
var ctx = canvas.getContext("2d");
var isMouseDown = false;
var mouseX = 0;

ctx.strokeStyle = "#000000"; // drawing black lines.

// make sure the canvas' background is actually white for saving.
ctx.fillStyle = "#FCF0AD";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// when the user presses their mouse down on the canvas.
canvas.addEventListener("mousedown", function (evt) {
    isMouseDown = true;

    mouseX = evt.offsetX;
    mouseY = evt.offsetY;

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
});

// when the user lifts their mouse up anywhere on the screen.
window.addEventListener("mouseup", function (evt) {
    isMouseDown = false;
});

// as the user moves the mouse around.
canvas.addEventListener("mousemove", function (evt) {
    if (isMouseDown) {
        mouseX = evt.offsetX;
        mouseY = evt.offsetY;

        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
});

/*var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function (evt) {
    canvas.width = canvas.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    ctx.fillStyle = "#FCF0AD";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});*/

// swatch interactivity
var palette = document.getElementById("palette");
var swatches = palette.children;
var currentSwatch; // we'll keep track of what swatch is active in this.

for (var i = 0; i < swatches.length; i++) {
    var swatch = swatches[i];
    if (i === 0) {
        currentSwatch = swatch;
    }

    // when we click on a swatch...
    swatch.addEventListener("click", function (evt) {

        this.className = "active"; // give the swatch a class of "active", which will trigger the CSS border.
        currentSwatch.className = ""; // remove the "active" class from the previously selected swatch
        currentSwatch = this; // set this to the current swatch so next time we'll take "active" off of this.

        ctx.strokeStyle = this.style.backgroundColor; // set the background color for the canvas.
    });
}


// SECOND DRAWING PAD


var canvas2 = document.getElementById("drawingPad2");
var ctx2 = canvas2.getContext("2d");
var isMouseDown2 = false;
var mouseX2 = 0;
var mouseY2 = 0;

ctx2.strokeStyle = "#000000"; // drawing black lines.

// make sure the canvas' background is actually white for saving.
ctx2.fillStyle = "#FCF0AD";
ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

// when the user presses their mouse down on the canvas.
canvas2.addEventListener("mousedown", function (evt) {
    isMouseDown2 = true;

    mouseX2 = evt.offsetX;
    mouseY2 = evt.offsetY;

    ctx2.beginPath();
    ctx2.moveTo(mouseX2, mouseY2);
});

// when the user lifts their mouse up anywhere on the screen.
window.addEventListener("mouseup", function (evt) {
    isMouseDown2 = false;
});

// as the user moves the mouse around.
canvas2.addEventListener("mousemove", function (evt) {
    if (isMouseDown2) {
        mouseX2 = evt.offsetX;
        mouseY2 = evt.offsetY;

        ctx2.lineTo(mouseX2, mouseY2);
        ctx2.stroke();
    }
});

// swatch interactivity
var palette2 = document.getElementById("palette2");
var swatches2 = palette2.children;
var currentSwatch2; // we'll keep track of what swatch is active in this.

for (var j = 0; j < swatches.length; j++) {
    var swatch2 = swatches2[j];
    if (j === 0) {
        currentSwatch2 = swatch2;
    }

    // when we click on a swatch...
    swatch2.addEventListener("click", function (evt) {

        this.className = "active"; // give the swatch a class of "active", which will trigger the CSS border.
        currentSwatch2.className = ""; // remove the "active" class from the previously selected swatch
        currentSwatch2 = this; // set this to the current swatch so next time we'll take "active" off of this.

        ctx2.strokeStyle = this.style.backgroundColor; // set the background color for the canvas.
    });
}

/*var clearBtn2 = document.getElementById("clear2");
clearBtn2.addEventListener("click", function (evt) {
    canvas.width = canvas.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    ctx.fillStyle = "#FCF0AD";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});*/
