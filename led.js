//fully function code for a button controlled led

var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase")

board.on("ready", function() {
  var led = new five.Led(13);
  var button = new five.Button(2);

  button.on("down", function() {
    console.log("down");
    led.on();
  });

  
  button.on("up", function() {
    console.log("up");
    led.off();
  });
});
