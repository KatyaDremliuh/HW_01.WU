//#region Task 1.
let city = "Minsk";
let country = "Belarus";
let population = 9255524;
let hasSoccerStadium = true;

console.log(getMotherland(city, country, population, hasSoccerStadium));

function getMotherland(city, country, population, hasSoccerStadium) {
  return `Hello!\nI'am from ${city}, ${country}.\nThe population of ${country} is ${population} people.\nDo we have a soccer stadium in the city? Yes, that's ${hasSoccerStadium}.`;
}
//#endregion

//#region Task 2.
let height = 40;
let width = 70;
let area = height * width;

console.log(`The area of the rectangle: ${area} sq cm.`);
//#endregion

//#region Task 3.
let speedOfFirst = 95;
let speedOfSecond = 114;
let time = 2;
let closingSpeed = getClosingSpeed(speedOfFirst, speedOfSecond);
let distance = getDistance(closingSpeed, time);

console.log(`There is ${distance} km between cars.`);

function getClosingSpeed(speed1, speed2) {
  return speed1 + speed2;
}

function getDistance(closingSpeed, time) {
  return closingSpeed * time;
}
//#endregion

//#region Task 4.
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else {
  console.log("randomNumber больше 20, и меньше 50");
}
//#endregion

//#region Task 4.
let message;

switch (true) {
  case randomNumber < 20:
    message = "randomNumber меньше 20";
    break;
  case randomNumber > 50:
    message = "randomNumber больше 50";
    break;
  default:
    message = "randomNumber больше 20, и меньше 50";
    break;
}

console.log(message);
//#endregion