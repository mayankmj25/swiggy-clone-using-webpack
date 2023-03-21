export function createFooter() {

const footerDiv = document.createElement("div");
footerDiv.className = "footer";

const swiggyDiv = document.createElement("div");
swiggyDiv.setAttribute("id", "swiggy");
const swiggyImage = document.createElement("img");
swiggyImage.setAttribute(
  "src",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
);
swiggyDiv.appendChild(swiggyImage);

const swiggyHeadingDiv = document.createElement("div");
swiggyHeadingDiv.setAttribute("id", "swiggy-2023");
swiggyHeadingDiv.innerText = "2023 Swiggy";

const socialsDiv = document.createElement("div");
socialsDiv.setAttribute("id", "socials");

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

socialsDiv.appendChild(facebookLogo);
socialsDiv.appendChild(pinterestLogo);
socialsDiv.appendChild(instagramLogo);
socialsDiv.appendChild(twitterLogo);

footerDiv.appendChild(swiggyDiv);
footerDiv.appendChild(swiggyHeadingDiv);
footerDiv.appendChild(socialsDiv);

document.body.appendChild(footerDiv);

}
