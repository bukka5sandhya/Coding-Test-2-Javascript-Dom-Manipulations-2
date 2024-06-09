let myContainerEle = document.getElementById("myContainer");
let headboxEle = document.createElement("input");
headboxEle.type='checkbox';
headboxEle.id='myCheckBox';
headboxEle.checked;
myContainerEle.appendChild(headboxEle);

let labelEle = document.createElement("label");
labelEle.textContent ="Color the heading Element";
labelEle.setAttribute("for","myCheckBox");
myContainerEle.appendChild(labelEle);

let headingEle = document.createElement("h1");
headingEle.textContent ="heading Element";
myContainerEle.appendChild(headingEle);

headboxEle.onclick = function(){
    headingEle.classList.toggle("heading");
    labelEle.textContent = "Unclose the heading element";

}