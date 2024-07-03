const categories = document.getElementById("categories");
console.log(
  "Number of categories: " + categories.querySelectorAll("h2").length
);

const list = categories.querySelectorAll(".item");
for (let item of list) {
  console.log("\n");
  console.log("Category: " + item.querySelector("h2").textContent);
  console.log("Elements: " + item.querySelectorAll("ul li").length);
}
