const met = [1,2,3];
//adiciona ao final
met.push(4);
//met.pop();
console.log(met)

//adiciona ao inicio
met.unshift(8);
//met.shift();
console.log(met)


met.splice(1,1) // tira o elemento da posição 1
met.splice(1,0,5) //adiciona na posição 1 o valor 5; 
console.log(met)


//metodos de busca

//no metodo find usamos de uma arrow function ou seja uma funco anonim para criar um verificacao de dados dentro do array e retornar um fallback com o valor do elemento se existir e se nao existir retornar um undefined
console.log(met.find((i) => i <= 3)) // find retorna o valor do elemento encontrado com
                                         // a condição do callback, se não encontrar retorna undefined

console.log(met.indexOf( met.find((i) => i <= 3))) // indexOf retorna a posição do elemento encontrado com a condição do callback, se não encontrar retorna -1
 
console.log(met.includes(5))


//PECORRER array 
for(let i = 0; i <= met.length ; ++i){ // esse for pecorre o aaray com base em seu tamanho ou seja o length le o array e retorna se ele e maior que i.
    console.log(i)
    console.log(met.indexOf(i))
}

console.log("----------------------------")
console.log("----------------------------")
met.forEach((e, i, a) => { //cada forEach pode te retornar 3 valores, 3 parametros, valor, indice e array completo.
    console.log(e)
    console.log(i)
    console.log(a)
})

console.log("----------------------------")

//filtrar e transformar:

const arrayNovo = met.filter((b) => b > 3); //filtra atraves de arrow function que verifica os numeors maiores que N e pega eles e coloca dentro do novo array

console.log(arrayNovo)

console.log("----------------------------")
const transformArray = met.map((i)=> i * 2) 
console.log(transformArray)