//               01234567
let umaString = "Um texto";

console.log(umaString[6]);
console.log(umaString + " em um lindo dia.");
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.concat(" em um lindo dia."));

console.log(umaString.indexOf("texto")); // em qual índice começa a palavra
console.log(umaString.lastIndexOf("m"));
console.log(umaString.search(/[x]/));
console.log(umaString.replace("Um", "Outra"));
console.log(umaString.length);
console.log(umaString.slice(1, 6));
console.log(umaString.split(" "));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
