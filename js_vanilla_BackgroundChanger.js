var arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

var button = document.querySelector("button");
var body = document.querySelector("body");
var span = document.querySelector("span");

button.addEventListener("click", function hexCode() {
  let result = "#";

  for (var i = 0; i < 6; i++) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    var randomIndex = arr[randomNumber];
    result += randomIndex;
  }

  body.setAttribute("style", "background-color: " + result);
  span.textContent = result;
});
