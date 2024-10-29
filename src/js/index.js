import "../../src/style.scss";
import { digitsMask } from "./mask";
import { clientValidation } from "./clientValidation";

const form = document.querySelector(".form-wrapper");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errors = document.querySelectorAll(".error");
const inputs = [nameInput, emailInput, phoneInput, messageInput];

digitsMask(phoneInput);
clientValidation(form, inputs, errors);
console.log("hello worlsd");
