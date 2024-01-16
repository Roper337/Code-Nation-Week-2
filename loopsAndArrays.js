// // // // // // // // // // //     let coffeeOrder = [
// // // // // // // // // // //     "alex - cortado",
// // // // // // // // // // //     "ben - cortado",
// // // // // // // // // // //     "charlie - latte",

// // // // // // // // // // // ];

// // // // // // // // // // // // coffeeOrder[1]= "ann - latte";

// // // // // // // // // // // // console.log(coffeeOrder[1]);
// // // // // // // // // // // // console.log (coffeeOrder.length);


// // // // // // // // // // // // coffeeOrder.push("donna - espresso");
// // // // // // // // // // // // console.log(coffeeOrder);

// // // // // // // // // // // // // // // // //****************************************************************************************** */

// // // // // // // // // // // // Activity 1:
// // // // // // // // // // // let favSongs = [
// // // // // // // // // // //     "Nina Simone - Here Comes The Sun",
// // // // // // // // // // //     "Limp Bizkit - Rollin",
// // // // // // // // // // //     "Papa Roach - Last Resort",
// // // // // // // // // // // ]
// // // // // // // // // // // console.log(favSongs);

// // // // // // // // // // // // task 1 Stretch
// // // // // // // // // // // favSongs.push("DJ Zinc - Wile Out");
// // // // // // // // // // // favSongs.push("Sway - Still Speedin'");

// // // // // // // // // // // console.log(favSongs);

// // // // // // // // // // // favSongs.pop()

// // // // // // // // // // // console.log(favSongs);

// // // // // // // // // // // // // // // // //****************************************************************************************** */


// // // // // // // // // // // // Activity 2

// // // // // // // // // Initial array
// // // // // // // // let fruits = ['apple', 'banana', 'cherry', 'date'];

// // // // // // // // // Remove 'banana' and 'cherry' and insert 'grape' and 'kiwi'
// // // // // // // // let removedItems = fruits.splice(1, 2, 'grape', 'kiwi');

// // // // // // // // // Display the modified array and the removed items
// // // // // // // // console.log('Modified Array:', fruits);
// // // // // // // // console.log('Removed Items:', removedItems);

// // // // // // // // // // // // // // // // //****************************************************************************************** */

// // // // // // // //LOOPS

// // // // // // // // Task 1

// // // // // // // // Initial array
// // // // // // // let favFilms = ['Film1', 'Film2', 'Film3', 'Film4', 'Film5'];

// // // // // // // // Add two more films using push method
// // // // // // // ukActionFilms2023.push('Film6', 'Film7');

// // // // // // // // Loop through the array and log each film
// // // // // // // console.log('List of UK Action Films in 2023:');
// // // // // // // for (let i = 0; i < ukActionFilms2023.length; i++) {
// // // // // // //   console.log(`Film ${i + 1}: ${ukActionFilms2023[i]}`);
// // // // // // // }

// // // // // // // // // // // // // // // // //****************************************************************************************** */


// // // // // // // Task 2

// // // // // // // Function to generate a random number between min and max (inclusive)
// // // // // // function getRandomNumber(min, max) {
// // // // // //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // // // // //   }
  
// // // // // //   // Generate and log 6 random numbers between 1 and 50
// // // // // //   console.log('Random Numbers between 1 and 50:');
// // // // // //   for (let i = 0; i < 6; i++) {
// // // // // //     let randomNumber = getRandomNumber(1, 50);
// // // // // //     console.log(`Random Number ${i + 1}: ${randomNumber}`);
// // // // // //   }
  
// // // // // // // // // // // // // // // // //****************************************************************************************** */


// // // // // Task 3

// // // // // // Count from 9 to 0 and log to the console
// // // // // console.log('Counting backward from 9 to 0:');
// // // // // for (let i = 9; i >= 0; i--) {
// // // // //   console.log(i);
// // // // // }

// // // // // // // // // // // // // // // // //****************************************************************************************** */

// // // // Task 4

// // // // // Array of films
// // // // let films = ['Film1', 'Film2', 'Ghostbusters', 'Film4'];

// // // // // Display each film using a for loop
// // // // console.log('List of Films:');
// // // // for (let i = 0; i < films.length; i++) {
// // // //   console.log(`Film ${i + 1}: ${films[i]}`);
// // // // }

// // // // // Check if the 3rd film is "Ghostbusters" and log the result
// // // // if (films[2] === 'Ghostbusters') {
// // // //   console.log("Yay! It's Ghostbusters.");
// // // // } else {
// // // //   console.log("Boo! I wanted Ghostbusters.");
// // // // }

// // // // // // // // // // // // // // // // //****************************************************************************************** */

// // // // Task 5

// // // // Function to generate a random number between min and max (inclusive)
// // // function getRandomNumber(min, max) {
// // //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // //   }
  
// // //   // Generate and check 6 random numbers between 1 and 20
// // //   console.log('Checking if random numbers are divisible by 7:');
// // //   for (let i = 0; i < 6; i++) {
// // //     let randomNumber = getRandomNumber(1, 20);
// // //     console.log(`Random Number ${i + 1}: ${randomNumber}`);
  
// // //     if (randomNumber % 7 === 0) {
// // //       console.log(`${randomNumber} is divisible by 7.`);
// // //     } else {
// // //       console.log(`${randomNumber} is not divisible by 7.`);
// // //     }
// // //   }
  
// // // // // // // // // // // // // // // // //****************************************************************************************** */


// // // Task 6

// // // Arrays of followers
// // let robsFollowers = ['Alice', 'Bob', 'Charlie', 'Dave'];
// // let moosFollowers = ['Charlie', 'Dave', 'Eve', 'Frank'];

// // // Log the followers of Rob and Moo
// // console.log("Rob's Followers:", robsFollowers);
// // console.log("Moo's Followers:", moosFollowers);

// // // Find and log the matching followers
// // console.log('Matching Followers:');
// // for (let i = 0; i < robsFollowers.length; i++) {
// //   for (let j = 0; j < moosFollowers.length; j++) {
// //     if (robsFollowers[i] === moosFollowers[j]) {
// //       console.log(robsFollowers[i]);
// //     }
// //   }
// // }

// // // // // // // // // // // // // // // // //****************************************************************************************** */

// // Task 7

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
  


//   let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// // The choice between for, while, and do...while loops depends on the specific requirements of the loop, such as the initialization, termination conditions, and whether the loop body should execute at least once. Each loop type has its own strengths and use cases in different programming scenarios.
