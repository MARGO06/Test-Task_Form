import { serverValidation } from "./serverValidation";

const messageAnswer = (messageText) => {
  const app = document.getElementById("app");
  const message = document.createElement("p");
  message.className = "answer-registration";
  message.textContent = messageText;
  app.appendChild(message);

  setTimeout(() => {
    app.removeChild(message);
  }, 5000);

  return message;
};

export const clientValidation = (form, inputs, errors) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let isValid = true;

    inputs.forEach((input, index) => {
      if (!input.value.trim()) {
        errors[index].textContent = "Необходимо запомнить данное поле";
        isValid = false;
      }
    });

    const rightEmail = /^(?!\.)(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputs[1].value.trim() && !rightEmail.test(inputs[1].value.trim())) {
      errors[1].textContent = "Необходимо ввести корректный email";
      isValid = false;
    }

    if (isValid) {
      const data = {};
      inputs.forEach((input) => {
        data[input.id] = input.value;
      });
      console.log(data);
      const response = await serverValidation(data);

      const message = messageAnswer(response.message);

      if (response.status === "success") {
        form.reset();
        message.style.color = "green";
      } else {
        message.style.color = "red";
      }
      return response;
    }
  });
};
