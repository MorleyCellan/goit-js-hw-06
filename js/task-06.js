const inputText = document.getElementById("validation-input");
const validate = (event) => {
  const {
    target: {
      dataset: { length: dataLenght },
      value: { length: valueLenght },
    },
  } = event;
  const isValid = valueLenght === parseInt(dataLenght);
  event.target.className = isValid ? "valid" : "invalid";
};

inputText.addEventListener("blur", validate);
