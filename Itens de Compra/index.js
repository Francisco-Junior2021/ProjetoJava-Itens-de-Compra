document.addEventListener('DOMContentLoaded', function () {
    const addItemForm = document.getElementById('addItemForm');
    const shoppingListTable = document.querySelector('#shoppingList tbody');
  
    addItemForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const barcode = document.getElementById('barcode').value;
      const itemName = document.getElementById('itemName').value;
      const price = parseFloat(document.getElementById('price').value);
      const comprado = false;
  
      const item = { barcode, itemName, price, comprado };
  
      lista.adicionar(item);
      exibirLista();
      addItemForm.reset();
    });
  
    function exibirLista() {
      const items = lista.listar();
  
      // Limpar a tabela antes de recriá-la
      while (shoppingListTable.firstChild) {
        shoppingListTable.removeChild(shoppingListTable.firstChild);
      }
  
      // Adicionar linhas à tabela
      items.forEach(item => {
        const row = document.createElement('tr');
  
        const barcodeCell = document.createElement('td');
        barcodeCell.textContent = item.barcode;
        row.appendChild(barcodeCell);
  
        const itemNameCell = document.createElement('td');
        itemNameCell.textContent = item.itemName;
        row.appendChild(itemNameCell);
  
        const priceCell = document.createElement('td');
        priceCell.textContent = item.price;
        row.appendChild(priceCell);
  
        const compradoCell = document.createElement('td');
        compradoCell.textContent = item.comprado ? 'Sim' : 'Não';
        row.appendChild(compradoCell);
  
        const actionsCell = document.createElement('td');
        const marcarButton = document.createElement('button');
        marcarButton.textContent = 'Marcar';
        marcarButton.addEventListener('click', () => marcarItem(item.barcode));
        actionsCell.appendChild(marcarButton);
  
        const desmarcarButton = document.createElement('button');
        desmarcarButton.textContent = 'Desmarcar';
        desmarcarButton.addEventListener('click', () => desmarcarItem(item.barcode));
        actionsCell.appendChild(desmarcarButton);
  
        const removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.addEventListener('click', () => removerItem(item.barcode));
        actionsCell.appendChild(removerButton);
  
        row.appendChild(actionsCell);
  
        shoppingListTable.appendChild(row);
      });
    }
  
    function marcarItem(barcode) {
      const item = lista.listar().find(i => i.barcode === barcode);
      if (item) {
        lista.marcar(item);
        exibirLista();
      }
    }
  
    function desmarcarItem(barcode) {
      const item = lista.listar().find(i => i.barcode === barcode);
      if (item) {
        lista.desmarcar(item);
        exibirLista();
      }
    }
  
    function removerItem(barcode) {
      const item = lista.listar().find(i => i.barcode === barcode);
      if (item) {
        lista.remover(item);
        exibirLista();
      }
    }
  
    exibirLista();
  });
  
  
  