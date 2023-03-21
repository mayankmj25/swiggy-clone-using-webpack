import {restaurantLowerBox} from "./lowerBox.js"
import { restaurantUpperBox } from "./upperBox.js";

export function restaurentDiv(){
    const restaurentDiv = document.createElement("div");
    restaurentDiv.className = "restaurent";
    restaurantUpperBox(restaurentDiv);
    restaurantLowerBox(restaurentDiv);
    document.body.appendChild(restaurentDiv);
}