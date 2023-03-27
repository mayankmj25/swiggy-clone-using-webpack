import { createFoodItems } from "./foodItemsRender/index.js";
import { createCategoryList } from "./category/index.js";
import { createMenuCartSection } from "./cart/index.js";

export const createMenuInfo = (controller) => {
  const menuInfoContainer = document.createElement("div");
  menuInfoContainer.className = "menu-info";
  menuInfoContainer.appendChild(createCategoryList(controller));
  menuInfoContainer.appendChild(createFoodItems(controller));
  menuInfoContainer.appendChild(createMenuCartSection(controller));

  return menuInfoContainer;
};
