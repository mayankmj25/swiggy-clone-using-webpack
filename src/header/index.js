import { createLeftHeader } from "./leftHeader.js";
import { createRightHeader } from "./rightHeader.js";


export function createMainHeader(payload) {

const mainHeader = document.createElement("div");
mainHeader.setAttribute("class", "header");
document.body.append(createLeftHeader(mainHeader));
document.body.append(createRightHeader(mainHeader));

return mainHeader;
}
