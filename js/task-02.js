const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let container = document.getElementById("ingredients");

for (let ingredient of ingredients) {
  let li = document.createElement("li");
  li.innerText = ingredient;
  container.appendChild(li);
  console.log((li.innerText = ingredient));
}
