/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#topSuit").innerHTML = indexSuits;
  document.querySelector("#bottomSuit").innerHTML = indexSuits;
  document.querySelector("#number").innerHTML = indexNumbers;
};

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let lastNumber = numbers.length - 1;
let indexNumbers = numbers[Math.floor(Math.random() * lastNumber)];

let suits = ["♦", "♥", "♠", "♣"];
let lastSuit = suits.length - 1;
let indexSuits = suits[Math.floor(Math.random() * lastSuit)];

let btn = document.createElement("button");
btn.innerHTML = "New Card";
btn.addEventListener("click", function() {
  window.location.reload();
});
document.body.appendChild(btn);
