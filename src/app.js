import { createMainHeader } from "./header/index.js";
import { breadCrumb } from "./breadCrumbList/index.js";
import { restaurentContainer } from "./restaurent/index.js";
import { menuInfo } from "./menuInfo/index.js";
import { createFooter } from "./footer/index.js";
// import footerDiv from "./footer/index.js";

document.body.appendChild(createMainHeader());
document.body.appendChild(breadCrumb());
document.body.appendChild(restaurentContainer());
document.body.appendChild(menuInfo());
document.body.appendChild(createFooter());
