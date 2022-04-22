function mapSemThis(arr){
    return arr.map(function(item) {
        return item * 3
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));  // multiplica por 3

console.log(nums);  // mantem o array dos numeros inteiros intacto, a função a cima cria novo array multiplicado por 3