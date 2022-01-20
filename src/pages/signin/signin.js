import "./../../styles/styles.scss";
import * as template from "./../../templates/signin.hbs";
import * as footer from "./../../templates/footer/footer.js";
import * as header from "./../../templates/header/header.js";

function init() {
  let container = document.getElementById("signin");
  if (container) {
    container.innerHTML = template({ title: "signin" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  header.init("SignIn");
  footer.init();
  init();
});
