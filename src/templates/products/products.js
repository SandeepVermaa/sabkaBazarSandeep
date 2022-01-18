import * as template from "./products.hbs";

export function init() {
  let container = document.getElementById("products");
  if(container){
    container.innerHTML = template({ title: "products" });
  }
}