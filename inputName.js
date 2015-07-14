var dict = {};
var numPlayers;
var playerName;
var roundNum;
//name input
function showInput() {
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
