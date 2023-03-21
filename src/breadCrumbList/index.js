export function breadCrumb(){
    const breadCrumb = document.createElement("div");
    breadCrumb.setAttribute("class", "pageLocation");
    const spanElement = document.createElement("span");
    spanElement.innerText = "Home/Bangalore/Marathahalli/Meghna Foods";
    breadCrumb.appendChild(spanElement);
    document.body.appendChild(breadCrumb);
}