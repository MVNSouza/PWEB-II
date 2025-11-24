// Rest Operator em Funções
function soma(valorInicial, ...valores) {
    return valores.reduce((acc, valor) => acc + valor, valorInicial);
}


// Spread Operator
// Spread Operator em Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinado = [...arr1, ...arr2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

const copiaArr1 = [...arr1];
console.log(copiaArr1); // [1, 2, 3]

// Spread Operator em Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinadoObj = { ...obj1, ...obj2 };
console.log(combinadoObj); // { a: 1, b: 2, c: 3, d: 4 }

const copiaObj1 = { ...obj1 };
console.log(copiaObj1); // { a: 1, b: 2 }

const obj3 = { ...obj1, b: 5, z: 99 }; // Sobrescreve
console.log(obj3); // { a: 1, b: 5, z: 99 }