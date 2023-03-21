import { createMainHeader } from "./header/index.js";
import breadCrumb from "./breadCrumbList/index.js";
import restaurentDiv from "./restaurent/index.js";
import menuInfoDiv from "./menuInfo/index.js";
import { createFooter } from "./footer/index.js";

document.body.appendChild(breadCrumb);
document.body.appendChild(restaurentDiv);
document.body.appendChild(menuInfoDiv);
createFooter();
createMainHeader