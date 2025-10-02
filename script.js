function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomNumber = getRandomInt(101);
let attemptsLeft = 10;
let tries = 0;

const buttonV = document.querySelector(".valider");
const buttonR = document.querySelector(".reset");
const input = document.querySelector("input");
const p = document.querySelector("p");

buttonV.addEventListener("click", () => {
  const numberUser = Number(input.value);
  tries++;
  attemptsLeft--;

  if (numberUser < randomNumber) {
    p.textContent = `Too low! (${attemptsLeft} essais restants)`;
  } else if (numberUser > randomNumber) {
    p.textContent = `Too high! (${attemptsLeft} essais restants)`;
  } else {
    p.style.color = "green";
    p.textContent = `Good job! You found it in ${tries} tries 🎉`;
    return;
  }

  if (attemptsLeft === 0) {
    p.style.color = "red";
    p.textContent = `Perdu 😭 Le nombre était ${randomNumber}`;
  }
});

buttonR.addEventListener("click", () => {
  randomNumber = getRandomInt(101);
  attemptsLeft = 10;
  tries = 0;
  p.textContent = "";
  p.style.color = "";
  input.value = "";
});
