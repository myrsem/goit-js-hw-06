const categoriesEl = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesEl.length);

[...categoriesEl].forEach(function (el) {
    
    const numberOfElements = el.querySelectorAll('li');
    
    const nameOfElements = el.querySelector('h2');
    
    console.log("Category:", nameOfElements.textContent);
    
    console.log("Elements:", numberOfElements.length);
});
