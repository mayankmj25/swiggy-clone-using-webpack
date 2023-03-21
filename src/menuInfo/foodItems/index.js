import { categories, foodItems } from "../../data.js";
import cart from "../../../cart.js";
import { controller, eventEmitter } from "../../pubsub.js";

export function createFoodCardItem(parentElement) {
const foodItemsContainer = document.createElement("div");
foodItemsContainer.className = "food-items";

const categoryKeyArray = Object.keys(categories);

const addSection = function (key, foodList) {
  let sectionHeader = document.createElement("h1");
  sectionHeader.textContent = categories[key];

  let sectionPara = document.createElement("p");
  sectionPara.textContent = `${foodList.length} Items`;

  let section = document.createElement("div");
  section.setAttribute("id", "section");
  section.setAttribute("id", `${categories[key]}`);
  section.appendChild(sectionHeader);
  section.appendChild(sectionPara);

  foodItemsContainer.appendChild(section);
};

function renderItems(arr) {
  // Render items of specific category
  for (let i = 0; i < arr.length; i++) {
    addFoodItem(arr[i]);
  }
}

function addFoodItem(obj) {
  let leftPara1 = document.createElement("p");
  leftPara1.textContent = obj.veg ? "Veg" : "Non-Veg";

  let leftHeader3 = document.createElement("h3");
  leftHeader3.setAttribute("id", "title");
  leftHeader3.textContent = obj.name;

  let leftHeader6 = document.createElement("h6");
  leftHeader6.setAttribute("id", "price");
  leftHeader6.textContent = obj.price;

  let leftPara2 = document.createElement("p");
  leftPara2.setAttribute("id", "desc");
  leftPara2.textContent = obj.description;

  let rightImg = document.createElement("img");
  rightImg.setAttribute("src", `${obj.image}`);
  /******************************************************************* */

  // let rightBtn = document.createElement("button");
  // rightBtn.setAttribute("id", `${obj.id}`);
  // rightBtn.textContent = "ADD";
  // rightBtn.addEventListener("click", (obj) => addToCart(obj));

  let buttonContainer = document.createElement("div");
  let plusButton = document.createElement("button");
  plusButton.setAttribute("id", `${obj.id}`);
  plusButton.textContent = "add";
  let counter = document.createElement("span");
  counter.setAttribute("class", "counter");
  counter.setAttribute("id", `counter${obj.id}`);
  counter.textContent = 0;
  let minuButton = document.createElement("button");
  minuButton.setAttribute("id", `${obj.id}`);
  minuButton.textContent = "remove";
  buttonContainer.appendChild(plusButton);
  buttonContainer.appendChild(counter);
  buttonContainer.appendChild(minuButton);

  plusButton.addEventListener("click", addToCart);
  minuButton.addEventListener("click", removeFromCart);

  function addToCart(e) {
    // console.log(e.target.id)
    controller.addCountToData(e.target.id);
  }
  eventEmitter.on("update", updateCount);

  function updateCount(data) {
    let [id, count] = data;
    document.getElementById(`counter${id}`).textContent = count;
    // counter.textContent= e[1];
  }

  function removeFromCart(e) {
    controller.reduceCountToData(e.target.id);
  }

  /******************************************************* */
  let rightPara = document.createElement("p");
  rightPara.textContent = "Customisable";

  let leftContainer = document.createElement("div");
  leftContainer.setAttribute("id", "left-food");

  let rightContainer = document.createElement("div");
  rightContainer.setAttribute("id", "right-food");

  let mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "food-item");

  leftContainer.appendChild(leftPara1);
  leftContainer.appendChild(leftHeader3);
  leftContainer.appendChild(leftHeader6);
  leftContainer.appendChild(leftPara2);

  rightContainer.appendChild(rightImg);
  // rightContainer.appendChild(rightBtn);
  rightContainer.appendChild(buttonContainer);
  rightContainer.appendChild(rightPara);

  mainContainer.appendChild(leftContainer);
  mainContainer.appendChild(rightContainer);

  foodItemsContainer.appendChild(mainContainer);
 }
parentElement.appendChild(foodItemsContainer);

}

categoryKeyArray.map((key) => {
  const foodList = foodItems.filter((e) => {
    return e.cId == key;
  });
  addSection(key, foodList);
  renderItems(foodList);
  return;
});
