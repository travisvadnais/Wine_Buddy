const wines = require("./seeds/wines.json");
const fs = require("fs");

//Declare an empty variable up front. 
let wineList;

//==========================================================//
//I found this sequence on S.O. here: https://stackoverflow.com/questions/31962567/removing-duplicates-from-json-array-by-a-value-in-each-json-object-in-array //

let hashesFound = {};

function hash(o){
  return o.name;
}    

wines.forEach(function(o){
  hashesFound[hash(o)] = o;
})

let results = Object.keys(hashesFound).map(function(k){
  return hashesFound[k];
})

//End S.O. sequence
//==========================================================//

//Take the results from the Stack Overflow sequence and stringify them.
wineList = JSON.stringify(results);

//Watch the console because it's pretty sweet
console.log(wineList)
//Then push the data to a new file that we can use to seed.

fs.appendFileSync('./finalSeedsMaybe.json', wineList);