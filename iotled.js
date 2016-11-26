//this code is to use firebase for my button

var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase")

board.on("ready", function() {
  var led = new five.Led(13);
  var button = new five.Button(2);

 firebase.initializeApp({
  serviceAccount: //need auth token
  databaseURL: "https://button-81956.firebaseio.com/"
});

 

 var db = firebase.database();
 var ref = db.ref("button");

 ref.on("value", function(snapshot){
  var val = snapshot.val();
  if(val == "down") {
    led.on();
  } else {
    led.off();
  }
});

  button.on("down", function() {
    console.log("down");
    // led.on();
    ref.set("down")
  });

  
  button.on("up", function() {
    console.log("up");
    // led.off();
    ref.set("up")
  });
});
