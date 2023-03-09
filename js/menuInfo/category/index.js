import { categories } from "../../data.js";

const categoryListDiv = document.createElement("div");
categoryListDiv.className = "category";
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
