import { categories, foodItems } from "../../data.js";

const foodItemsDiv = document.createElement("div");
foodItemsDiv.className = "food-items";

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

  foodItemsDiv.appendChild(section);
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

  let rightBtn = document.createElement("button");
  rightBtn.textContent = "ADD";

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
  rightContainer.appendChild(rightBtn);
  rightContainer.appendChild(rightPara);

  mainContainer.appendChild(leftContainer);
  mainContainer.appendChild(rightContainer);

  foodItemsDiv.appendChild(mainContainer);
}

categoryKeyArray.map((key) => {
  const foodList = foodItems.filter((e) => {
    return e.cId == key;
  });
  addSection(key, foodList);
  renderItems(foodList);
  return;
});
export default foodItemsDiv;
