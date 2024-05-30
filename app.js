// 1. Write a function that takes three numbers as arguments and returns the largest number.
// For example: getLargest( 4, 20, 40 ) re​turns 40.
// Only if else allowed. Don’t use Math.max

const getLargest = (number1, number2, number3) => {
  const numbersArray = [number1, number2, number3];
  let largestNumber = numbersArray[0];

  numbersArray.forEach((number) => {
    if (number > largestNumber) largestNumber = number;
  });

  return largestNumber;
};

// console.log(getLargest(-23, 10, 1));

// 2. Write a function that takes a string and a character which is not an alphabet and returns an array of all words that start with that character.
// Don't worry about upper case or lower case character.
// For example: get_words( "I see oranges in the orchard", "o") will return ["oranges","orchard"] get_words("Hi my name is Henry") will return ["Hi", "Henry"]
const get_words = (string, character) => {
  const stringArray = string.split(' ');

  return stringArray.filter((string) => string.toLowerCase().startsWith(character.toLowerCase()));
};

// console.log(get_words('I see oranges in the orchard', 'o'));

// 3. Write a function that takes two arguments.
// i) array - input array
// ii) n - number of items to remove from the end of the array.
// Your function will check if array has atleast ‘n’ number of items. If not it
// returns the same array. If it has enough items it removes those many items and returns the smaller array after removing.
// Example :- removeItems ( [ 3,4,6,7,8,6] , 3 ) returns [ 3,4,6]

const removeItems = (itemsArray, removeCount) => {
  if (itemsArray.length < removeCount) return itemsArray;

  return itemsArray.slice(0, -removeCount);
};

// console.log(removeItems([3, 4, 6, 7, 8, 6], 1));

// 4. Write a function that takes two strings, and returns the string which has more words in it? Remember not alphabets. Words.
// For example : largest(“This is the larger string in this case”, “I am another string”) will return
// “This is the larger string in this case” because it has 8 words in it compared to 4.
const largest = (stringOne, stringTwo) => {
  const stringOneLength = stringOne.trim().split(' ').length;
  const stringTwoLength = stringTwo.trim().split(' ').length;

  return stringOneLength > stringTwoLength ? stringOne : stringTwo;
};

// console.log(largest('This is the larger string in this case', 'I am another string'));

// 5. Write a function which takes an object as argument. It checks if object contains name property.
// If name property exists it adds ​hasName​ property in the object as true, otherwise adds ​hasName ​property as false.
// It should also remove name property from the object, and returns the new object.

const checkObjectProperty = (obj) => {
  const { name, ...newObject } = obj;

  if (obj.hasOwnProperty('name')) newObject.hasName = true;
  else newObject.hasName = false;

  return newObject;
};

let obj1 = { name: 'John', age: 30 };
let obj2 = { age: 36 };

// console.log(checkObjectProperty(obj1));
// console.log(checkObjectProperty(obj2));

// 6. Create a paragraph with click event listener. On clicking the paragraph toggle the color between red and green depending on how many times it has been clicked.
// If number of clicks on the paragraph are multiple of 3 then make it red otherwise make it green.

const paragraphClicks = () => {
  const paragraph = document.querySelector('p');
  let clicks = 0;

  paragraph.addEventListener('click', (e) => {
    clicks++;

    paragraph.textContent = "'Click me to change the color.'";

    if (clicks % 3 === 0) {
      paragraph.classList.add('red');
      paragraph.textContent = `${clicks} is a multiple of 3`;
    } else {
      paragraph.classList.remove('red');
      paragraph.textContent = `${clicks} is not a multiple of 3`;
    }
  });
};

const createParagraph = () => {
  const button = document.querySelector('.button');
  const mainContent = document.querySelector('.main');

  button.addEventListener(
    'click',
    (e) => {
      const paragraph = document.createElement('p');

      paragraph.textContent = 'Click me to change the color.';
      mainContent.append(paragraph);

      paragraphClicks();
      button.remove();
    },
    { once: true }
  );
};

createParagraph();

// 7. Write a program that prints the numbers from 10 to 60 including 10 and 60.
// But for multiples of three print “Multiple of 3” instead of the number and for the multiples of five print “Multiple of 5”.
// For numbers which are multiples of both three and five print “Both”. If it’s not multiple of 3 or 5 just print the number.

// Example:- “Multiple of 5” 11
// “Multiple of 3” 13
// 14
// “Both”
// 16.... and so on...

const printMultiples = () => {
  for (i = 10; i <= 60; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('Both');
    else if (i % 3 === 0) console.log('Multiple of 3');
    else if (i % 5 === 0) console.log('Multiple of 5');
    else console.log(i);
  }
};

// printMultiples();

// 8. Write a function that takes an array of strings and removes the strings that contain a number in them and returns the new array ( not the reference ).
// Example: removeNumberStrings ( [“ This”,”is” , “a3” , “samp7e”, “stri9ng”]) returns [“This”, “is”]

const removeNumberStrings = (arr) => {
  const doesNotContainNumber = (word) => [...word].every((char) => isNaN(parseInt(char)));

  return arr.filter((word) => doesNotContainNumber(word));
};

// console.log(removeNumberStrings(['This', 'is', 'a3', 'samp7e', 'stri9ng']));
