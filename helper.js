export const createElement = (elementType, elementClassName, elementId) => {
  const element = document.createElement(elementType);
  element.setAttribute("class", elementClassName);
  element.setAttribute("id", elementId);
  return element;
};
