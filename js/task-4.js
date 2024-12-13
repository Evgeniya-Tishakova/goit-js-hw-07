const formEl = document.querySelector("form.form-field");

const handleForm = (event) => {
  event.preventDefault();
  if (
    !formEl.elements.email.value.trim() ||
    !formEl.elements.password.value.trim()
  ) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value.trim(),
    [formEl.elements.password.name]: formEl.elements.password.value.trim(),
  };
  console.log(formData);

  formEl.reset();
};

formEl.addEventListener("submit", handleForm);
