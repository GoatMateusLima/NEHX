
const a = document.querySelector('#a')
a.textContent = 'h1'

const b = document.querySelector('#b')
const t = document.createElement('p')
t.textContent = 'texto dentro do div'
b.appendChild(t)




const btn = document.querySelector('#k')


btn.addEventListener('click', () => {
    const name = document.querySelector('#inName').value
    t.textContent = name
    console.log(name)
})



const users = []
const cadastro = document.getElementById('fmCadastro')

cadastro.addEventListener('submit', (event) => {
    event.preventDefault()

    const dados = new FormData(cadastro)
    let name = dados.get('name')
    let idade = dados.get('idade')
    let email = dados.get('email')
    let numero = dados.get('numero')
    let senha = dados.get('senha')
    users.push({ name, idade, email, numero, senha })
    console.log(users)
    renderList()
})


const list = document.getElementById('list')
function renderList() {
    list.innerHTML = ""
    users.forEach((a, i) => {
        //const i = createElement('li')
        //i.textContent(a.name)
        //list.appendChild(i)
        //element.innerHTML = `
        //<li>${a.name}<btnRemover type="click" onclick="removeList()">X</btnRemover></li>`;
        let element = document.createElement('li')
        element.textContent = a.name




        let btnEditar = document.createElement('button') 
        btnEditar.textContent = "E"
        btnEditar.addEventListener('click', (event) => {
            event.preventDefault()

            const dados = new FormData(cadastro)
            let name = dados.get('name')
            let idade = dados.get('idade')
            let email = dados.get('email')
            let numero = dados.get('numero')
            let senha = dados.get('senha')


            //Usei um verificador tenario para saber se o valor e vazio ou contem dados.
            name == '' ? name = a.name : name = name
            idade == '' ? idade = a.idade : idade = idade
            email == '' ? email = a.email : email = email
            numero == '' ? numero = a.numero : numero = numero
            senha == '' ? senha = a.senha : senha = senha

            users.splice(i, 1, { name, idade, email, numero, senha })
            renderList()
        })


        let btnRemover = document.createElement('button') // cria  um botao no documento
        btnRemover.textContent = 'X' //define o texto do meu botao
        btnRemover.addEventListener('click', (event) => {
            event.preventDefault() // previne o comportamento padrão do botão
            users.splice(i, 1)
            renderList()  //renderiza a lista novamente após remover o usuário
        })
        element.appendChild(btnEditar)
        element.appendChild(btnRemover)
        list.appendChild(element)
    })

}
