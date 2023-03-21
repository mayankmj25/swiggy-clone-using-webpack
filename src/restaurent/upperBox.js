

// const upperBoxDiv = document.createElement("div");
// upperBoxDiv.className = "upper-box";

// // Adding An Image

// const restaurentImageDiv = document.createElement("div");
// restaurentImageDiv.className = "restImg";
// const restaurentImage = document.createElement("img");
// restaurentImage.setAttribute("width", "254");
// restaurentImage.setAttribute("height", "165");
// restaurentImage.setAttribute(
//   "src",
//   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yfyo8aklppbwdplv7ofp"
// );
// restaurentImageDiv.appendChild(restaurentImage);
// upperBoxDiv.appendChild(restaurentImageDiv);

// // adding restaurent Info
// const restaurentInfoDiv = document.createElement("div");
// restaurentInfoDiv.className = "rest-info";
// const restaurentInfoHeader = document.createElement("h1");
// restaurentInfoHeader.innerText = "Meghana Foods";
// const restaurentInfoPara1 = document.createElement("p");
// restaurentInfoPara1.innerText = "Biryani, Andhra";
// const restaurentInfoPara2 = document.createElement("p");
// restaurentInfoPara2.innerText = "Outer Ring Road, Marathahalli | Change Outlet";

// const ratingDiv = document.createElement("div");
// ratingDiv.className = "rating";

// const ratingDivChild1 = document.createElement("div");
// const ratingDivChild1Span = document.createElement("span");
// ratingDivChild1Span.innerText = "4.2";
// const ratingDivChild1Para = document.createElement("p");
// ratingDivChild1Para.innerText = "1k+ rating";
// ratingDivChild1.appendChild(ratingDivChild1Span);
// ratingDivChild1.appendChild(ratingDivChild1Para);
// ratingDiv.appendChild(ratingDivChild1);

// const ratingDivChild2 = document.createElement("div");
// const ratingDivChild2Span = document.createElement("span");
// ratingDivChild2Span.innerText = "41 Mins";
// const ratingDivChild2Para = document.createElement("p");
// ratingDivChild2Para.innerText = "Delivery Time";
// ratingDivChild2.appendChild(ratingDivChild2Span);
// ratingDivChild2.appendChild(ratingDivChild2Para);
// ratingDiv.appendChild(ratingDivChild2);

// const ratingDivChild3 = document.createElement("div");
// const ratingDivChild3Span = document.createElement("span");
// ratingDivChild3Span.innerText = "Rs 500";
// const ratingDivChild3Para = document.createElement("p");
// ratingDivChild3Para.innerText = "Cost for two";
// ratingDivChild3.appendChild(ratingDivChild3Span);
// ratingDivChild3.appendChild(ratingDivChild3Para);
// ratingDiv.appendChild(ratingDivChild3);

// // Adding offer div
// const offerDiv = document.createElement("div");
// offerDiv.className = "offer";
// const offerDivText = document.createElement("div");
// offerDivText.setAttribute("id", "offer");
// offerDivText.innerText = "OFFER";
// offerDiv.appendChild(offerDivText);
// const offerDivChild = document.createElement("div");
// const offerDivChild1 = document.createElement("div");
// offerDivChild1.setAttribute("id", "off");
// const offerDivChild1Span = document.createElement("span");
// offerDivChild1Span.innerText = "50% off up to Rs 100 | Use code WELCOME50";
// offerDivChild1.appendChild(offerDivChild1Span);
// const offerDivChild2 = document.createElement("div");
// offerDivChild2.setAttribute("id", "delivery");
// const offerDivChild2Span = document.createElement("div");
// offerDivChild2Span.innerText = "Free Delivery";
// offerDivChild2.appendChild(offerDivChild2Span);
// offerDiv.appendChild(offerDivChild1);
// offerDiv.appendChild(offerDivChild2);

// restaurentInfoDiv.appendChild(restaurentInfoHeader);
// restaurentInfoDiv.appendChild(restaurentInfoPara1);
// restaurentInfoDiv.appendChild(restaurentInfoPara2);
// restaurentInfoDiv.appendChild(ratingDiv);

// upperBoxDiv.appendChild(restaurentInfoDiv);
// upperBoxDiv.appendChild(offerDiv);

// export default upperBoxDiv;


