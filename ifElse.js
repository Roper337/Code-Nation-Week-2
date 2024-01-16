// // // // // // // // // // //     // if("Hello" == "HeLlo".toLocaleLowerCase()){
// // // // // // // // // // //     //     console.log("this is a true statement");
// // // // // // // // // // //     // }else {
// // // // // // // // // // //     //     console.log("this is a false statement");
// // // // // // // // // // //     // }

// // // // // // // // // // //     // if("Hello" == "HeLlo".toLocaleLowerCase()){
// // // // // // // // // // //     //     console.log("this is a true statement");
// // // // // // // // // // //     // }else {
// // // // // // // // // // //     //     console.log("this is a false statement");
// // // // // // // // // // //     // }

// // // // // // // // // // // // task 1

// // // // // // // // // // let age = 18; // any age can be put here to test the rule.

// // // // // // // // //****************************************************************************************** */

// // // // // // // // // // if (age > 17) {
// // // // // // // // // //   console.log("Yes, I can serve you.");
// // // // // // // // // // } else {
// // // // // // // // // //   console.log("You aren't old enough.");
// // // // // // // // // // }


// // // // // // // // // //task 1 stretch

// // // // // // // // // // let age = 18; 
// // // // // // // // // let country = "uk"; 
// // // // // // // // // if (age > 17 && country === "uk") {
// // // // // // // // //   console.log("Yes, I can serve you in the UK.");
// // // // // // // // // } else {
// // // // // // // // //   console.log("You either aren't old enough or are not in the UK.");
// // // // // // // // // }

// // // // // // // // //****************************************************************************************** */


// // // // // // // // // // // // task 2

// // // // // // // // let topping = "mushrooms"; // change this to test below

// // // // // // // // switch (topping) {
// // // // // // // //   case "mushrooms":
// // // // // // // //   case "olives":
// // // // // // // //   case "tomatoes":
// // // // // // // //     console.log("These are important ingredients for my pizza.");
// // // // // // // //     break;

// // // // // // // //   case "pepperoni":
// // // // // // // //     console.log(`I don't mind having ${topping} on my pizza.`);
// // // // // // // //     break;

// // // // // // // //   case "anchovies":
// // // // // // // //     console.log(`${topping} should not be on pizza.`);
// // // // // // // //     break;

// // // // // // // //   default:
// // // // // // // //     console.log(`I'm not sure about ${topping} on pizza.`);
// // // // // // // //     break;
// // // // // // // // }


// // // // // // // // //****************************************************************************************** */


// // // // // // // // // // // // task 3

// // // // // // // let password = "password123456"; // chamge this to test bellow

// // // // // // // if (password.length < 8) {
// // // // // // //   console.log("The password is too short.");
// // // // // // // } else {
// // // // // // //   console.log(`Password: ${password}`);
// // // // // // // }

// // // // // // // task 3 stretch

// // // // // // //let num = 15; // change this to test bellow

// // // // // // // if (num % 3 === 0 || num % 5 === 0) {
// // // // // // //     console.log("This number is divisible by 3 or 5.");
// // // // // // //   } else {
// // // // // // //     console.log("N/A");
// // // // // // //   }
  


// // // // // // // // //****************************************************************************************** */


// // // // // // // // // // // // task 4

// // // // // // let num = 15; // change this to test bellow

// // // // // // if (num % 3 === 0 && num % 5 === 0) {
// // // // // //   console.log("FizzBuzz");
// // // // // // } else if (num % 3 === 0) {
// // // // // //   console.log("Fizz");
// // // // // // } else if (num % 5 === 0) {
// // // // // //   console.log("Buzz");
// // // // // // } else {
// // // // // //   console.log(num);
// // // // // // }




// // // // // // // // //****************************************************************************************** */


// // // // // // // // // // // // task 5

// // // // // let num = 1221; // change this to test bellow

// // // // // // Convert the number to a string to easily reverse it
// // // // // let numString = num.toString();

// // // // // // Reverse 
// // // // // let reversedNumString = numString.split('').reverse().join('');

// // // // // // Check if strings are the same
// // // // // if (numString === reversedNumString) {
// // // // //   console.log(`${num} is a palindrome.`);
// // // // // } else {
// // // // //   console.log(`${num} is not a palindrome.`);
// // // // // }

// // // // // // // // //****************************************************************************************** */


// // // // // // // // // // // // task 6

// // // // let time = 19; // chanbe this to test bellow (24-hour format)
// // // // let placeOfWork = "Office";
// // // // let townOfHome = "Home";

// // // // if (time < 7) {
// // // //   console.log(`It's ${time} o'clock. I'm still at ${townOfHome}.`);
// // // // } else if (time >= 7 && time < 8) {
// // // //   console.log(`It's ${time} o'clock. I'm commuting to ${placeOfWork}.`);
// // // // } else if (time >= 8 && time < 17) {
// // // //   console.log(`It's ${time} o'clock. I'm at ${placeOfWork}.`);
// // // // } else if (time >= 17 && time < 18) {
// // // //   console.log(`It's ${time} o'clock. I'm commuting back to ${townOfHome}.`);
// // // // } else {
// // // //   console.log(`It's ${time} o'clock. I'm at ${townOfHome}.`);
// // // // }


// // // // // // // // //****************************************************************************************** */

// // // // // // // // // // // // task 7

// // // let inputString = "vsdhkdslkhsfgiuadfgoiuariugheqrnvjsdbluifharsgldjbfuihyeh";

// // // // Reverse the string to find the last vowel
// // // let reversedString = inputString.split('').reverse().join('');

// // // // Find the index of the first vowel in the reversed string
// // // let indexOfLastVowel = reversedString.search(/[aeiou]/);

// // // // If a vowel is found, calculate the index in the original string
// // // if (indexOfLastVowel !== -1) {
// // //   indexOfLastVowel = inputString.length - indexOfLastVowel - 1;
// // // }

// // // console.log("Index of the last vowel:", indexOfLastVowel);




// // // // // // // // //****************************************************************************************** */

// // // // // // // // // // // // task 8


// // function isFirstAndLastLetterEqual(word) {
// //     // Check if the string is not empty
// //     if (word.length > 0) {
// //       // Convert the word to lowercase for case-insensitive comparison
// //       let lowercaseWord = word.toLowerCase();
  
// //       // Check if the first and last letters are the same
// //       if (lowercaseWord[0] === lowercaseWord[word.length - 1]) {
// //         return true;
// //       } else {
// //         return false;
// //       }
// //     } else {
// //       // If the string is empty, return false
// //       return false;
// //     }
// //   }
  
// //   // Example usage:
// //   let wordExample = "racecar"; // You can change this to test different words
// //   let result = isFirstAndLastLetterEqual(wordExample);
  
// //   console.log(result);
  
// // // // // // // // //****************************************************************************************** */



// // task 9

// let num1 = 5; // You can change these values to test different numbers
// let num2 = 3;

// let sum = num1 + num2;

// if (sum % 2 === 0) {
//   console.log(`The sum (${sum}) is even, so returning the sum.`);
//   return sum;
// } else {
//   let product = num1 * num2;
//   console.log(`The sum (${sum}) is odd, so returning the product (${product}).`);
//   return product;
// }
