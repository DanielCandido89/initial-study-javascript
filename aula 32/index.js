const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

/* 
 let nome = "Daniel"; // criando
 var nome2 = "Daniel"; // criando

if (verdadeira) {
  let nome = "Ribeiro"; // criando
  var nome2 = "Candido"; // redeclarando

  if (verdadeira) {
    var nome2 = "Ronaldo"; // redeclarando
    let nome = "Outra coisa";
  }
}

console.log(nome, nome2);
*/

function falaOi() {
  if (verdadeira) {
    let nome = "Daniel";
    var sobrenome = "Ribeiro";
  }
  console.log(sobrenome);
}

falaOi();
