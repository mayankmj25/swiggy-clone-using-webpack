import leftHeader from "./leftHeader.js";
import rightHeader from "./rightHeader.js";
import { createElement } from "../../helper.js";
const mainHeader = createElement("div", "header");
mainHeader.appendChild(leftHeader);
mainHeader.appendChild(rightHeader);
export default mainHeader;
