//1. Create an array called ages

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a. Programmatically subtract the value of the first element from the last element

function subtractLastFirst(array) {
    let firstElement = ages.at(0);
    let lastElement = ages.at(-1);
    let result = lastElement - firstElement
    return result;
}

console.log(subtractLastFirst(ages));

//b. Add a new age to your array and repeat the step above to ensure it is dynamic

ages.push(33);

//testing to make sure it was added to the end
console.log(ages);

console.log(subtractLastFirst(ages));

//c. Use a loop to iterate through the array and calculate the average age

let total = 0;
let average = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];
    average = total / (i + 1);
}

console.log(average);

//2. Create an array called names

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//a. Use a loop to iterate through the array and calculate the average number of letters per name

let totalLetters = 0;
let averageLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
    averageLetters = totalLetters / (i + 1);
}

console.log(averageLetters);

//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces

//create the variable and set its value to an empy string, so it isn't undefined
let allNames = ""
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}

console.log(allNames);

//3. How do you access the last element of any array?
//array.length - 1

//4. How do you access the first element of any array?
//array.at(0) or array[0]

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array

let nameLengths = []

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array

let nameLengthsSum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
}

console.log(nameLengthsSum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')
//included an empty string because I initially tried with just word += word and got 8 Hello's 
function myFunction(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(myFunction("Hello", 3));

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
// Used template literal to do string interpolation
function fullName(firstName, lastName) {
    let result = `${firstName} ${lastName}`;
    return result;
}

console.log(fullName("Seth", "Spangelo"));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100

function greaterThan100(array) {
    let totalOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        totalOfArray += array[i];
    }
    if (totalOfArray > 100) {
        return true;
    } else {
        return false;
    }
}

//Now to test
let newArray = [50, 40, 20];

console.log(greaterThan100(newArray));

console.log(greaterThan100(nameLengths));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array

function averageElements(array) {
    let totalOfArray = 0;
    let averageOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        totalOfArray += array[i];
        averageOfArray = totalOfArray / array.length;
    }
    return averageOfArray;
}

console.log(averageElements(newArray));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

function averageGreaterThan(array1, array2) {
    let totalOfArray1 = 0;
    let totalOfArray2 = 0;
    let averageOfArray1 = 0;
    let averageOfArray2 = 0;
    for (let i = 0; i < array1.length; i++) {
        totalOfArray1 += array1[i];
        averageOfArray1 = totalOfArray1 / array1.length;
    }
    for (let i = 0; i < array2.length; i++) {
        totalOfArray2 += array2[i];
        averageOfArray2 = totalOfArray2 / array2.length;
    }
    if (averageOfArray1 > averageOfArray2) {
        return true;
    } else {
        return false;
    }
}

console.log(averageGreaterThan(newArray, nameLengths));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(boolean, number) {
    if (boolean === true && number > 10.50) {
        return true;
    } else {
        return false;
    }
}

//testing
console.log(willBuyDrink(true, 11));

console.log(willBuyDrink(false, 11));

console.log(willBuyDrink(true, 9));

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//I'm a big Magic the Gathering player, and shuffling up a deck and drawing 7 cards can be a pain. So I'll automate that process for myself

//First, I'll make my 99 card array

let myDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
    67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
    82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99];

//Next, I'll make my function to shuffle my deck

function shuffleDeck(array) {
    //I don't want to add cards to my deck, so no i++
    for (let i = array.length - 1; i > 0; i--) {
        //Generate a random index from 0 to i
        let card = Math.floor(Math.random() * (i + 1));
        //Swap elements at indices i and card
        [array[i], array[card]] = [array[card], array[i]];
    }
    return array;
}

//Now lets shuffle our deck, and go a step further to draw 7 cards
let newDeck = shuffleDeck(myDeck);

//Make a new array to represent your hand, then remove seven cards from the deck array to represent drawing 7 cards.
let newHand = (newDeck) => {
    let hand = [];
    for (let i = 0; i < 7; i++) {
        hand.push(newDeck.shift());
    } return hand;
}

console.log(newHand(newDeck));