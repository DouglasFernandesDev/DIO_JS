function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;  //  modulo de dois = 0 // != significa não lógico // === tem que voltar somente pares
}

const meuArray = [1, 25, 65, 33, 14, 28, 79];

console.log(filtraPares(meuArray));