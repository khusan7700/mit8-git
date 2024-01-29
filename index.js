
// Module package Core.


//---------------------------------------

// setTimeout(function () {
//     console.log("ishga tudhdi");
// }, 5000); 


//setTimeout--> qanda vaqtdan kegin ishlash.



//---------------2------------------------

// let number = 0;

// setInterval(function() {
//     console.log("hisob", number);
//     number++;
// }, 1000);

//setInterval--> to'xtovsiz ravishda qod ishga tushadi.

//-----------------3----------------------

const fs = require('fs');
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

console.log("**************");


fs.writeFileSync('./input.txt', `${data} \n\t\t by bekzodAli`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);
 