function validaArray (arr, num) {
    try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if (typeof arr !== 'object') 
    throw new TypeError('O array precisa ser do tipo object');

    if (typeof num !== 'number') 
    throw new TypeError('Num precisa ser do tipo number');

    if (arr.length !== num) throw new RangeError('O tamanho é inválido');

    return arr;
    } catch(e) {
    if (e instanceof ReferenceError) {
        console.log('Este é um ReferenceError');
        console.log(e.message);
    } else if (e instanceof TypeError) {
        console.log('Este é um TypeError');
        console.log(e.message);
    } else if (e instanceof RangeError) {
        console.log('Este é um RangeError');
        console.log(e.message);
    } else {
        console.log('Tipo de erro não esperado:' + e);
    }
  }
}
console.log(validaArray([1, 2, 3, 4, 5], 5));