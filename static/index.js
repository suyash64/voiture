let cars = document.querySelector("#car");
let red = document.getElementsByClassName("red");
let white = document.getElementsByClassName("white");
let blue = document.getElementsByClassName("blue");

red[0].addEventListener("click", function () {
  cars.src = "../static/images/gt.png";
  $("#car").toggleClass("animate__slideInRight");
  $("#car").addClass("animate__fadeInRight");
});

white[0].addEventListener("click", function () {
  cars.src = "../static/images/jaguar.png";
  $("#car").toggleClass("animate__slideInRight");
  $("#car").addClass("animate__fadeInRight");
});

blue[0].addEventListener("click", function () {
  cars.src = "../static/images/land-rover.png";
  $("#car").toggleClass("animate__slideInRight");
  $("#car").addClass("animate__fadeInRight");
});

// $(document).ready(function () {
//   $(".red").on("click", () => {

//   });

//   $(".white").on("click", () => {

//   });

//   $(".blue").on("click", () => {

//   });
// });
