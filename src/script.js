"use strict";

var box = document.getElementsByTagName("p");
var start = document.querySelector("button");
var game = document.querySelector(".game");
var positions = ["first", "second", "third", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", " twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty"];
var count = 0;
var score = 0;

var position = function position() {
  var randomize = Math.round(Math.random() * positions.length) - 1;
  start.style.display = "none";

  var _loop = function _loop(j) {
    box[j].unselectable = "on";
    box[j].style.color = "black";
    setTimeout(function () {
      box[j].style.color = "#BDC3C7";
      count += 1;
    }, 2000);
  };

  for (var j = 0; j < box.length; j++) {
    _loop(j);
  }

  for (var i = 0; i < box.length; i++) {
    box[i].classList.add(positions[randomize]);
    positions.splice(randomize, 1);
  }
};

var reveal = function reveal(e) {
  var target = e.target;

  if (count > 0 && target.innerHTML === "*" && target.style.color !== "white") {
    target.style.color = "#BB1B0D";
    score += 1;
    target.classList.add("active");
    target.style.filter = "drop-shadow(1px 8px 15px red) invert(75%)";
    target.style.border = "none";
  } else if (count > 0 && target.innerHTML !== "*" && target.innerHTML.length === 1) {
    target.classList.add("active");
    alert("Game Over!");
    window.location.reload();
  }

  if (score > 4) {
    alert("Congratulations!");
    window.location.reload();
  }
};

game.addEventListener("click", function (e) {
  console.log(e.target.innerHTML.length);
});
game.addEventListener("click", reveal);
start.addEventListener('click', position);