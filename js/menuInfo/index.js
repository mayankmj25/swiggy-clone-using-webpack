const menuInfoDiv = document.createElement("div");
import categoryListDiv from "./category/index.js";
import foodItemsDiv from "./foodItems/index.js";
import emptyCartDiv from "./cart/index.js";
menuInfoDiv.className = "menu-info";
menuInfoDiv.appendChild(categoryListDiv);
menuInfoDiv.appendChild(foodItemsDiv);
menuInfoDiv.appendChild(emptyCartDiv);
export default menuInfoDiv;
