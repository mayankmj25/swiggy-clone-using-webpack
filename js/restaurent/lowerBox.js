const lowerBoxDiv = document.createElement("div");
lowerBoxDiv.className = "lower-box";

const searchBarDiv = document.createElement("div");
searchBarDiv.setAttribute("id", "search-bar");
const searchBarDivInput = document.createElement("input");
searchBarDivInput.setAttribute("type", "text");
searchBarDivInput.setAttribute("placeholder", "Search For Dishes...");
searchBarDiv.appendChild(searchBarDivInput);

const vegOnlyDiv = document.createElement("div");
vegOnlyDiv.setAttribute("id", "veg-only");
const vegOnlyDivLabel = document.createElement("div");
vegOnlyDivLabel.innerText = "Veg-Only";
vegOnlyDiv.appendChild(vegOnlyDivLabel);

const favouriteDiv = document.createElement("div");
favouriteDiv.setAttribute("id", "favourite");
const favouriteDivLabel = document.createElement("label");
favouriteDivLabel.innerText = "Favourite";
favouriteDiv.appendChild(favouriteDivLabel);

lowerBoxDiv.appendChild(searchBarDiv);
lowerBoxDiv.appendChild(vegOnlyDiv);
lowerBoxDiv.appendChild(favouriteDiv);

export default lowerBoxDiv;
