export const lista = []

export function adicionar(produto) {
    let arrayString = localStorage.getItem('lista');
    const lista = JSON.parse(arrayString);
    lista.push(produto);
    localStorage.setItem('lista' , JSON.stringify(lista));
    listar();
}

export function remover (produto) {
    let lista = JSON.parse(localStorage.getItem('lista'));
    const indice = lista.findIndex((lista) => {
        return lista.nome === produto;
      });
    lista.splice(indice,1);
    localStorage.setItem('lista' , JSON.stringify(lista));
    listar();
}

export function marcar (produto) {
    let lista = JSON.parse(localStorage.getItem('lista'));
    lista.forEach(lista => {
        if(lista.nome === produto) {
            lista.comprado = true;
        }
    })
    localStorage.setItem('lista' , JSON.stringify(lista));
}

export function desmarcar (produto) {
    let lista = JSON.parse(localStorage.getItem('lista'));
    lista.forEach(lista => {
        if(lista.nome === produto) {
            lista.comprado = false;
        }
    })
    localStorage.setItem('lista' , JSON.stringify(lista));
}

export function listar () {
    let lista = JSON.parse(localStorage.getItem('lista'));  
    let table = document.querySelector("table");
    lista.forEach(lista => {
        let tr = document.createElement("tr");
        let produto = document.createElement("td");
        produto.textContent = `${lista.nome}`
        let preco = document.createElement("td");
        preco.textContent = `${lista.preco}`;
        let comprado = document.createElement("td");
        comprado.textContent = lista.comprado === false ? "Não" : "Sim" ; //desmarcar(lista.nome) : marcar(lista.nome) ;
        let botaoRemover = document.createElement("button")
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener("click" , () => {
            console.log(`botao do produto ${lista.nome} clicado`);
            remover(lista.nome);  
        })
        let botaoComprar = document.createElement("button");
        botaoComprar.textContent = `Marcar como comprado`;
        botaoComprar.addEventListener("click" , () => {
            marcar(lista.nome);
        })
        tr.appendChild(produto);
        tr.appendChild(preco);
        tr.appendChild(comprado)
        tr.appendChild(botaoRemover);
        tr.appendChild(botaoComprar)
        table.appendChild(tr);
    });
}