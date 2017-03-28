;(function () {
  var Game = function(canvasId) {
    var canvas = document.getElementById(canvasId);
    var screen = canvas.getContext('2d');
    var gameSize = { x: canvas.wigth, y: canvas.height }
    console.log('hello');

    var self = this;
    var tick = function() {
      self.update();
      self.draw(screen, gameSize);
      requestAnimationFrame(tick);
    };

    tick();
  };

  Game.prototype = {
    update: function() {
      console.log('hello');
    },

    // draw: function() {
      draw: function(screen, gameSize) {
        screen.fillRect(30, 30, 40, 40);
      }
    }
  // };

  window.onload = function() {
    new Game("screen");
  };
})();




console.log("hi");
