import * as template from './header.hbs';

export function init() {
  let container = document.getElementById("header");
  container.innerHTML = template({ title: "HEADER" });
}
