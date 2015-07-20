var numPlayers = 2;
var playerName;
var roundNum;
var dict = {};
var datadict = {};
var turnVal;
var twiceNum;
var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;
//name input

function showInput(){
	
    console.log("Inside showInput function");
    numPlayers = document.getElementById("numPlayersID").value;
    console.log("Number of players: " + numPlayers);
    var playerNames = [];
    playerNames = document.getElementsByClassName("fname1");
    for (var i = 0; i < numPlayers; i++) {
        roundNum = i;
        playerName = playerNames[i].value; //get player name
        dict[playerName] = roundNum; //add player and turn number to dictionary

        console.log("Player Name: " + playerName);
        console.log("Turn number: " + i);
    }
    console.log(dict);
}

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
	numPlayers = 2;
	console.log("test: " + numPlayers);
	console.log(dict);
	for (var i = 0; i < numPlayers; i++) {
		//console.log("in send function for pad 1");
		console.log("beginning send");
        	roundNum = dict[i].value; //get player name
        	turnVal = canvas.toDataURL("image/jpeg");
        	datadict[roundNum] = turnVal; //add player and turn number to new dictionary
        	console.log(datadict);
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

// when the clear button is clicked
var clearBtn2 = document.getElementById("clear2");
clearBtn2.addEventListener("click", function (evt) {
    canvas2.width = canvas2.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    ctx2.fillStyle = "#FCF0AD";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
});

// when the save button is clicked
var clearBtn2 = document.getElementById("clear2");
clearBtn2.addEventListener("click", function (evt) {
    canvas.width = canvas.width; // this is all it takes to clear!

    // make sure the canvas' background is actually white for saving.
    ctx.fillStyle = "#FCF0AD";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

//send function
var sendBtn2 = function () {
sendBtn2.addEventListener("click", function (evt) {
	numPlayers = 2;
	console.log("test: " + numPlayers);
	console.log(dict);
	for (var i = 0; i < numPlayers; i++) {
		//console.log("in send function for pad 1");
		console.log("beginning send");
        	roundNum = dict[i].value; //get player name
        	turnVal = canvas.toDataURL("image/jpeg");
        	datadict[roundNum] = turnVal; //add player and turn number to new dictionary
        	console.log(datadict);
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

var saveBtn2 = document.getElementById("save2");
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

