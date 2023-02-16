//#region Lesson_01

// Task 1.
let city = "Minsk";
let country = "Belarus";
let population = 9255524;
let hasSoccerStadium = true;

console.log(getMotherland(city, country, population, hasSoccerStadium));

function getMotherland(city, country, population, hasSoccerStadium) {
  return `Hello!\nI am from ${city}, ${country}.\nThe population of ${country} is ${population} people.\nDo we have a soccer stadium in the city? Yes, that's ${hasSoccerStadium}.`;
}

//Task 2.
let height = 40;
let width = 70;
let area = height * width;

console.log(`The area of the rectangle: ${area} sq cm.`);

// Task 3.
let speedOfFirst = 95;
let speedOfSecond = 114;
let time = 2;

console.log(
  `There is ${getDistance(
    getClosingSpeed(speedOfFirst, speedOfSecond),
    time
  )} km between cars.`
);

function getClosingSpeed(speed1, speed2) {
  return speed1 + speed2;
}

function getDistance(closingSpeed, time) {
  return closingSpeed * time;
}

// Task 4.
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else {
  console.log("randomNumber больше 20, и меньше 50");
}

// Task 5.
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

//#region Lesson_02

// Task 1.
for (let i = 10; i <= 50; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}

function isEven(number) {
  return number % 2 == 0;
}

// Task 2.
const person = {
  firstName: "Katya",
  lastName: "Dremliuh",
  age: 32,
  hasPets: false,
};

for (var field in person) {
  var value = person[field];
  console.log(`${field} ${String.fromCodePoint(0x1f914)} ${value}`);
}

// Task 3.

// using System.Text;

// namespace ConsoleApp6
// {
//     internal class Program
//     {
//         static void Main(string[] args)
//         {
//             Console.OutputEncoding = Encoding.UTF8;
//             Console.InputEncoding = Encoding.Unicode;
//             string text =
//                 "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей, что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам";

//             string[] mixed =
//             {
//                 "я в Симбирск,",
//                 "в трактире.",
//                 "с утра",
//                 "В ту же ночь",
//                 "Я остановился",
//                 "для закупки",
//                 "что и было поручено Савельичу.",
//                 "приехал",
//                 "где должен был",
//                 "нужных вещей",
//                 "отправился по лавкам",
//                 "пробыть сутки",
//                 "Савельич",
//             };

//             var dictionary = PutPhrasesInOrder(mixed, text);

//             StringBuilder sb = new StringBuilder();
//             foreach (var word in dictionary)
//             {
//                 sb.Append($"{word.Value} ");
//             }

//             var result = sb.ToString().TrimEnd();

//             Console.Write(result);
//         }

//         private static SortedDictionary<int, string> PutPhrasesInOrder(string[] hell, string validText)
//         {
//             SortedDictionary<int, string> dictionary = new();

//             foreach (string word in hell)
//             {
//                 dictionary.Add(key: validText.IndexOf(word, StringComparison.Ordinal), value: word);
//             }

//             return dictionary;
//         }
//     }
// }

let text =
  "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей, что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам";

const mixed = [
  "я в Симбирск,",
  "в трактире.",
  "с утра",
  "В ту же ночь",
  "Я остановился",
  "для закупки",
  "что и было поручено Савельичу.",
  "приехал",
  "где должен был",
  "нужных вещей,",
  "отправился по лавкам",
  "пробыть сутки",
  "Савельич",
];

let dictionary = {};
for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i];
  let key = text.indexOf(mixed[i]);

  dictionary[key] = value;
}

let result = "";
for (var key in dictionary) {
  console.log(key + " : " + dictionary[key]);
  result += `${dictionary[key]} `;
}

result = result.trim();
console.log(`Итог:\n${result}`);

// Task 4.
const getFullName = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
};

getFullName("Katya", "Dremliuh");

// Task 5.
let start = 21;
let end = 67;
while (start <= end) {
  if (!isEven(start)) {
    console.log(start);
  }
  start++;
}
//#endregion
