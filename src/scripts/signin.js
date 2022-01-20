import "./../styles/styles.scss";
import * as template from "./../templates/signin.hbs";
import * as footer from "./footer.js";
import * as header from "./header.js";
import * as toastr from "../helper/toastr.js";


function init() {
  let container = document.getElementById("signin");
  if (container) {
    container.innerHTML = template({ title: "signin" });
  }
}

function onSubmitLogin(e) {
  e.preventDefault();
  const formData = new FormData(document.querySelector("#signinForm"));
  const userData = {};
  for (var [key, value] of formData.entries()) {
    userData[key] = value;
  }
  toastr.showToast('Login Successfull');
}

document.addEventListener("DOMContentLoaded", () => {
  header.init("SignIn");
  footer.init();
  init();
  document
    .getElementById("signinForm")
    .addEventListener("submit", onSubmitLogin);
});
