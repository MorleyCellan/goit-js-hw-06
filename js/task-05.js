const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const getInput = (event) => {
  // const { value, type, placeholder, id } = event.currentTarget;
  const result = event.currentTarget.value.trim();
  output.textContent = result.length === 0 ? "Anonymous" : result;
};

inputq.addEventListener("input", getInput);
