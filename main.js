const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const characters = "(`~!@#$%^&*()_-+={}[]|:;\"'<>,.?/)";

const generateNewPassword = (passwordInput, number) => {
  const parsedNumber = Number(number);
  const base = alphabet.concat(numbers).concat(characters).split("");
  const splittedInput = passwordInput.split("");

  const newPassword = splittedInput.map((character) => {
    const foundIndex = base.findIndex((element) => character === element);
    if (foundIndex < 0) {
      const found = base.findIndex(
        (element) => element === character.toLowerCase()
      );
      return base[found + parsedNumber].toUpperCase();
    }
    return base[foundIndex + parsedNumber];
  });

  return newPassword.join("");
};

const generateButton = document.getElementById("generate");
const passwordInput = document.getElementById("password");
const generatedPasswordInput = document.getElementById("generatedPassword");
const stepsInput = document.getElementById("steps");

generateButton.addEventListener("click", (event) => {
  const generatedPassword = generateNewPassword(
    passwordInput.value,
    stepsInput.value
  );
  generatedPasswordInput.value = generatedPassword;
});

const hideButton = document.getElementById("hide");
hideButton.addEventListener("click", () => {
  const inputType = generatedPasswordInput.getAttribute("type");
  const setType = inputType === "text" ? "password" : "text";

  generatedPasswordInput.setAttribute("type", setType);
});

const copyButton = document.getElementById("copy");

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(generatedPasswordInput.value)
    .then(() => alert("Text copied!"));
});

// TODO: Add more than one form 
