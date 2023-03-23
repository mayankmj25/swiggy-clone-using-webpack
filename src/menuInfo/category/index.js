import { categoryByCategoryID } from "../../helpers/foodItems.js";

export function createCategoryList() {
  const categoryListContainer = document.createElement("div");
  categoryListContainer.setAttribute("class", "category");

  const categoryList = document.createElement("ul");
  categoryList.className = "category-list";

  const categoryKeyArray = Object.keys(categoryByCategoryID());

  categoryKeyArray.map((key) => {
    const listElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `#${categoryByCategoryID()[key]}`);
    linkElement.innerText = categoryByCategoryID()[key];
    listElement.appendChild(linkElement);
    categoryListContainer.appendChild(listElement);
    return;
  });
return categoryListContainer;
}

