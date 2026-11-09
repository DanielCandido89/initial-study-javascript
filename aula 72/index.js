// definePropety -> Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configurar
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("mensagem");
      }
      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa.", "");
      nome = valor;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);
// console.log(Object.keys(p1));
// for (let chave in p1) {
//  console.log(chave);
// }

const p2 = criaProduto("camiseta");
p2.nome = "Qualquer coisa.";
console.log(p2.nome);
