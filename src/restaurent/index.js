import upperBoxDiv from "./upperBox.js";
import lowerBoxDiv from "./lowerBox.js";

const restaurentDiv = document.createElement("div");
restaurentDiv.className = "restaurent";
restaurentDiv.appendChild(upperBoxDiv);
restaurentDiv.appendChild(lowerBoxDiv);

export default restaurentDiv;
