const pessoa = {
    nome:"yuri",
    idade:40
};

console.log(pessoa.nome + " tem "+ pessoa.idade +" anos")

const users = [
    {
        nome:"yuri",
        idade:2
    },
    {
        nome:"carol",
        idade:90
    },
    {
        nome:"grau",
        idade:12
    }
];

console.log(users[1].nome + " tem " + users[1].idade + " anos de idade ")


users.push({nome:"jose", idade:30})
users.unshift({nome:"maria", idade:20})

users.splice(2,1)
console.log(users)

//primeira forma atribuindo um valor direto na propriedade do objeto
users[0].nome = "mariazinha"

//o segundo jeito e apagando e criando um novo objeto na mesma posicao
users.splice(0,1, {nome: "mariazinha", idade: 25})
console.log(users)


console.log(users.includes(1,2)) // false