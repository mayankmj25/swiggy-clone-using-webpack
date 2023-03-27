export function createMenuCartSection(controller) {
  const cartContainer = document.createElement("div");
  cartContainer.setAttribute("id", "cart");
  controller.onUpdate(updateCartSection);

  function updateCartSection(item) {
    let id = item.getId();
    let individualCount = item.getCount();

    if (individualCount === 0) {
      document.getElementById(`list-${id}`).remove();
    } else if (!document.getElementById(`list-${id}`)) {
      const container = document.createElement("div");
      container.setAttribute("id", `list-${id}`);
      cartContainer.appendChild(container);

      const foodItemName = document.createElement("div");
      foodItemName.textContent = item.getName();

      const incBtn = document.createElement("button");
      incBtn.textContent = "Add";
      incBtn.setAttribute("id", id);
      incBtn.addEventListener("click", incBtnHandler);

      const quantity = document.createElement("span");
      quantity.setAttribute("id", `quantity-${id}`);
      quantity.textContent = individualCount;

      const decBtn = document.createElement("button");
      decBtn.textContent = "Remove";
      decBtn.setAttribute("id", id);
      decBtn.addEventListener("click", decBtnHandler);

      const foodItemPrice = document.createElement("div");
      foodItemPrice.setAttribute("id", `price-${id}`);
      foodItemPrice.textContent = item.getPrice() * item.getCount();

      container.appendChild(foodItemName);
      container.appendChild(incBtn);
      container.appendChild(quantity);
      container.appendChild(decBtn);
      container.appendChild(foodItemPrice);
    } else {
      document.getElementById(`quantity-${id}`).textContent = individualCount;
      document.getElementById(`price-${id}`).textContent =
        item.getCount() * item.getPrice();
    }
    function incBtnHandler(e) {
      const id = e.target.id;
      controller.addCountToData(id);
    }
    function decBtnHandler(e) {
      const id = e.target.id;
      controller.reduceCountToData(id);
    }
  }

  return cartContainer;
}
