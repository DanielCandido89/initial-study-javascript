/* object.values
 object.entries 
 onjetct.assign(des, any) 
 object.getOwnPropertyDescriptor(o, 'prop')
 ... (spread)
 
 // ja vimos
 Object.keys (retorna as chaves)
 Object.freeze (congela o objeto)
 Object.defineProperties(define uma propriedade)
 */

const produto = { nome: "Produto", preco: 1.8, material: "Porcelana" };

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
