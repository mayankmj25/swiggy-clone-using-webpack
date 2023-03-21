import { categories } from "../../data.js";

export function cretaeCategoryList(parentElement) {

  const categoryListContainer = document.createElement("div");
  categoryListContainer.setAttribute("class", "category");

  parentElement.appendChild(categoryListContainer);
  const categoryList = document.createElement("ul");
  categoryList.className = "category-list";

  const categoryKeyArray = Object.keys(categories);

  categoryKeyArray.map((key) => {
    const listElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `#${categories[key]}`);
    linkElement.innerText = categories[key];
    listElement.appendChild(linkElement);
    categoryListContainer.appendChild(listElement);
    return;
  });

parentElement.appendChild(categoryListContainer);
}

