// Array é o vetor
// Estrutura unidirecional - Estrutura Linear
// Acessada atraves de seu identificador
//Forma de agrupar multiplos valores a partir de um idenficador
//Array hetorogenio - pq a linguagem fracamente tipada.. nao tem tipo nas variaveis

const valores = [7.7, 8.9, 9.2, 5.4]
console.log(valores[0], valores[3])  //Acessando array pelo idenficador
console.log(valores[4]) //indice inexistente - Javascrip returna undefined

valores[4] = 10 //Adicionando valor no indice 4 no array
console.log(valores)

valores[10] = 20
console.log(valores)
console.log(valores.length) //Acessar a quantidade de elementes de um array


valores.push({id: 3}, false, null, 'teste') //função para adicionar novos elementos no array
console.log(valores)
 
console.log(valores.pop()) // pega o ultimo valor do array e remove
console.log(valores)

delete valores[0] //deletar um atributo dentro de um objeto
console.log(valores)

console.log(typeof valores) //tipo array em javascript é um objeto