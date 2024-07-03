const categories = document.getElementById("categories");
console.log(
  "Number of categories: " + categories.querySelectorAll("h2").length
);

const categoryList = categories.querySelectorAll(".item");
for (let category of categoryList) {
  console.log("Category: " + category.querySelector("h2").textContent);
  console.log("Elements: " + category.querySelectorAll("ul li").length);
}
