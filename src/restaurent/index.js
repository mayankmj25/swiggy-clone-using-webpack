import { createRestaurantLowerBox } from "./lowerBox.js";
import { createRestaurantUpperBox } from "./upperBox.js";

export function createRestaurentInfo() {
  const restaurentContainer = document.createElement("div");
  restaurentContainer.className = "restaurent";
  restaurentContainer.appendChild(createRestaurantUpperBox());
  restaurentContainer.appendChild(createRestaurantLowerBox());
  return restaurentContainer;
}
