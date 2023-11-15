const lista = {
    adicionar: function (item) {
      let items = this.listar();
      items.push(item);
      localStorage.setItem('shoppingList', JSON.stringify(items));
    },
  
    remover: function (item) {
      let items = this.listar();
      items = items.filter(i => i.barcode !== item.barcode);
      localStorage.setItem('shoppingList', JSON.stringify(items));
    },
  
    marcar: function (item) {
      let items = this.listar();
      const index = items.findIndex(i => i.barcode === item.barcode);
      if (index !== -1) {
        items[index].comprado = true;
        localStorage.setItem('shoppingList', JSON.stringify(items));
      }
    },
  
    desmarcar: function (item) {
      let items = this.listar();
      const index = items.findIndex(i => i.barcode === item.barcode);
      if (index !== -1) {
        items[index].comprado = false;
        localStorage.setItem('shoppingList', JSON.stringify(items));
      }
    },
  
    listar: function () {
      const items = localStorage.getItem('shoppingList');
      return items ? JSON.parse(items) : [];
    }
  };
  
  