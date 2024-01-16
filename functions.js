// // // //Task 1

// // // function factorial (n) { 
// // //     if ((n === 0) || (n === 1)) {
// // //         return 1;
// // //     } else {
// // //         return (n * factorial (n - 1));
// // //     }
// // // }
// // // console.log("factorial(33))

// // // const factorial = (n) => {
// // //     return (n === 0 || n === 1) ? 1 : (n * factorial(n - 1));
// // //   };
  
// // //   console.log(factorial(33));

// //  // //****************************************************************************************** */

// //   // Task 2

// // //   let orderCount = 0;

// // //   const takeOrder = (topping) => {
// // //     console.log (`Pizza with ${topping}`);
// // //     orderCount++;
// // //   }

// //   let orderCount = 0;

// // const takeOrder = (size, topping) => {
// //   console.log(`Pizza with ${size} size and ${topping}`);
// //   orderCount++;
// // };

// // // Example usage:
// // takeOrder('large', 'pepperoni');
// // takeOrder('medium', 'mushrooms');
// // takeOrder('small', 'olives');

// // console.log(`Total orders: ${orderCount}`);

// //  // //****************************************************************************************** */

// // Task 3 

// // Sample account data (in a real scenario, fetch this data from a secure backend)
// const accounts = [
//     { pin: 1234, balance: 1000 },
//     { pin: 5678, balance: 500 },
//     // Add more accounts as needed
//   ];
  
//   const cashMachine = (pin, amount) => {
//     // Find the account with the provided pin
//     const account = accounts.find((acc) => acc.pin === pin);
  
//     if (account) {
//       // Check if the balance is sufficient
//       if (account.balance >= amount) {
//         // Dispense cash and update balance
//         console.log(`Cash dispensed: $${amount}`);
//         account.balance -= amount;
//         console.log(`Remaining balance: $${account.balance}`);
//       } else {
//         console.log('Insufficient funds. Please check your balance.');
//       }
//     } else {
//       console.log('Invalid PIN. Please try again.');
//     }
//   };
  
//   // Example usage:
//   cashMachine(1234, 200); // Correct PIN and sufficient balance
//   cashMachine(5678, 700); // Correct PIN but insufficient balance
//   cashMachine(9999, 500); // Incorrect PIN
  
// //  // //****************************************************************************************** */







