

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

cadastro.addEventListener('submit', (event)=> {
    event.preventDefault()

    const dados = new FormData(cadastro)
    let name = dados.get('name')
    let idade = dados.get('idade')
    let email = dados.get('email')
    let numero = dados.get('numero')
    let senha = dados.get('senha')
    users.push({name,idade,email,numero,senha})
    console.log(users)
    renderList()
})


const list = document.getElementById('list')
function renderList() {
    list.innerHTML = ""
    let element = document.createElement('ul')
    users.forEach((a,i)=>{
        element.innerHTML = `
        <li>${a.name}<button type="click" onclick=${removeList(i)}>X</button></li>`;
        list.appendChild(element)
    })
    
}
function removeList(indice){
    users.splice(indice, 1)
}