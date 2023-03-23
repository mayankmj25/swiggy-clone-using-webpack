export function createFooter(payload) {

const footerContainer = document.createElement("div");
footerContainer.className = "footer";

const swiggyContainer = document.createElement("div");
swiggyContainer.setAttribute("id", "swiggy");
const swiggyImage = document.createElement("img");
swiggyImage.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
);
swiggyContainer.appendChild(swiggyImage);

const swiggyHeadingContainer = document.createElement("div");
swiggyHeadingContainer.setAttribute("id", "swiggy-2023");
swiggyHeadingContainer.innerText = "2023 Swiggy";

const socialsContainer = document.createElement("div");
socialsContainer.setAttribute("id", "socials");

const facebookLogo = document.createElement("img");
facebookLogo.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
);
const pinterestLogo = document.createElement("img");
pinterestLogo.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
);
const instagramLogo = document.createElement("img");
instagramLogo.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
);
const twitterLogo = document.createElement("img");
twitterLogo.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
);

socialsContainer.appendChild(facebookLogo);
socialsContainer.appendChild(pinterestLogo);
socialsContainer.appendChild(instagramLogo);
socialsContainer.appendChild(twitterLogo);

footerContainer.appendChild(swiggyContainer);
footerContainer.appendChild(swiggyHeadingContainer);
footerContainer.appendChild(socialsContainer);

return footerContainer;

}
