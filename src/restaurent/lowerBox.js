export function createRestaurantLowerBox() {
  const restaurantLowerBox = document.createElement("div");
  restaurantLowerBox.className = "lower-box";

  const searchBar = document.createElement("div");
  searchBar.setAttribute("id", "search-bar");
  const searchBarInput = document.createElement("input");
  searchBarInput.setAttribute("type", "text");
  searchBarInput.setAttribute("placeholder", "Search For Dishes...");
  searchBar.appendChild(searchBarInput);

  const vegOnly = document.createElement("div");
  vegOnly.setAttribute("id", "veg-only");
  const vegOnlyLabel = document.createElement("div");
  vegOnlyLabel.innerText = "Veg-Only";
  vegOnly.appendChild(vegOnlyLabel);

  const favourite = document.createElement("div");
  favourite.setAttribute("id", "favourite");
  const favouriteLabel = document.createElement("label");
  favouriteLabel.innerText = "Favourite";
  favourite.appendChild(favouriteLabel);

  restaurantLowerBox.appendChild(searchBar);
  restaurantLowerBox.appendChild(vegOnly);
  restaurantLowerBox.appendChild(favourite);
  return restaurantLowerBox;
}
