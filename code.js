/*
  JS code to handle the fieldset transitions with html buttons.
   
   Author: Aiden Eyre
   Date:   27 September 2020
   
   Filename: code.js
*/

this.clicked = "petInfo"; // Placeholder of current fieldset.

// I add window.onload so that the DOM can fully load before executing.
window.onload = function () {
  // Set up event listener for each fieldset button.
  var petInfoButton = document
    .getElementById("petInfoButton")
    .addEventListener("click", (evt) => {
      transitions("petInfo");
    });

  var contactInfoButton = document
    .getElementById("contactInfoButton")
    .addEventListener("click", (evt) => {
      transitions("contactInfo");
    });

  var compInfoButton = document
    .getElementById("compInfoButton")
    .addEventListener("click", (evt) => {
      transitions("compEntry");
    });

  var boardingInfoButton = document
    .getElementById("boardingInfoButton")
    .addEventListener("click", (evt) => {
      transitions("boarding");
    });

  // Function to change css styles to show a feildset transition.
  var transitions = function (clickedButton) {
    document.getElementById(this.clicked).style.transition = "all 0.6s";
    document.getElementById(this.clicked).style.transform = "scaleY(0)";

    // Wait 600ms to run these functions.
    setTimeout(() => {
      document.getElementById(this.clicked).style.display = "none";
      document.getElementById(this.clicked).style.transform = "scaleY(1)";
      document.getElementById(clickedButton).style.display = "flex";
      this.clicked = clickedButton;
    }, 600);
  };
};
