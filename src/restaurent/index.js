import { restaurantLowerBox } from "./lowerBox.js";
import { restaurantUpperBox } from "./upperBox.js";

export function restaurentContainer() {
  const restaurentContainer = document.createElement("div");
  restaurentContainer.className = "restaurent";
  restaurentContainer.appendChild(restaurantUpperBox());
  restaurentContainer.appendChild(restaurantLowerBox());
  return restaurentContainer;
}
