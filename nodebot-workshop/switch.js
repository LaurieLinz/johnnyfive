var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function() {
  var button = new five.Button(5);
  var led = new five.Led(9);

  button.on('press', function() {
    led.toggle()
  });
});

// button.on('down', function() {
//   console.log('down')
// });
//
// button.off('up', function() {
//   console.log('up')
