// Atividade 10: Atividade final, que junta tudo: uma lista de tarefas em JS puro, no console, com array de objetos (nome e concluida), com capacidade de adicionar, remover, editar e marcar como concluída. Essa é a atividade que prova que você realmente domina o tema inteiro — array, objeto, os métodos todos, busca, iteração, filtro e transformação, tudo junto num caso de uso real.

const listTarefas = [
    { name: "jogar bossla", type: "concluido" },
    { name: "jogar basquete", type: "pendente" },
    { name: "andar de skate", type: "pendente" }
]; //cria lista com tarefas ja selecionadas



listTarefas.push( // acrescenta mais tarefas repetidas mas adiciona
    { name: "jogar bola", type: "concluido" },
    { name: "jogar basquete", type: "pendente" },
    { name: "andar de skate", type: "pendente" }
)

listTarefas.splice(1, 1) //deleta um usuario com base na posicao, credito que em uma funcao eu poderia usar variaveis diretamente no lugar dos numeros


listTarefas[1].type = ("concluido") // edito um valor determinado do type.
listTarefas[2].name = ("dancar frevo") // editar valor do nome de uma posicao determinada, tambem acredito que da para dentro de uma funcao criar uma forma de ao clicar em editar ele reconhecer e ditar o nome e o type da posicao, acredito que seria algo parecido com listTarefas[i]
listTarefas.splice(3, 1, { name: "andar de bicicleta", type: "pendente" }) //aqui eu gero outro objeto do zero, simplesmente deletei o 3 e acrescentei o objeto.


console.log(listTarefas)

console.log("----------------------------------------------------------------")

//apos cncluir criar uma funcao que gera tarefas automatico e define se foi ou nao concluida n aleatorio.
const tarefasAleatorias = [];
for (let i = 0; i <= 10; ++i) {
    tarefasAleatorias.push({ name: Math.random() >= 0.5 ? "correr 10km" : "dancar frevo", type: Math.random() >= 0.5 ? "concluido" : "pendente" });
}
console.log(tarefasAleatorias);



console.log("----------------------------------------------------------------")
function adicionarTarefa(name, type) {
    listTarefas.push({ name: name, type: type });
}

adicionarTarefa("estudar JS", "pendente");
console.log(listTarefas);




console.log("----------------------------------------------------------------")
/*function removeList(a){   ///Forma errada
    for(let i = 0; i <= listTarefas.length; ++i){
        if(listTarefas[i].name === a){
            listTarefas.splice(i,1)
        }
    listTarefas.splice(listTarefas.indexOf(listTarefas.find((q) => q.name === a)),1)
    }
} */

//Forma correta
function removeList(a) {
    listTarefas.splice(listTarefas.indexOf(listTarefas.find((q) => q.name === a)), 1)
}


removeList("estudar JS")
console.log(listTarefas)

console.log("----------------------------------------------------------------")
//receber nome da tarefa e editar informacoes da tarefa.
function editList(name, nName, nType) {

    //funcionou
    /*let nObj = { name: nName, type: nType }
    listTarefas.splice(listTarefas.indexOf(listTarefas.find((q) => q.name === name)), 1, nObj)
    */

    //~~~~~~

    //pensei nesse metodo com verificacao para evitar enviar um typo sem nome
    /*if (name !== "" && nName !== "" && nType !== "") {
        let nObj = { name: nName, type: nType }

        listTarefas.splice(listTarefas.indexOf(listTarefas.find((q) => q.name === name)), 1, nObj)
    } else if(name !== "" && nType !== "" && nName === ""){

        let nObj = { name: name, type: nType }
        listTarefas.splice(listTarefas.indexOf(listTarefas.find((q) => q.name === name)), 1, nObj)

    }*/

    let nObj = { 
        name: nName === "" ? name : nName, 
        type: nType === "" ? "vazio" : nType 
    }

    listTarefas.splice(listTarefas.indexOf(listTarefas.find((q) => q.name === name)), 1, nObj)
    
}
editList("dancar frevo", "d", "")
console.log(listTarefas)



console.log("----------------------------------------------------------------")

function concluirTarefa(name){
    let i = listTarefas.findIndex((a)=> a.name === name);
    listTarefas[i].type = "concluido"
}
concluirTarefa("d")
console.log(listTarefas)