let dice = {
  sides: 6,
  roll: function () {
  let randomNumber;
  // Write Code Here
  randomNumber = Math.floor(Math.random() * this.sides) + 1;
  // Generate a random number between 1 and the number of sides and assign it to randomNumber

   return (randomNumber);
  }
};

function printNumber(number) {
  let diceImage = document.getElementById("diceImage");
  diceImage.src = "img/dice" + number + ".png";
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
