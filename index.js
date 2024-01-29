
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

// const fs = require('fs');
// const data = fs.readFileSync("./input.txt", "utf8");
// console.log(data);

// console.log("**************");


// fs.writeFileSync('./input.txt', `${data} \n\t\t by bekzodAli`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);
 

//--------------------------External module----------------------------------------
//--------------------------1-----------------------------
// External modeuleni ishlatishdan oldin moment ustanovka qilish kk. (npm install moment --save)

// const moment = require('moment');


// setInterval(() => {
//     const time = moment().format();
//     console.log(`Hozir vaqt: ${time}`);
// }, 5000);

//--------------------------2-----------------------------
/*npm install inquirer--> teminalni ichidan biror jovobni tanlash 
yoki user input kiritish narsalar uchin ishlatiladi
terminalda kiritgan jovobimiz vscodega borsin kabi vazifa
*/

const inquirer = require("inquirer");
inquirer
.prompt([{type: "input", name: "raqam", message: "raqamni kiriting?"}])
.then((answer) => { 
    console.log("Man kiritgan raqam:", answer.raqam);
 })
.catch((err) => console.log(err));
