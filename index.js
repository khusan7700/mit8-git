
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
//-------------------1-----------------
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

// const inquirer = require("inquirer");
// inquirer
// .prompt([{type: "input", name: "raqam", message: "raqamni kiriting?"}])
// .then((answer) => { 
//     console.log("Man kiritgan raqam:", answer.raqam);
//  })
// .catch((err) => console.log(err));

//--------------------------3-----------------------------
// npm install validator--> bu qiymat qaytaradi.
// pastda @ bor bolgani uchun true qaytaryapti agar bolmasa faulse qaytarar edi.

// const validator = require("validator");

// const test = validator.isEmail('foo@bar.com');
// console.log("test:", test);

//--------------------------4-----------------------------
// npm install uuid

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);


//--------------------------File module----------------------------------------

// require --> modullar bilan masofaviy inport va export operatsi alamga oshiruvchi hisoblanadi.
// ESM (EcmaScript modullari) bilan ishlashda, "import" va "export" operatorlarini ishlatiladi.

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija:", natija);
// console.log("***********");
// //Natija: 1600

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija:", natija2);
// console.log("***********");
// //Natija: 90

// const natija3 = calculate.ayrish(70, 20);
// console.log("Natija:", natija3);
// console.log("***********");
// //Natija: 50

// console.log(require("module").wrapper);
//  '(function (exports, require, module, __filename, __dirname) { ','\n});'


//console.log(arguments);

const Account = require("./account");

Account.tellMeAboutClass();
// Natija--> Bu class accountlarni yasash uchun hizmat qiladi.

Account.tellMeTime();
//Natija--> Hozirgi vaqt 2024 01 31 06;46:49

console.log("================");

const myAccount = new Account('Martin', 20000, 42345235235);
myAccount.giveMeDetails();
// Natija--> salom hurmatli Martin sizning hisobingiz 20000ga teng
// Natija--> Hisob raqamingiz: 42345235235

myAccount.makeDeposit(1000000);
// Natija--> hisobingiz to'ldirildi, hisobingiz 1020000$ tashkil etdi.

// ferrari 400000 usd
myAccount.withdrawMoney(400000);
// Natija--> Hisobdan 400000 yechildi va qoldiq 620000$

myAccount.makeDeposit(200000);
// Natija--> hisobingiz to'ldirildi, hisobingiz 820000$ tashkil etdi.
