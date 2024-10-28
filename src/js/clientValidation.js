export const clientValidation = (form, inputs, errors) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach((input, index) => {
      if (!input.value.trim()) {
        errors[index].textContent = "Необходимо запомнить данное поле";
        console.log(inputs);
      }
    });

    const rightEmail = /^(?!\.)(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputs[1].value.trim() && !rightEmail.test(inputs[1].value.trim())) {
      errors[1].textContent = "Необходимо ввести корректный email";
    }
  });
};
