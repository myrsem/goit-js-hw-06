const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const addItemEl = document.querySelector('#ingredients');

const listEl = ingredients.map((ingredient) => {
    const ItemEl = document.createElement("li");
    ItemEl.textContent = ingredient;
    ItemEl.classList.add("item");
    return ItemEl;
  });
  
  addItemEl.append(...listEl);

  console.log(addItemEl);