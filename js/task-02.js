const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  ingredientsList.appendChild(document.createElement("li")).textContent =
    ingredient;
});
