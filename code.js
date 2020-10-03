this.clicked = "petInfo";

// I add window.onload so that the DOM can fully load before executing.
window.onload = function () {
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

  var transitions = function (clickedButton) {
    document.getElementById(this.clicked).style.transition = "all 0.6s";
    document.getElementById(this.clicked).style.transform = "scaleY(0)";
    setTimeout(() => {
      document.getElementById(this.clicked).style.display = "none";
      document.getElementById(this.clicked).style.transform = "scaleY(1)";
      document.getElementById(clickedButton).style.display = "flex";
      this.clicked = clickedButton;
    }, 600);
  };
};
