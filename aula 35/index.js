for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "impar";
  console.log(i, par);
}

const frutas = ["maçã", "pêra", "laranja", "uva", "banana", "abacaxi"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
