import * as template from './footer.hbs';

export function init() {
  let container = document.getElementById("footer");
  container.innerHTML = template({ title: "FOOTER" });
}
