/* 
Primitivos (imutáveis) - String, number, boolean, undefined,
null (bigint, symbol) - Valor

Referência (mutáveis) - array, object, function
*/

const a = {
  nome: "Daniel",
  sobrenome: "Ribeiro",
};
const b = a;

b.nome = "João";
console.log(a);
console.log(b);
