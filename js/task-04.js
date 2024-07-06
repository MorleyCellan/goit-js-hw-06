let counterValue = 0;
const div = document.querySelector("#counter");
const value = document.getElementById("value");
const btnDec = div.querySelector('[data-action="decrement"]');
const btnInc = div.querySelector('[data-action="increment"]');

const decrement = () => {
  counterValue--;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue++;
  value.textContent = counterValue;
};

btnDec.addEventListener("click", decrement);
btnInc.addEventListener("click", increment);