export function upperBoxDiv(parentElement){
  const upperBoxDiv = document.createElement("div");
  upperBoxDiv.className = "upper-box";
  
  // Adding An Image
  
  const restaurentImageDiv = document.createElement("div");
  restaurentImageDiv.className = "restImg";
  const restaurentImage = document.createElement("img");
  restaurentImage.setAttribute("width", "254");
  restaurentImage.setAttribute("height", "165");
  restaurentImage.setAttribute(
    "src",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yfyo8aklppbwdplv7ofp"
  );
  restaurentImageDiv.appendChild(restaurentImage);
  upperBoxDiv.appendChild(restaurentImageDiv);
  
  // adding restaurent Info
  const restaurentInfoDiv = document.createElement("div");
  restaurentInfoDiv.className = "rest-info";
  const restaurentInfoHeader = document.createElement("h1");
  restaurentInfoHeader.innerText = "Meghana Foods";
  const restaurentInfoPara1 = document.createElement("p");
  restaurentInfoPara1.innerText = "Biryani, Andhra";
  const restaurentInfoPara2 = document.createElement("p");
  restaurentInfoPara2.innerText = "Outer Ring Road, Marathahalli | Change Outlet";
  
  const ratingDiv = document.createElement("div");
  ratingDiv.className = "rating";
  
  const ratingDivChild1 = document.createElement("div");
  const ratingDivChild1Span = document.createElement("span");
  ratingDivChild1Span.innerText = "4.2";
  const ratingDivChild1Para = document.createElement("p");
  ratingDivChild1Para.innerText = "1k+ rating";
  ratingDivChild1.appendChild(ratingDivChild1Span);
  ratingDivChild1.appendChild(ratingDivChild1Para);
  ratingDiv.appendChild(ratingDivChild1);
  
  const ratingDivChild2 = document.createElement("div");
  const ratingDivChild2Span = document.createElement("span");
  ratingDivChild2Span.innerText = "41 Mins";
  const ratingDivChild2Para = document.createElement("p");
  ratingDivChild2Para.innerText = "Delivery Time";
  ratingDivChild2.appendChild(ratingDivChild2Span);
  ratingDivChild2.appendChild(ratingDivChild2Para);
  ratingDiv.appendChild(ratingDivChild2);
  
  const ratingDivChild3 = document.createElement("div");
  const ratingDivChild3Span = document.createElement("span");
  ratingDivChild3Span.innerText = "Rs 500";
  const ratingDivChild3Para = document.createElement("p");
  ratingDivChild3Para.innerText = "Cost for two";
  ratingDivChild3.appendChild(ratingDivChild3Span);
  ratingDivChild3.appendChild(ratingDivChild3Para);
  ratingDiv.appendChild(ratingDivChild3);
  
  // Adding offer div
  const offerDiv = document.createElement("div");
  offerDiv.className = "offer";
  const offerDivText = document.createElement("div");
  offerDivText.setAttribute("id", "offer");
  offerDivText.innerText = "OFFER";
  offerDiv.appendChild(offerDivText);
  const offerDivChild = document.createElement("div");
  const offerDivChild1 = document.createElement("div");
  offerDivChild1.setAttribute("id", "off");
  const offerDivChild1Span = document.createElement("span");
  offerDivChild1Span.innerText = "50% off up to Rs 100 | Use code WELCOME50";
  offerDivChild1.appendChild(offerDivChild1Span);
  const offerDivChild2 = document.createElement("div");
  offerDivChild2.setAttribute("id", "delivery");
  const offerDivChild2Span = document.createElement("div");
  offerDivChild2Span.innerText = "Free Delivery";
  offerDivChild2.appendChild(offerDivChild2Span);
  offerDiv.appendChild(offerDivChild1);
  offerDiv.appendChild(offerDivChild2);
  
  restaurentInfoDiv.appendChild(restaurentInfoHeader);
  restaurentInfoDiv.appendChild(restaurentInfoPara1);
  restaurentInfoDiv.appendChild(restaurentInfoPara2);
  restaurentInfoDiv.appendChild(ratingDiv);
  
  upperBoxDiv.appendChild(restaurentInfoDiv);
  upperBoxDiv.appendChild(offerDiv);
  
  parentElement.appendChild(upperBoxDiv);
}