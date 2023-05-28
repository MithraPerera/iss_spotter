// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// TESTING CODE FOR OUR 2 FUNCTIONS

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   // console.log('It worked! Returned IP:', ip, "Type:", typeof ip);
// });

// fetchCoordsByIP("99.234.242.147", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   } else {
//     console.log(data);
//   }
// });