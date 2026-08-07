/*
Entre 0-11 (bom dia)
Entre 12-17 (boa tarde)
Entre 18-23 (boa noite)
*/

// if pode ser usado sozinho
// sempre que utilizo else, preciso de um if antes
// posso ter vários else if na checagem
// só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

const hora = 10;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa Tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá");
}

//

const tenhoGrana = true;

if (tenhoGrana) {
  console.log("Vou sair de casa");
} else {
  console.log("Não vou sair de casa");
}
