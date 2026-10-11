import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";

  list.forEach(item => {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = item.name + " - " + item.price + " EGP";
    listElement.append(row);
  });
}

export function matching() {
  return items.filter(item => item.category === "electronics");
}

export function start() {
  renderItems(items);

  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}
if (typeof document !== "undefined" && document.querySelector("#list")) {
  start();
}
