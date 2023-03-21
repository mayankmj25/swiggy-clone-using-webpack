import { createLeftHeader } from "./leftHeader.js";
import { createRightHeader } from "./rightHeader.js";


export function createMainHeader() {

const mainHeader = document.createElement("div");
mainHeader.setAttribute("class", "header");
createLeftHeader(mainHeader);
createRightHeader(mainHeader);

document.body.appendChild(mainHeader);
}
