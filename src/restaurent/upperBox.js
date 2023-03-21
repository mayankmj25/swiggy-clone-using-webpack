export function restaurantUpperBox(parentElement){
  const restaurantUpperBox = document.createElement("div");
  restaurantUpperBox.className = "upper-box";
  
  // Adding An Image
  
  const restaurentImageContainer = document.createElement("div");
  const restaurentImage = document.createElement("img");
  restaurentImage.setAttribute("width", "254");
  restaurentImage.setAttribute("height", "165");
  restaurentImage.setAttribute(
    "src",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yfyo8aklppbwdplv7ofp"
  );
  restaurentImageContainer.appendChild(restaurentImage);
  restaurantUpperBox.appendChild(restaurentImageContainer);
  
  // adding restaurent Info
  const restaurentInfoContainer = document.createElement("div");
  restaurentInfoContainer.className = "rest-info";
  const restaurentInfoHeader = document.createElement("h1");
  restaurentInfoHeader.innerText = "Meghana Foods";
  const restaurentInfoText = document.createElement("p");
  restaurentInfoText.innerText = "Biryani, Andhra";
  const restaurentInfoPara2 = document.createElement("p");
  restaurentInfoPara2.innerText = "Outer Ring Road, Marathahalli | Change Outlet";
  
  const ratingDiv = document.createElement("div");
  ratingDiv.className = "rating";
  
  const ratingContainerChild1 = document.createElement("div");
  const ratingDivChild1Span = document.createElement("span");
  ratingDivChild1Span.innerText = "4.2";
  const ratingChild1Text = document.createElement("p");
  ratingChild1Text.innerText = "1k+ rating";
  ratingContainerChild1.appendChild(ratingDivChild1Span);
  ratingContainerChild1.appendChild(ratingChild1Text);
  ratingDiv.appendChild(ratingContainerChild1);
  
  const ratingContainerChild2 = document.createElement("div");
  const ratingChild2Span = document.createElement("span");
  ratingChild2Span.innerText = "41 Mins";
  const ratingChild2Text = document.createElement("p");
  ratingChild2Text.innerText = "Delivery Time";
  ratingContainerChild2.appendChild(ratingChild2Span);
  ratingContainerChild2.appendChild(ratingChild2Text);
  ratingDiv.appendChild(ratingContainerChild2);
  
  const ratingContainerChild3 = document.createElement("div");
  const ratingChild3Span = document.createElement("span");
  ratingChild3Span.innerText = "Rs 500";
  const ratingChild3Text = document.createElement("p");
  ratingChild3Text.innerText = "Cost for two";
  ratingContainerChild3.appendChild(ratingChild3Span);
  ratingContainerChild3.appendChild(ratingChild3Text);
  ratingDiv.appendChild(ratingContainerChild3);
  
  // Adding offer div
  const offerContainer = document.createElement("div");
  offerContainer.className = "offer";
  const offerText = document.createElement("div");
  offerText.setAttribute("id", "offer");
  offerText.innerText = "OFFER";
  offerContainer.appendChild(offerText);

  const offerChild1 = document.createElement("div");
  offerChild1.setAttribute("id", "off");
  const offerChild1Span = document.createElement("span");
  offerChild1Span.innerText = "50% off up to Rs 100 | Use code WELCOME50";
  offerChild1.appendChild(offerChild1Span);
  const offerChild2 = document.createElement("div");
  offerChild2.setAttribute("id", "delivery");
  const offerChild2Span = document.createElement("div");
  offerChild2Span.innerText = "Free Delivery";
  offerChild2.appendChild(offerChild2Span);
  offerContainer.appendChild(offerChild1);
  offerContainer.appendChild(offerChild2);
  
  restaurentInfoContainer.appendChild(restaurentInfoHeader);
  restaurentInfoContainer.appendChild(restaurentInfoText);
  restaurentInfoContainer.appendChild(restaurentInfoPara2);
  restaurentInfoContainer.appendChild(ratingDiv);
  
  restaurantUpperBox.appendChild(restaurentInfoContainer);
  restaurantUpperBox.appendChild(offerContainer);
  
  parentElement.appendChild(restaurantUpperBox);
}