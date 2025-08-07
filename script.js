// Promise example with resolve and reject

 function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 0) {
        resolve(`Success! ${num} is positive.`);
      } else {
        reject(`Error: ${num} is not positive.`);
      }
    }, 1000);
  });
}

// Try with a positive number
// checkNumber(5)
//   .then((message) => {
//     console.log("Resolved:", message);
//   })
//   .catch((error) => {
//     console.error("Rejected:", error);
//   });
async function runtest (n) {
    try{
        let result = await checkNumber(n);
        console.log("Resolved:", result);
    return result;

   } catch (error) {
    console.error("Rejected:", error);
    return error; // Re-throw the error to be handled by the caller
   }


}
runtest(5);
runtest(-5);
// Try with a negative number
// checkNumber(-3)
//   .then((message) => {
//     console.log("Resolved:", message);
//   })
//   .catch((error) => {
//     console.error("Rejected:", error);
//   });

// Destructuring example with an array of team members
const team = [
    'Ahmed', 
    'Bilal', 
    'Ali', 
    'Raahim', 
    'Asad', 
    'Zubair', 
    'Aftab', 
    'Razzaq', 
    'Rafiq'
];
const [ceo, manager, ...members] = team;
console.log(members);