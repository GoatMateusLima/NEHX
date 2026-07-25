const livros = [
    {
        type: "romantico",
        name: "noites brancas"
    },
    {
        type: "filosofia",
        name: "socrates"
    },
    {
        type: "gastronomia",
        name: "como cozinhaar"
    }];


console.log(livros[1].type)
console.log(livros[1].name)
console.log(livros[2])



//COrrecao de  conceito pois li e ecrevi que um objeto nunca e achado atraves de um indice mas nesse caso ele e achado e literalente ele ta dentro de um objeto que legal. so vou testar algo quero ver se nao to confundindo as coisas.

const livros2 = {
    type: "romantico",
    name: "noites brancas"
};
console.log(livros2.type)

//type aqui se trata da caixa do conteudo da prorpiedade, enquanto no modelo de cima e  tipo da propriedade literamene, por isso sempre da undefined ou string akakakka.

//so tem mais uma duvida que vou testar enquato escrevo aqui, vou testar criar um co varios, calma ae

const livros3 = {
    type: "filosofia",
    name: ["socrates", "aristoteles", "platao"]
};

console.log(livros3)
console.log(livros3.name[1])
console.log(livros3.type)

// melhor que isso seria usar a base de uma loja ao inves d evarios elementos de indice daria ara criar objetos dentro de name onde cada objeto tive o nome do liro, ink e todos dados, que legal isso to animado para o resto das coisas.