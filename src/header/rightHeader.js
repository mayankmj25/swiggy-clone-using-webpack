export function createRightHeader() {
  const rightHeader = document.createElement("div");
  rightHeader.setAttribute("class", "rightNav");
  const navButtons = document.createElement("ul");
  navButtons.setAttribute("class", "navBtns");

  return rightHeader;
}
