export function createCategoryList(controller) {
  const getCategoryByCategoryId = controller.getCategoryByCategoryId();
  const categoryListContainer = document.createElement("div");
  categoryListContainer.setAttribute("class", "category");

  const categoryList = document.createElement("ul");
  categoryList.className = "category-list";

  const categoryKeyArray = Object.keys(getCategoryByCategoryId);

  categoryKeyArray.forEach((key) => {
    const listElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `#${getCategoryByCategoryId[key]}`);
    linkElement.innerText = getCategoryByCategoryId[key];
    listElement.appendChild(linkElement);
    categoryListContainer.appendChild(listElement);
    return;
  });
  return categoryListContainer;
}
