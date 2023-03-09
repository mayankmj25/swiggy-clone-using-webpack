const emptyCartDiv = document.createElement("div");
emptyCartDiv.className = "cart";
const cart = document.createElement("div");
cart.setAttribute("id", "cart");

const emptyCartHeading = document.createElement("h1");
emptyCartHeading.setAttribute("id", "empty-cart-title");
emptyCartHeading.innerText = "Cart Empty";
cart.appendChild(emptyCartHeading);

const emptyCartImage = document.createElement("img");
emptyCartImage.setAttribute("id", "empty-cart-img");
emptyCartImage.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
);
cart.appendChild(emptyCartImage);

const emptyCartPara = document.createElement("p");
emptyCartPara.setAttribute("id", "empty-cart-p");
emptyCartPara.innerText =
  "Good food is always cooking! Go ahead, order some yummy items from the menu.";
cart.appendChild(emptyCartPara);

emptyCartDiv.appendChild(cart);

export default emptyCartDiv;
