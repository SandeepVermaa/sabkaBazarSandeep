import * as template from "./register.hbs";

export function init() {
  let container = document.getElementById("register");
  if(container){
    container.innerHTML = template({ title: "register" });
  }
}