// const prompt = require('prompt-sync')({
//     sigint: true
// });

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//     res.send("Server is up and running.")
// });

// app.listen(3000, function () {
//     console.log("Server is running on port 3000")
// });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let Field = class {
    constructor(arr) {
        this.field = arr;
    }
    print() {
        console.log(this.field[0].join(" "))
        console.log(this.field[1].join(" "));
        console.log(this.field[2].join(" "));
    }
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);