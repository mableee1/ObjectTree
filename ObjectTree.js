function createTree(container, data) {
    if (Object.keys(data).length) {
        let ul = document.createElement('ul');
        Object.entries(data).forEach(([key, value]) => {
            let li = document.createElement('li'); 
            li.append(key);
            ul.append(li);
            createTree(li, value);
        });
        container.append(ul);
    }
}
let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };
let container = document.getElementById('container');
createTree(container, data);



