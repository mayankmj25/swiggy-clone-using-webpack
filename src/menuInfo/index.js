// const menuInfoDiv = document.createElement("div");
// import categoryListDiv from "./category/index.js";
import { renderFoodItems } from "./foodItemsRender/index.js";
// import { foodItemsDiv, updateItem } from "./foodItems/index.js";
// import { createFoodCardItem, foodItemsDiv } from "./foodItems/index.js";
// import { createMenuCartSection} from "./cart/index.js";
import { createCategoryList } from "./category/index.js";

export const menuInfo =()=> {
const menuInfoContainer = document.createElement("div");
menuInfoContainer.className = "menu-info";

// menuInfoContainer.appendChild(createMenuCartSection());
menuInfoContainer.appendChild(createCategoryList());
// menuInfoContainer.appendChild(createFoodCardItem());

return menuInfoContainer;
}

