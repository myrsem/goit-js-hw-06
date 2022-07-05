const myInput = document.querySelector('#validation-input');

myInput.addEventListener('blur', onBlur);

function onBlur(el) {
    const inputVal = el.currentTarget;
    const inputLength = Number(inputVal.dataset.length);
    if (inputVal.value.length === inputLength) {
        inputVal.classList.remove('invalid');
        inputVal.classList.add('valid');
    } else {
        inputVal.classList.remove('valid');
        inputVal.classList.add('invalid');
    }
}
