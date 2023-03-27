// tasks -- fetch category list
// filter out items of that category and also render name of category and items of that category
// loop on items of specific category and print all that data
// import controller and create one instance of it(not it this commit)
// add plus minus button and count -- add event listeners to it.

export const createFoodItems = (controller) => {
  controller.onUpdate(updateCount);
  const getCategoryByCategoryId = controller.getCategoryByCategoryId();
  const FOOD_ITEMS = controller.FOOD_ITEMS;
  const foodItemsContainer = document.createElement("div");
  foodItemsContainer.className = "food-items";
  const categoryKeyArray = Object.keys(getCategoryByCategoryId);
  categoryKeyArray.map((key) => {
    const foodList = FOOD_ITEMS.filter((e) => {
      return e.getCategoryId() == key;
    });
    foodItemsContainer.appendChild(addSection(key, foodList, controller));
    renderItems(foodList, foodItemsContainer, controller);
  });
  return foodItemsContainer;
};

const addSection = function (key, foodList, controller) {
  const getCategoryByCategoryId = controller.getCategoryByCategoryId();

  let sectionHeader = document.createElement("h1");
  sectionHeader.textContent = getCategoryByCategoryId[key];

  let sectionPara = document.createElement("p");
  sectionPara.textContent = `${foodList.length} Items`;

  let section = document.createElement("div");
  section.setAttribute("id", "section");
  section.setAttribute("id", `${getCategoryByCategoryId[key]}`);
  section.appendChild(sectionHeader);
  section.appendChild(sectionPara);

  return section;
};

const renderItems = (foodList, foodItemsContainer, controller) => {
  foodList.forEach((value, i) => {
    addFoodItem(foodList[i], foodItemsContainer, controller);
  });
};

const addFoodItem = (foodItem, foodItemsContainer, controller) => {
  let leftPara1 = document.createElement("p");
  leftPara1.textContent = foodItem.getIsVeg() ? "Veg" : "Non-Veg";

  let leftHeader3 = document.createElement("h3");
  leftHeader3.setAttribute("id", "title");
  leftHeader3.textContent = foodItem.getName();

  let leftHeader6 = document.createElement("h6");
  leftHeader6.setAttribute("id", "price");
  leftHeader6.textContent = foodItem.getPrice();

  let leftPara2 = document.createElement("p");
  leftPara2.setAttribute("id", "desc");
  leftPara2.textContent = foodItem.getInfo();

  let rightImg = document.createElement("img");
  rightImg.setAttribute("src", `${foodItem.getImageUrl()}`);

  let buttonDiv = document.createElement("div");
  let plusButton = document.createElement("button");
  plusButton.setAttribute("id", `${foodItem.getId()}`);
  plusButton.textContent = "add";
  let counter = document.createElement("span");
  counter.setAttribute("class", "counter");
  counter.setAttribute("id", `counter${foodItem.getId()}`);
  counter.textContent = 0;
  let minuButton = document.createElement("button");
  minuButton.setAttribute("id", `${foodItem.getId()}`);
  minuButton.textContent = "remove";
  buttonDiv.appendChild(plusButton);
  buttonDiv.appendChild(counter);
  buttonDiv.appendChild(minuButton);

  function addToCart(e) {
    controller.addCountToData(e.target.id);
  }

  function removeFromCart(e) {
    controller.reduceCountToData(e.target.id);
  }

  plusButton.addEventListener("click", addToCart);
  minuButton.addEventListener("click", removeFromCart);

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
  rightContainer.appendChild(buttonDiv);
  rightContainer.appendChild(rightPara);

  mainContainer.appendChild(leftContainer);
  mainContainer.appendChild(rightContainer);

  foodItemsContainer.appendChild(mainContainer);
};

function updateCount(item) {
  let id = item.getId();
  let count = item.getCount();
  document.getElementById(`counter${id}`).textContent = count;
}
