var idade = 16
if (idade < 16) {
    console.log(`Nao vota.`)
} else {
    if (idade >= 16 && idade < 18) {
        console.log(`Voto opcional.`)
    }
}





// test --------------------------------

// Saida de log
/* var fs = require('fs')
console.log("Hi!");
fs.appendFileSync('log', 'Oi! \n'); */

// Saida de log
var fs = require('fs')
var msg = 'test 2 ok! \n'
//console.log(msg);
fs.appendFileSync('log', `${msg}`);

// input no node
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });

// test --------------------------------