'use strict';

/////////////////////////////////////////////////////////////////
// Nesting arrays

// Each of these variables contain an array.
const thingsToBuy = ["paint", "sand paper", "brushes", "wallpaper stripper"];
const thingsToResearch = ["colors", "painting techniques", "music for DIY"];
const actionsToTake = ["strip wallpaper", "clean walls", "sand surfaces", "apply paint"];
const thingsToDiscuss = ["colors", "who does what", "budget", "sand paper"];

// We made a new array that contains 4 arrays.
const paintLivingRoomProject = [thingsToBuy, thingsToResearch, actionsToTake, thingsToDiscuss];

console.log(paintLivingRoomProject);

// We can also do this using a single expression, but that becomes a little
// harder to read.
const paintLivingRoomProject2 = [
  ["paint", "sand paper", "brushes", "wallpaper stripper"],
  ["colors", "painting techniques", "music for DIY"],
  ["strip wallpaper", "clean walls", "sand surfaces", "apply paint"],
  ["colors", "who does what", "budget", "sand paper"],
];
console.log(paintLivingRoomProject2);

// If we use console.table we can see the nested
// array structure as a table. You may need to widen the
// console panel to properly see the table.
console.table(paintLivingRoomProject2);
// Each row in this table is a top-level array (or "outer" array).
// The indexes at the head of the table tell us the index of the item
// inside the inner arrays.
// 'music for DIY' is in the 2nd array, 3rd item.


//////////////////////////////////////////////////////////////////////////////
// If we have a nested array we can use the following syntax to read values
// print the 3rd value of the 2nd array
console.log(paintLivingRoomProject[1][2]); // "music for DIY" 

// print the 4th value of the 1st array
console.log(paintLivingRoomProject[0][3]); // "wallpaper stripper" 