
const date = new Date();
    log('\n' + date)

votar(15); votar(16); votar(18); votar(66)
function votar(idade) {
    if (idade < 16) {
        var nv = ' anos. Nao vota.'
        console.log(`${idade}${nv}`)
        log('\n' + idade + nv)
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        var vop = ' anos. Voto opcional.'
            console.log(`${idade}${vop}`)
            log('\n' + idade + vop)
    } else {
        var vob = ' anos. Voto obrigatório.'
            console.log(`${idade}${vob}`)
            log('\n' + idade + vob)
    }
}

function log (msg) {
    var fs = require('fs')
    fs.appendFileSync('log', `${msg}`)
}
log('\n')


// test --------------------------------

// Saida de log
/* var fs = require('fs')
console.log("Hi!");
fs.appendFileSync('log', 'Oi! \n'); */

// Saida de log
/*var fs = require('fs')
var msg = '\nNew test, ok! \n'
//console.log(msg);
const date = new Date();
fs.appendFileSync('log', `${msg} | ${date}`); */

// test --------------------------------