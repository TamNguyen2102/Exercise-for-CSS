const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".form");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  let message = [];

  if (email.value === "" || email.value == null)
    message.push("Email must be required");

  if (password.value === "" || password.value == null)
    message.push("Password must be required");

  if (message.length > 0) {
    e.preventDefault();
    error.textContent = message.join(",");
    console.log(message.length);
  }
});
