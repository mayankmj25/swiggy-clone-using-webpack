import { createMainHeader } from "./header/index.js";
import { createBreadCrumb } from "./breadCrumbList/index.js";
import { createRestaurentInfo } from "./restaurent/index.js";
import { createMenuInfo } from "./menuInfo/index.js";
import { createFooter } from "./footer/index.js";
import { Controller } from "./controller/Controller.js";

const initApp = () => {
  const controllerInstance = new Controller();
  document.body.appendChild(createMainHeader());
  document.body.appendChild(createBreadCrumb());
  document.body.appendChild(createRestaurentInfo());
  document.body.appendChild(createMenuInfo(controllerInstance));
  document.body.appendChild(createFooter());
};

initApp();
