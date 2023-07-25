
var agora = new Date()
var diaSem = agora.getDay()
var hj = diaSemana(diaSem)
console.log(`Hoje: ${hj}`)


function diaSemana(diaSem) {
switch(diaSem) {
    case 0:
        var v = 'Domingo'; break
    case 1:
        var v = 'Segunda'; break
    case 2:
        var v = 'Terça'; break
    case 3:
        var v = 'Quarta'; break
    case 4:
        var v = 'Quinta'; break
    case 5:
        var v = 'Sexta'; break
    case 6:
        var v = 'Sábado'; break
    default:
        var v = '[ERRO]'; break
}
return v
}

function test() {
    console.log('Test:')
    console.log('0-' + diaSemana(0))
    console.log('1-' + diaSemana(1))
    console.log('2-' + diaSemana(2))
    console.log('3-' + diaSemana(3))
    console.log('4-' + diaSemana(4))
    console.log('5-' + diaSemana(5))
    console.log('6-' + diaSemana(6))
}
test()