///////////////////////
// Only Odds
///////////////////////

// create an array with the provided numbers
inputnums = [2, 4, 6, 8, 10, 11, 12];
// create an empty array for odd numbers
oddnums = [];

// loop through the array for as many elements it has
for (i = 0; i < inputnums.length; i++) {
  // test each number to see if it's even or odd
  if (inputnums[i] % 2 === 1) {
    // if it's odd add it to the array for odd number
    oddnums.push(inputnums[i]);
  }
}
// return an array with only the odd numbers
console.log(oddnums);

///////////////////////
// Vowel Vs Consonant
///////////////////////

// create a string with the provided input
string = "textbook"

// create a counter for vowels
let vowels = 0
let consonants = 0

// create a counter for everything else that's a consonant

// loop over all the letters in the string
for (let i = 0; i < string.length; i++) {
    // check if the letter is a vowel
    // if it's a vowel add it to the counter for vowewls
  if (
    string[i] === "a" ||
    string[i] === "e" ||
    string[i] === "i" ||
    string[i] === "o" ||
    string[i] === "u"
  ) {
    vowels++;
  }
      //otherwise it's not a vowel and it's a consonant so add it to the counter for consonants
  else {
    consonants++
  }
}

// print the string and how many consonants and vowels it has to console
console.log(string + ` has ` + consonants + ` consonants and ` + vowels + ` vowels`)


///////////////////////
// Vowel Vs Consonant
///////////////////////

// create an array with the numbers given
forward = [1, -1, 2, -3, 5, -8, 13]
// create an empty array that will have the array in reverse order
backward = []
// find the length of the array
// loop through the original array starting a the end and counting backwards
for (i = forward.length-1; i >= 0 ; i--) {
    // add each item to the empty array that will have everything in reverse order
    backward.push(forward[i])
}
// print the backwards array to console
console.log(backward)

///////////////////////
// FizzBuzz
///////////////////////

//make a loop that executes 100 times and prints a number, fizz, buzz, or fizzbuzz
for (i=1; i <=100; i++) {
    //if the number is a multiple of 3 and 5, print "FizzBuzz"
    //check this one first because it's a more strict requirement than the other two
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")

    //if the number is a multiple of 3, print "Fizz"
    } else if ( i % 3 === 0) {
        console.log("Fizz")

    //if the number is a multiple of 5, print "Buzz"
    } else if ( i % 5 === 0) {
        console.log("Buzz")


    //if it's none of these print the number
    } else {
        console.log(i)
    }
}







