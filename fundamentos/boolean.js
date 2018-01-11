let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!isActive)  //Negacao = false 
console.log(!!isActive)  //Negacao Negacao = true 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!![])  //array
console.log(!!{})  //objeto literal
console.log(!!Infinity) //Tipo Infinito
console.log(!!(isActive = 0)) //exceto com zero é false

console.log('os falsos')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)  //not a number
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || "Opa" || 123))

let nome = ''
console.log(nome || 'Desconhecido')

nome = "Railander"
console.log(nome || 'Desconhecido')

//use o let so quando precisa alterar variavel.