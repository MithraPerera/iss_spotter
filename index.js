// index.js
const { nextISSTimesForMyLocation } = require('./iss');

// TESTING CODE FOR OUR 3 FUNCTIONS

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

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log("Could not retrieve ISS times.", error);
//   } else {
//     console.log(data);
//   }
// });

// MAIN CODE

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // success, print out the deets!
  printPassTimes(passTimes);
});