console.log(`Question 1     array ages = [ 3, 9, 23, 64, 2, 8, 28, 93]`);
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 100];
let first = ages[0];
let last = ages.at(-1);
console.log(last - first);

let sum = 0;
for (i = 0; i < ages.length; i++) {
  sum += ages[i];
}

var averageAge = sum / ages.length;
console.log(averageAge);




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 2`);

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLength1 = 0;
let allNames = "";
for (let i = 0; i < names.length; i++) {
  nameLength1 += names[i].length;
  allNames += names[i] + " ";
}
var averageLetters = nameLength1 / names.length;

console.log(averageLetters);
console.log(allNames.trim());




console.log(
  `--------------------------------------------------------------------------------------`
);

console.log(`Question 3: How do you access the last element of any array?

You can create a variable whose value is "Array"["Array".length-1] or even array.at(-1)
You refer to the specific array you want. Then you use the same name of the array + .length-1 which retrieves the last Element.`);




console.log(`--------------------------------------------------------------------------------------
`);

console.log(`Question 4: How do you access the first element of any array?

The first element of an array will always have the index number of 0. Regardless of how many, or what, you add/remove to the array. You can refer to the first element by using "Array"[0]`);




console.log(
  `--------------------------------------------------------------------------------------`
);

console.log(`Question 5`);
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let length = name.length;
  nameLengths.push(length);
}
console.log(nameLengths);




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 6 `);
let sum2 = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum2 += nameLengths[i];
}
console.log(sum2);




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 7 `);
function seven(word, n) {
  let con = "";
  for (let i = 0; i < n; i++) {
    con += word;
  }
  return con;
}
console.log(seven("hello", 3));




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 8 `);
function fullName(firstName, lastName) {
  entireName = firstName + " " + lastName;
  return entireName;
}
console.log(fullName("Victor", "Valencia"));




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 9 `);

function test1(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}
let try1 = [30, 40, 35]; 
let try2 = [3, 4, 3]; 
console.log(test1(try1)); 
console.log(test1(try2)); 






console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 10 `);

function array(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
let test3 = [1, 2, 3];
console.log(array(test3));




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 11 `);
function compare(array1, array2) {
  let sum1 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }
  avg1 = sum1 / array1.length;
  let sum2 = 0;
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }
  avg2 = sum2 / array2.length;
  return avg1 > avg2;
}
let array1 = [6, 9, 30];
let array2 = [2, 3, 4];
console.log(compare(array1, array2));




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 12 `);
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}
console.log(willBuyDrink(false, 20));




console.log(
  `--------------------------------------------------------------------------------------`
);
console.log(`Question 13 `);

function bakeIngredients(flavor, type) {
  let ingredients = {
    almond: {
      pie: ["almonds", "pie pan", "pie crust"],
      tart: ["almonds", "tart pan", "almond flour"],
      cheesecake: ["almonds", "springform pan", "heavy cream"],
    },
    blueberry: {
      pie: ["blueberries", "pie pan", "pie crust"],
      tart: ["blueberries", "tart pan", "flour"],
      cheesecake: ["blueberries", "springform pan", "heavy cream"],
    },
    matcha: {
      pie: ["matcha powder", "pie pan", "pie crust"],
      tart: ["matcha powder", "tart pan", "flour"],
      cheesecake: ["matcha powder", "springform pan", "heavy cream"],
    },
  };
  if (ingredients[flavor] && ingredients[flavor][type]) {
    return `You will need ${ingredients[flavor][type].join(", ")}.`; //.join concatenates strings. the ',_' adds that between each element
  } else {
    return `We don't know that recipe yet.`;
  }
}
console.log(bakeIngredients("strawberry", "cake"));
console.log(bakeIngredients("matcha", "cheesecake"));

/*let flavor = ["almond", "blueberry", 'matcha', 'vanilla']
let type = ['pie', 'tart', 'cheesecake'] */

//console.log(bake(almond, blueberry, matcha, vanilla))
