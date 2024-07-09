function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const handleClick = () => {
  document.querySelector("span.color").textContent = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
};

btn.addEventListener("click", handleClick);
