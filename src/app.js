/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let randomWhoIndex = Math.floor(Math.random() * who.length);
    let randomWhatIndex = Math.floor(Math.random() * what.length);
    let randomWhenIndex = Math.floor(Math.random() * when.length);

    return (
      who[randomWhoIndex] +
      " " +
      what[randomWhatIndex] +
      " " +
      when[randomWhenIndex]
    );
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};
