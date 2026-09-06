// FOR CIRCUMFERENCE IF A CIRCLE
/*
const PI = 22 / 7;

document.getElementById("button").onclick = function () {
  let radius = document.getElementById("in").value;
  radius = Number(radius);

  let curcumference = 2 * PI * radius;

  document.getElementById("out").textContent =
    `The curcumference is ${curcumference}`;
};
*/

//FOR BMI CALCULATOR
//BMI = weight (kg) / (height (cm) / 100)²

if (document.getElementById("male").checked) {
  let gender = "male";
} else {
  let gender = "female";
}
document.getElementById("button").onclick = function calculate() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  height = Number(height);
  weight = Number(weight);

  let bmi = (weight / (height / 100) ** 2).toFixed(3);

  document.getElementById("result").textContent = `Your BMI is : ${bmi}`;
};
