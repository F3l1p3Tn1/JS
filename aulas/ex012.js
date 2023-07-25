// func pega a hora e cumprimenta
const date = new Date()
var hora = date.getHours()
var min = date.getMinutes()
console.log('Sao ' + hora + ' horas e ' + min + ' minutos.')
function saudacao(hora) {
    if (hora < 6) {
        console.log('E de madrugada!')
    } else if (hora < 12) {
        console.log('Bom dia!')
    } else if (hora < 18) {
        console.log('Boa tarde!')
    } else if (hora >= 18) {
        console.log('Boa noite!')
    }
}
saudacao(hora)


function test() {
    console.log('1'); saudacao(1)
    console.log('5'); saudacao(5)
    console.log('6'); saudacao(6)
    console.log('12'); saudacao(12)
    console.log('17'); saudacao(17)
    console.log('18'); saudacao(18)
    console.log('19'); saudacao(19)
    console.log('20'); saudacao(20)
    console.log('23'); saudacao(23)
}
test()