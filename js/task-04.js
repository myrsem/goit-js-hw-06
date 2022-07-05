const counter = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
  };
  
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    counter.span.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    counter.span.textContent = counterValue;
  };
  
  counter.sub.addEventListener("click", increment);
  counter.add.addEventListener("click", decrement);