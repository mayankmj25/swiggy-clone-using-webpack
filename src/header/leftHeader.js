export function createLeftHeader(parentElement) {

const leftHeader = document.createElement("div");
leftHeader.setAttribute("class", "leftNav");

const logoImageContainer = document.createElement("div");
const logoImage = document.createElement("img");
logoImage.setAttribute("id", "logo");
logoImage.setAttribute(
  "src",
  "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"
);
logoImage.setAttribute("alt", "logo");
logoImageContainer.appendChild(logoImage);

const areaContainer = document.createElement("div");
const area = document.createElement("span");
area.textContent = "area";
areaContainer.appendChild(area);
leftHeader.appendChild(logoImageContainer);
leftHeader.appendChild(areaContainer);

parentElement.appendChild(leftHeader);

}
