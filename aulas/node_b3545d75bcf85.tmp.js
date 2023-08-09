
// 1- Aula 16
function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return ('Ímpar!')
    }
}
console.log('1- ' + parimpar(4))

//2- Função com retorno e parâmetros pre definidos
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log('2- ' + soma(23))

// 3- Função de variável com parâmetro
let v = function(x) {
    return x*2
}
console.log('3- ' + v(50))

// 4- Arrow Function sintaxe:
// (a, b) => {
//     return a + b;
// }
// (a, b) => a + b;
let a = 5;
let b = 10;
let c = (n1, n2) => n1 + n2;
console.log('4- ' + c(a,b));

// 5- 
let d = (x, y) => {
    let op;
    if(x > 5) {
        op = x * y;
    } else {
        op = x / y;
    }
    return op
}
console.log('5- ' + d(a, b))

// 6- Arrow Func c 1 argumento
let frase = "Felipe e um bom Dev!";
let fraseArray = (frase) => frase.split(' ');
console.log('6- ' + fraseArray(frase) + ' type: ' +  typeof(fraseArray(frase)));

// 7- Sem argumentos
let semArg = () => console.log("7- Sem Arg!")
semArg();

// 8- Caso de uso
let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Calção', preco: 20, cor: 'Azul'},
]
let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50;
});
console.log('8- ',  precoMaiorQue50)

// 9- Outro caso
setTimeout(() => {
    console.log("9- It's time!")
}, 2000);

function ContarSegundos(){
    var segundos = 1;
    console.log("Já passou " + segundos +" segundos...");
}
setInterval(ContarSegundos, 1000);
