import * as template from "./signin.hbs";

export function init() {
  let container = document.getElementById("signin");
  if(container){
    container.innerHTML = template({ title: "signin" });
  }
}