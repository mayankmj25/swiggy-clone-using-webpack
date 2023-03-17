import { controller, eventEmitter } from "../../../pubsub.js";
import { foodItems, categories } from "../../data.js";
import { mapIdToIndex } from "../../data.js";

export const emptyCartDiv = document.createElement("div");
emptyCartDiv.setAttribute("id", "cart");

eventEmitter.on("update", updateCartSection);

const incBtnHandler = (e) => {
    const id = e.target.id;
    controller.addCountToData(id);
}
const decBtnHandler = (e) => {
    const id = e.target.id;
    controller.reduceCountToData(id);
}

function updateCartSection(data) {
    let [id, individualCount] = data;
    if(individualCount === 0){
        document.getElementById(`list-${id}`).remove();
        console.log("fbno")
    }
    
    else if(!document.getElementById(`list-${id}`)){
        const container=document.createElement("div");
        container.setAttribute("id",`list-${id}`)
        emptyCartDiv.appendChild(container);

        const foodItemName = document.createElement("div");
        foodItemName.textContent=foodItems[mapIdToIndex[id]].name;

        const incBtn = document.createElement("button");
        incBtn.textContent="Add"
        incBtn.setAttribute("id", id);
        incBtn.addEventListener("click",incBtnHandler);

        const quantity= document.createElement("span");
        quantity.setAttribute("id",`quantity-${id}`);
        quantity.textContent=individualCount;

        const decBtn = document.createElement("button");
        decBtn.textContent="Remove"
        decBtn.setAttribute("id", id);
        decBtn.addEventListener("click",decBtnHandler);

        const foodItemPrice = document.createElement("div");
        foodItemPrice.textContent=foodItems[mapIdToIndex[id]].price;


        container.appendChild(foodItemName);
        container.appendChild(incBtn);
        container.appendChild(quantity);
        container.appendChild(decBtn);
        container.appendChild(foodItemPrice);
    }
    else {
        document.getElementById(`quantity-${id}`).textContent=individualCount;
    }
}


