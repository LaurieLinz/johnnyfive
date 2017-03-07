var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var led1 = new five.Led("a2");
  var led2 = new five.Led("a3");
  var led3 = new five.Led("a4");
  var led4 = new five.Led("a5");
  var led5 = new five.Led("a6");
  var led6 = new five.Led("a7");

  var leds = new five.Leds([led1, led2, led3, led4, led5, led6]);

  board.loop(100, () => {
    leds.off();
    leds[Math.floor(Math.random() * 6)].on();
  });
});
