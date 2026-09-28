/* escreva uma função que recebe um número e retorne o seguinte; 
número é divisivel  por 3 = Fizz
número é divisivel  por 5 = Buzz
número é divisivel  por 3 e 5 = FizzBuzz
número  Não é divisivel  por 3 e 5 = retorna o próprio numero
checar se o número é realmente um número = retorna o próprio numero
use a funçao com numeros de 0 a 100
*/
function FizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

console.log("a", FizzBuzz("a"));
for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
