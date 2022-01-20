import "./../styles/styles.scss";
import * as template from "./../templates/register.hbs";
import * as footer from "./footer.js";
import * as header from "./header.js";
import * as helper from "../helper/general.helper.js";
import * as toastr from "../helper/toastr.js";

function init() {
  let container = document.getElementById("register");
  if (container) {
    container.innerHTML = template({ title: "register" });
  }
}

async function onSubmitRegister(e) {
  e.preventDefault();
  const formData = new FormData(document.querySelector("#regForm"));
  const userData = {};
  for (var [key, value] of formData.entries()) {
    userData[key] = value;
  }
  try {
    let response = await helper.request("register", "POST", userData, {
      "Content-Type": "application/json",
    });
    response = await response.json();
    if (response.status === "success") {
      toastr.showToast(response.message);
      resetForm();
    } else {
      toastr.showToast(response.message, true);
    }
  } catch (e) {
    console.log(e);
  }
}

function resetForm() {
  document.querySelector("#regForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
  header.init("Register");
  footer.init();
  init();
  document
    .getElementById("regForm")
    .addEventListener("submit", onSubmitRegister);
});
