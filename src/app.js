require("./db/connection"); 
const yargs = require("yargs");
const { addUser } = require("/utils")
const command = process.argv[2];
const user = yargs.argv.user;
const pass = yargs.argv.pass;
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;

const app = () => {
    if (command === "add user") {
        addUser(user, pass)
        // add user function from utils //
    } else if (command === "add movie") {
        // add movie function from utils //
    }
};

app();