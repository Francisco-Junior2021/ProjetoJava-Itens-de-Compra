import { lista, desmarcar, adicionar, remover, listar, marcar } from "./lista.js";
window.addEventListener("load" , () => {
    listar();
    console.log(JSON.parse(localStorage.getItem('lista')));
    
    let botaoAdicionar = document.querySelector("#botao-adicionar");
    botaoAdicionar.addEventListener("click" , () => {
        const preco = document.querySelector("#input-preco").value;
        const nome = document.querySelector("#input-nome").value;
        const produto = {
            'nome': nome,
            'preco': preco,
            'comprado': false
        }
        adicionar(produto);
        console.log(JSON.parse(localStorage.getItem('lista')));
    })

})
  
  
  