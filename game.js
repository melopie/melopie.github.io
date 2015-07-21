var canvas = document.getElementById("drawingPad");
var context = canvas.getContext("2d");
var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;

context.strokeStyle = "#000000"; // drawing black lines.

// make sure the canvas' background is actually white for saving.
context.fillStyle = "#fcf0ad";
context.fillRect(0,0,canvas.width,canvas.height);

// when the user presses their mouse down on the canvas.
canvas.addEventListener("mousedown",function (evt) {
    isMouseDown = true;

    mouseX = evt.offsetX;
    mouseY = evt.offsetY;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
});

// when the user lifts their mouse up anywhere on the screen.
window.addEventListener("mouseup",function (evt) {
    isMouseDown = false;
});

// as the user moves the mouse around.
canvas.addEventListener("mousemove",function (evt) {
    if (isMouseDown) {
        mouseX = evt.offsetX;
        mouseY = evt.offsetY;

        context.lineTo(mouseX, mouseY);
        context.stroke();
    }
});

// swatch interactivity
var palette = document.getElementById("palette");
var swatches = palette.children;
var currentSwatch; // we'll keep track of what swatch is active in this.

for (var i = 0; i < swatches.length; i++) {
    var swatch = swatches[i];
    if (i == 0) {
        currentSwatch = swatch;
    }

    // when we click on a swatch...
    swatch.addEventListener("click",function (evt) {

        this.className = "active"; // give the swatch a class of "active", which will trigger the CSS border.
        currentSwatch.className = ""; // remove the "active" class from the previously selected swatch
        currentSwatch = this; // set this to the current swatch so next time we'll take "active" off of this.

        context.strokeStyle = this.style.backgroundColor; // set the background color for the canvas.
    });
}

// when the clear button is clicked
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click",function(evt) {
    canvas.width = canvas.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    context.fillStyle = "#ffffff";
    context.fillRect(0,0,canvas.width,canvas.height);
});

// when the save button is clicked
var saveBtn = document.getElementById("save");
saveBtn.addEventListener("click",function (evt) {
    // we'll save using the new HTML5 download attribute to save the image. 
    // we'll give the image a name of draw-[timestamp].jpg

    var now = new Date().getTime(); // get today's date in milliseconds.
    var dataUri = canvas.toDataURL("image/jpeg");  // get the canvas data as a JPG.

    // change the a href and download attributes so it'll save.
    this.setAttribute("download","drawing-" + now + ".jpg");
    this.setAttribute("href",dataUri);

    // in older browsers you may need to substitute those last two lines of code with this:
    // window.open(dataUri,"_blank");
});

//when the send button is clicked
var sendBtn = document.getElementById("send");
sendBtn.addEvenListener("click",function (evt) {
	console.log("send clicked");
});
// SECOND DRAWING PAD

var canvas2 = document.getElementById("drawingPad2");
var context2 = canvas2.getContext("2d");
var isMouseDown2 = false;
var mouseX2 = 0;
var mouseY2 = 0;

context2.strokeStyle = "#000000"; // drawing black lines.

// make sure the canvas' background is actually white for saving.
context2.fillStyle = "#fcf0ad";
context2.fillRect(0,0,canvas2.width,canvas2.height);

// when the user presses their mouse down on the canvas.
canvas2.addEventListener("mousedown",function (evt) {
    isMouseDown2 = true;

    mouseX2 = evt.offsetX;
    mouseY2 = evt.offsetY;

    context2.beginPath();
    context2.moveTo(mouseX2, mouseY2);
});

// when the user lifts their mouse up anywhere on the screen.
window.addEventListener("mouseup",function (evt) {
    isMouseDown2 = false;
});

// as the user moves the mouse around.
canvas2.addEventListener("mousemove",function (evt) {
    if (isMouseDown2) {
        mouseX2 = evt.offsetX;
        mouseY2 = evt.offsetY;

        context2.lineTo(mouseX2, mouseY2);
        context2.stroke();
    }
});

// swatch interactivity
var palette2 = document.getElementById("palette2");
var swatches2 = palette2.children;
var currentSwatch2; // we'll keep track of what swatch is active in this.

for (var j = 0; j < swatches2.length; j++) {
    var swatch2 = swatches2[j];
    if (j === 0) {
        currentSwatch2 = swatch2;
    }

    // when we click on a swatch...
    swatch2.addEventListener("click",function (evt) {

        this.className = "active"; // give the swatch a class of "active", which will trigger the CSS border.
        currentSwatch2.className = ""; // remove the "active" class from the previously selected swatch
        currentSwatch2 = this; // set this to the current swatch so next time we'll take "active" off of this.

        context2.strokeStyle = this.style.backgroundColor; // set the background color for the canvas.
    });
}

// when the clear button is clicked
var clearBtn2 = document.getElementById("clear2");
clearBtn2.addEventListener("click",function(evt) {
    canvas2.width = canvas2.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    context2.fillStyle = "#ffffff";
    context2.fillRect(0,0,canvas2.width,canvas2.height);
});

// when the save button is clicked
var saveBtn2 = document.getElementById("save2");
saveBtn2.addEventListener("click",function (evt) {
    // we'll save using the new HTML5 download attribute to save the image. 
    // we'll give the image a name of draw-[timestamp].jpg

    var now2 = new Date().getTime(); // get today's date in milliseconds.
    var dataUri2 = canvas2.toDataURL("image/jpeg");  // get the canvas data as a JPG.

    // change the a href and download attributes so it'll save.
    this.setAttribute("download","drawing-" + now + ".jpg");
    this.setAttribute("href",dataUri2);

    // in older browsers you may need to substitute those last two lines of code with this:
    // window.open(dataUri,"_blank");
});

var sendBtn2 = document.getElementById("send2");
sendBtn2.addeEventListener("click", function (evt) {
	console.log("send2 clicked");
});


