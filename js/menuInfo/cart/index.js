// import { container } from "webpack";
import cartData from "../../../cart.js";
// import { updateItem } from "../foodItems/index.js";
import cart from "../../../cart.js";
// import { controller, eventEmitter } from "../../../pubsub.js";
import { foodItems, categories } from "../../data.js";

// const foodInfoName = {};
// foodItems.map((item) => {
//   foodInfoName[item.id] = item.name;
// });

// const foodInfoPrice = {};
// foodItems.map((item) => {
//   foodInfoPrice[item.id] = item.price;
// });

export const emptyCartDiv = document.createElement("div");
// emptyCartDiv.className = "cart";
// const emptyCart = document.createElement("div");
// emptyCart.setAttribute("id", "cart");

// const emptyCartHeading = document.createElement("h1");
// emptyCartHeading.setAttribute("id", "empty-cart-title");
// emptyCartHeading.innerText = "Cart Empty";
// emptyCart.appendChild(emptyCartHeading);

// const emptyCartImage = document.createElement("img");
// emptyCartImage.setAttribute("id", "empty-cart-img");
// emptyCartImage.setAttribute(
//   "src",
//   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
// );
// emptyCart.appendChild(emptyCartImage);

// const emptyCartPara = document.createElement("p");
// emptyCartPara.setAttribute("id", "empty-cart-p");
// emptyCartPara.innerText =
//   "Good food is always cooking! Go ahead, order some yummy items from the menu.";
// emptyCart.appendChild(emptyCartPara);

// emptyCartDiv.appendChild(emptyCart);

// const mainCartDiv = document.createElement("div");
// const emptyText = document.createElement("div");
// emptyText.textContent = "empty";
// mainCartDiv.appendChild(emptyCartDiv);
// mainCartDiv.textContent = "Empty";
// mainCartDiv.style.position = "sticky";
// emptyCartDiv.appendChild(mainCartDiv);

// const updateTotal = () => {
//   const priceList = Array.from(
//     document.getElementsByClassName("listContainer")
//   );
//   let total = 0;
//   priceList.map((item) => {
//     const price = item.getElementsByClassName("price")[0].textContent;
//     const quantity = item.getElementsByClassName("count")[0].textContent;
//     total += price * quantity;
//   });
//   document.getElementById("totalPrice").textContent = `Total: ${total}`;
// };

// const updateCounter = (id, count) => {
//   const counterElement = document.getElementById(`counter2${id}`);
//   if (counterElement.textContent == 0 && count == -1) return;
//   counterElement.textContent = +counterElement.textContent + count;
// };

// const addItem = (e) => {
//   const id = e.target.id;
//   updateCounter(id, 1);
//   if (!cart[id]) cart[id] = 1;
//   else cart[id]++;
//   console.log(cart);
//   updateItem();
//   updateTotal();
// };

// const removeItem = (e) => {
//   const id = e.target.id;
//   updateCounter(id, -1);
//   if (!cart[id]) return;
//   cart[id] -= 1;
//   if (cart[id] == 0) {
//     const element = document.getElementById(`list${id}`);
//     element.remove();
//   }
//   console.log(cart);
//   updateItem();
//   updateTotal();
// };

// export const update = () => {
//   if (mainCartDiv.childCount != 0)
//     mainCartDiv.removeChild(mainCartDiv.firstChild);
//   // console.log(mainCartDiv.firstChild);
//   const mainCart = document.createElement("div");
//   const keys = Object.keys(cartData);
//   let total = 0;
//   keys.map((key) => {
//     if (cartData[key] !== 0) {
//       const listContainer = document.createElement("div");
//       listContainer.className = "listContainer";
//       listContainer.setAttribute("id", `list${key}`);
//       const name = document.createElement("span");
//       const price = document.createElement("span");
//       price.setAttribute("class", "price");
//       const addButton = document.createElement("button");
//       addButton.setAttribute("id", key);
//       addButton.addEventListener("click", addItem);
//       addButton.textContent = "add";
//       const removeButton = document.createElement("button");
//       removeButton.textContent = "remove";
//       removeButton.addEventListener("click", removeItem);
//       removeButton.setAttribute("id", key);
//       const count = document.createElement("span");
//       count.className = "count";
//       count.setAttribute("id", `counter2${key}`);
//       name.textContent = `${foodInfoName[key]}`;
//       price.textContent = `${foodInfoPrice[key]}`;
//       count.textContent = `${cartData[key]}`;
//       listContainer.appendChild(name);
//       listContainer.appendChild(addButton);
//       listContainer.appendChild(count);
//       listContainer.appendChild(removeButton);
//       listContainer.appendChild(price);
//       mainCart.appendChild(listContainer);
//       total += foodInfoPrice[key] * cartData[key];
//     }
//     return;
//   });
//   const totalPrice = document.createElement("p");
//   totalPrice.setAttribute("id", "totalPrice");
//   totalPrice.textContent = `Total: ${total}`;
//   mainCart.appendChild(totalPrice);
//   mainCartDiv.appendChild(mainCart);
// };
