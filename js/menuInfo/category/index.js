import { categories } from "../../data.js";
import { createElement } from "../../../helper.js";

const categoryListDiv = createElement("div", "category");
const categoryList = document.createElement("ul");
categoryList.className = "category-list";

const categoryKeyArray = Object.keys(categories);

categoryKeyArray.map((key) => {
  const listElement = document.createElement("li");
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", `#${categories[key]}`);
  linkElement.innerText = categories[key];
  listElement.appendChild(linkElement);
  categoryListDiv.appendChild(listElement);
  return;
});

export default categoryListDiv;
