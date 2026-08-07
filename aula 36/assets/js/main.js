const elementos = [
  { tag: "p", texto: "Qualquer texto que você quiser." },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

const container = document.querySelector(".container");

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const tagCriada = document.createElement(tag);
  const textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  container.appendChild(tagCriada);
}
