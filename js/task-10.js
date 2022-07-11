function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const blockControls = document.querySelector('#controls');

const inputField = blockControls.querySelector('input');

const motherBlock = document.querySelector('#boxes');

motherBlock.style.display = `flex`;

motherBlock.style.flexWrap = `wrap`;

let BoxesCollection = [];

let sizesOfBox = 30;

function createBoxes(amount) {
    console.log(amount);
    for (var i = 0; i < amount; i += 1) {
        let createEl = document.createElement('div');
        createEl.style.width = `${sizesOfBox}px`;
        createEl.style.height = `${sizesOfBox}px`;
        sizesOfBox += 10;
        createEl.style.backgroundColor = getRandomHexColor();
        BoxesCollection.push(createEl);
    }
}

function pushBoxesCollection() {
    createBoxes(Number(inputField.value));
    motherBlock.append(...BoxesCollection);
}

const createBtn = blockControls.querySelector('[data-create]');

createBtn.addEventListener('click', () => {
    pushBoxesCollection();
    inputField.value = 0;
});

const destroyBtn = blockControls.querySelector('[data-destroy]');

destroyBtn.addEventListener('click', () => {
    window.location.reload();
});