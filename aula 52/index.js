// return
// Retorna um valor
// Termina a função

function criaPessoa(nome, sobrenome) {
  return (nome, sobrenome);
}

const p1 = criaPessoa("Daniel", "Ribeiro");
const p2 = { nome: "João", sobrenome: "Guilherme" };

console.log(typeof p1);
console.log(typeof p2);

//

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(10));
