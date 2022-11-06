# ObjectTree

Problem description:
Write a function createTree that creates a nested ul/li list from the nested object.

For instance:
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
Choose one of two ways of solving this task:

Create the HTML for the tree and then assign to container.innerHTML.
Create tree nodes and append with DOM methods.
Would be great if you could do both.

P.S. The tree should not have “extra” elements like empty <ul></ul> for the leaves.
