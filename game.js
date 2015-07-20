var numPlayers;
var playerName;
var roundNum;
var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;
var dict = {};
var datadict = {};
var turnVal;
var twiceNum;
//name input

function showInput(){
	
    console.log("Inside showInput function");
    numPlayers = document.getElementById("numPlayersID").value;
    console.log("Number of players: " + numPlayers);
    var playerNames = [];
    playerNames = document.getElementsByClassName("fname1");
    //console.log(playerNames);
    // console.log(playerNames[0]);
    // console.log(playerNames[0].value);
    for (var i = 0; i < numPlayers; i++) {
        roundNum = i;
        playerName = playerNames[i].value; //get player name
        dict[playerName] = roundNum; //add player and turn number to dictionary

        console.log("Player Name: " + playerName);
        console.log("Turn number: " + i);
    }
    console.log(dict);
}

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

//when Start Game in index.html is pressed
/*var startBtn = document.getElementById("Start the game");
startBtn.addEventListener("click", function (evt) {
	showInput();
});*/


// when the clear button is clicked
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function (evt) {
    canvas.width = canvas.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    ctx.fillStyle = "#FCF0AD";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// when the save button is clicked
var saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", function (evt) {
    // we'll save using the new HTML5 download attribute to save the image. 
    // we'll give the image a name of draw-[timestamp].jpg

    var now = new Date().getTime(); // get today's date in milliseconds.
    var dataUri = canvas.toDataURL("image/jpeg"); // get the canvas data as a JPG.

    // change the a href and download attributes so it'll save.
    this.setAttribute("download", "drawing-" + now + ".jpg");
    this.setAttribute("href", dataUri);

    // in older browsers you may need to substitute those last two lines of code with this:
    // window.open(dataUri,"_blank");
});

//send function
var sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", function (evt) {
	console.log("test: " + numPlayers);
	for (var i = 0; i < numPlayers; i++) {
		//console.log("in send function for pad 1");
		console.log("beginning send");
        	roundNum = roundNum[i].value; //get player name
        	turnVal = canvas.toDataURL("image/jpeg");
        	dict[roundNum] = turnVal; //add player and turn number to dictionary
        	var turnPic = document.createElement("turnPic");
        

		 //added in now
    		var img = document.getElementById('turnPic');
    		img.style.visibility = 'visible';
		//end edit
        	document.body.appendChild(turnPic);
        
        	console.log("end of first loop");
    	}//end of for loop
    
    	twiceNum = 2 * numPlayers;
    	
    	//text pull
    	for (var k = 0; k < twiceNum; k++) {
	 	roundNum = roundNum[k].value; 
        	console.log(roundNum);
    	}//end of for loop
    	
    	//console.log("sent");
	console.log("end of send");   
	console.log(dict);
});


// SECOND DRAWING PAD


var canvas2 = document.getElementById("drawingPad2");
var ctx2 = canvas2.getContext("2d");
var isMouseDown2 = false;
var mouseX2 = 0;
var mouseY2 = 0;

/*
//send button variables
var turn2 = 1;
var dict2 = [];
var turn12 = 1;
var turn22 = 2;
*/

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

// when the clear button is clicked
var clearBtn2 = document.getElementById("clear2");
clearBtn2.addEventListener("click", function (evt) {
    canvas2.width = canvas2.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    ctx2.fillStyle = "#FCF0AD";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
});

// when the save button is clicked
var saveBtn2 = document.getElementById("save2");

//send function
var sendBtn2 = function () {
    if (turn2 === 0) {
        turn2++;
        dict2.push({
            player: drawing - now.jpg
        });
        // replace screen with pushed image, and add textbox

        //next player would see text box and an empty post-it
    } else {
        turn2 = 0 + numPlayers;
        //only works for first player
        //must change to dict[player, numofPlayer]
    }
};

saveBtn2.addEventListener("click", function (evt) {
    // we'll save using the new HTML5 download attribute to save the image. 
    // we'll give the image a name of draw-[timestamp].jpg

    var now2 = new Date().getTime(); // get today's date in milliseconds.
    var dataUri2 = canvas2.toDataURL("image/jpeg"); // get the canvas data as a JPG.

    // change the a href and download attributes so it'll save.
    this.setAttribute("download", "drawing-" + now + ".jpg");
    this.setAttribute("href", dataUri);

    // in older browsers you may need to substitute those last two lines of code with this:
    // window.open(dataUri,"_blank");
});

