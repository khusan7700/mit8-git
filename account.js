const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`hisobingizagi qoldiq: ${this.#amount}$`);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}$`);
        } else {
            console.log(`Sizning balansingizdagi pul yetarli emas: ${this.#amount}$`);
        }
    }
    
    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`hisobingiz to'ldirildi, hisobingiz ${this.#amount}$ tashkil etdi.`);
    }

    giveMeDetails() {
        console.log(`salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}ga teng`);
        console.log('Hisob raqamingiz:', this.#account_id);
     }
    


    static tellMeAboutClass() {
        console.log('Bu class accountlarni yasash uchun hizmat qiladi.');
    }


    static tellMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH;mm:ss")}`);
    }


}

module.exports = Account;
