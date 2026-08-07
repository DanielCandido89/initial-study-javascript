// For in -> le os indices ou chaves do objeto

/*
const frutas = ["Maçã", "Pêra", "Uva"];

for (let indice in frutas) {
  console.log(frutas[indice]);
}
*/

const pessoa = {
  nome: "Daniel",
  sobrenome: "Ribeiro",
  idade: 20,
};

for (let chaves in pessoa) {
  console.log(chaves, pessoa[chaves]);
}
