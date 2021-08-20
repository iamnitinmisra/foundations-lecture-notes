const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome user to the password validator tool");

function runReadline() {
  rl.question("Please enter a new password ", (answer) => {
    if (answer.length >= 10) {
      console.log(`Success`);
      rl.close();
    } else {
      runReadline();
    }
  });
}

runReadline();
