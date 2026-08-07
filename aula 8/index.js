const nome = "Daniel";
const sobrenome = "Ribeiro";
const idade = 20;
const peso = 90;
const altura = 1.84; // em metros
let imc; // peso / (altura * altura)
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2026 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
console.log("tem", altura, "de altura e seu IMC é de", imc);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`); // outra maneira de envolver as variáveis
