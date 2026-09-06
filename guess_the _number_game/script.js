let output = document.getElementById("output");
let random;
let points = 0;

console.log(random);
//after clicking new number

document.getElementById("new").onclick = function New() {
  let guess = document.getElementById("guess").value;
  let minNum = Number(document.getElementById("numMin").value);
  let maxNum = Number(document.getElementById("numMax").value);
  random = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  console.log(random); //test delete after project comp

  //click guess
  document.getElementById("guessBtn").onclick = function () {
    let guess = document.getElementById("guess").value;
    let minNum = Number(document.getElementById("numMin").value);
    let maxNum = Number(document.getElementById("numMax").value);
    if (guess == random) {
      document.getElementById("output").textContent = "your guess is correct";
      points += 10;
      console.log(points);
    } else {
      document.getElementById("output").textContent = "your guess is incorrect";
      points -= 5;
    }
  };
};
