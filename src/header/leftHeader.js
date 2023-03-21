export function createLeftHeader(parentElement) {

const leftHeader = document.createElement("div");
leftHeader.setAttribute("class", "leftNav");

const logoImageDiv = document.createElement("div");
const logoImage = document.createElement("img");
logoImage.setAttribute("id", "logo");
logoImage.setAttribute(
  "src",
  "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"
);
logoImage.setAttribute("alt", "logo");
logoImageDiv.appendChild(logoImage);

const areaDiv = document.createElement("div");
const area = document.createElement("span");
area.textContent = "area";
areaDiv.appendChild(area);
leftHeader.appendChild(logoImageDiv);
leftHeader.appendChild(areaDiv);

parentElement.appendChild(leftHeader);

}
