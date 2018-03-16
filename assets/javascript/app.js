//firebase project: https://console.firebase.google.com/u/0/project/super-rps/overview

var config = {
    apiKey: "AIzaSyC__N1Rj0HNTIEclPkStiVVWBQHGfCoDzo",
    authDomain: "super-rps.firebaseapp.com",
    databaseURL: "https://super-rps.firebaseio.com",
    projectId: "super-rps",
    storageBucket: "super-rps.appspot.com",
    messagingSenderId: "301134933896"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//two players (add play computer option?)
var wins = 0
var losses = 0
var draws = 0
var pOneGuess = ""
var pTwoGuess = ""


// update page to show other choices
database.ref().on("choice", function(snapshot){
  if (snapshot.child("pTwoChoice").exists())
  pTwoGuess = snapshot.val().pTwoGuess;
})
// show other user's choice after first player chooses

//overwrite player choices each round
//timer?
//need to see what other player chooses


//choose rock, paper or scissors
if ((pOneGuess === "r") || (pOneGuess === "p") || (pOneGuess === "s")) {

  //rock > scissors
  //scissors > paper
  //paper > rock

  if ((pOneGuess ==="r") && (pTwoGuess === "s")) {
    wins++;
  } else if ((pOneGuess === "r") && (pTwoGuess === "p")) {
    losses++;
  } else if ((pOneGuess === "p") && (pTwoGuess === "r")) {
    wins++;
  } else if ((pOneGuess === "p") && (pTwoGuess === "s")) {
    losses++;
  } else if ((pOneGuess === "s") && (pTwoGuess === "p")) {
    wins++;
  } else if ((pOneGuess === "s") && (pTwoGuess === "r")) {
    losses++
  } else if (pOneGuess === pTwoGuess) {
    draws++;
  }

};
//tally wins, losses and draws

//include chat

