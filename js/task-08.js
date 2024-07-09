const loginForm = document.querySelector(".login-form");
const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;
  const isEmpty = email.value.length === 0 || password.value.length === 0;

  if (isEmpty) alert("All fields must be filled in.");
  if (!isEmpty) {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  }

  return event.target.reset();
};

loginForm.addEventListener("submit", handleSubmit);
