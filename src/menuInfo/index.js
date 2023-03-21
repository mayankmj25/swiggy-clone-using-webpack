import categoryListDiv, { cretaeCategoryList } from "./category/index.js";
// import { foodItemsDiv, updateItem } from "./foodItems/index.js";
import { createFoodCardItem, foodItemsDiv } from "./foodItems/index.js";
import { createMenuCartSection} from "./cart/index.js";

export function createMenuSection() {
    
const menuInfoContainer = document.createElement("div");
menuInfoContainer.className = "menu-info";
document.body.appendChild(menuInfoContainer);

createMenuCartSection(menuInfoContainer);
cretaeCategoryList(menuInfoContainer);
createFoodCardItem(menuInfoContainer);
}

