// // // // Task 1

// // // let person = {
// // //     name: "Rob",
// // //     age: 36,
// // //     gender: "male",
// // //     sayHi: function () {
// // //       return `Hello, my name is ${this.name}.`;
// // //     },
// // //   };
  
// // //   // Example usage:
// // //   console.log(person.sayHi());
  

// // // //  // //****************************************************************************************** */

// // // Task 2

// // let pet = {
// //     name: "Moo",
// //     typeOfPet: "Dog",
// //     age: 3,
// //     color: "Brown",
  
// //     eat: function () {
// //       return `${this.name} is eating.`;
// //     },
  
// //     drink: function () {
// //       return `${this.name} is drinking.`;
// //     },
// //   };
  
// //   // Example usage:
// //   console.log(pet.eat());
// //   console.log(pet.drink());


//   // // //  // //****************************************************************************************** */


//   // Task 3

//   let coffeeShop = {
//     branch: "Downtown",
//     drinks: {
//       americano: 2.5,
//       latte: 3.0,
//       cappuccino: 3.5,
//     },
//     food: {
//       croissant: 2.0,
//       sandwich: 4.0,
//       muffin: 1.5,
//     },
  
//     drinksOrdered: function (order) {
//       let orderDetails = "Drinks Ordered:\n";
  
//       for (let item in order) {
//         if (this.drinks[item]) {
//           orderDetails += `${item}: $${this.drinks[item]}\n`;
//         }
//       }
  
//       let totalCost = Object.keys(order).reduce(
//         (acc, item) => acc + (this.drinks[item] || 0),
//         0
//       );
  
//       return `${orderDetails}Total Cost: $${totalCost.toFixed(2)}`;
//     },
  
//     foodOrdered: function (order) {
//       let orderDetails = "Food Ordered:\n";
  
//       for (let item in order) {
//         if (this.food[item]) {
//           orderDetails += `${item}: $${this.food[item]}\n`;
//         }
//       }
  
//       let totalCost = Object.keys(order).reduce(
//         (acc, item) => acc + (this.food[item] || 0),
//         0
//       );
  
//       return `${orderDetails}Total Cost: $${totalCost.toFixed(2)}`;
//     },
//   };
  
//   // Example usage:
//   console.log(coffeeShop.drinksOrdered({ americano: 1, latte: 2 }));
//   console.log(coffeeShop.foodOrdered({ croissant: 2, sandwich: 1 }));


  