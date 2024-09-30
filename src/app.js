/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function getRandomCard() {
    //write your code here
    let colorList = ["black", "red"];
    let suiteList = ["♦", "♥", "♠", "♣"];
    let cardList = [
      "1",
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
      "K",
      "A"
    ];

    function getRandom(array) {
      let randomItem = Math.floor(Math.random() * array.length);
      return array[randomItem];
    }

    function getRandomColor() {
      let color = getRandom(colorList);
      if (color == "red") {
        return "text-danger";
      } else {
        return "text-black";
      }
    }

    let randomColor = getRandomColor();
    let randomSuite = getRandom(suiteList);

    document.querySelector("#text-header").innerHTML = randomSuite;
    document.querySelector("#text-header").classList = randomColor;
    document.querySelector("#text-footer").innerHTML = randomSuite;
    document.querySelector("#text-footer").classList = randomColor;
    document.querySelector("#text-body").innerHTML = getRandom(cardList);
  }
  getRandomCard();

  let buttonManual = document.querySelector("button");
  buttonManual.addEventListener("click", getRandomCard);
};
