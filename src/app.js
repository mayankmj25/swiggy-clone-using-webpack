import mainHeader from "./header/index.js";
import breadCrumb from "./breadCrumbList/index.js";
import restaurentDiv from "./restaurent/index.js";
import menuInfoDiv from "./menuInfo/index.js";
import footerDiv from "./footer/index.js";

document.body.appendChild(mainHeader);
// document.body.appendChild(breadCrumb);
breadCrumb();
// document.body.appendChild(restaurentDiv);
restaurentDiv();
document.body.appendChild(menuInfoDiv);
document.body.appendChild(footerDiv);
