//JSON = Javascript Object Notation - Json formato textual
//Object Javascript nao é o mesmo que JSON - Object Javascript é Literal

//Objeto em javascript e uma colecao de chave valor 

const prod1 = {} // {} par de chaves forma literal de criar um objeto
prod1.nome = "Celular Ultra Mega" //nome foi criado dinamicamente
prod1.preco = 4998,90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Javascript',
    preco: 79.99
}

console.log(prod2)