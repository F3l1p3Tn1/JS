// Aula15
let num = [5, 48, 2, 3, [1, 2]]
console.log(`Vetor: ${num}`)
console.log(num)

/* acrescentar valor */
let num1 = [5, 8, 4]
// length nao e um método e um atributo
num1[3] = 6; console.log(num1, num1.length)

// acrescenta na ultima posicao
num.push(13); console.log(num)

// metodo sort() ordena
num.sort(); console.log(num, num.length)

// repetição
var n = []
for(var i = 0; i < num1.length + 1; i++) {
    n.push('Posicao :' + i + ' - Valor: ' + num1[i]) 
}
console.log(n.sort(), typeof(n), n.length)

// Repetição com for(let * in *) {}
for(let i in num1) {console.log(num1[i])}

// buscar Index
for(let i in num) {
    console.log(`Index do num ${num[i]} = ` + num.indexOf(num[i]))
}
console.log(num.indexOf(111) + ' nao existe')