const data = new Date();

const dia = data.getDate();
const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const mes = meses[data.getMonth()];
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

const diasSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
const diaSemana = diasSemana[data.getDay()];

const dataElemento = document.getElementById("data");
if (dataElemento) {
  dataElemento.textContent = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`;
}

/* Melhor Maneira:
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/
