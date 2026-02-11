// main.js

let targetElement = document.querySelector("h2");
console.log(targetElement.outerHTML);

targetElement.addEventListener("mouseover", function() {
    console.log(this);
    this.innerText = "TIME";
    this.style = "cursor: wait";
});

console.log(this.innerText);

targetElement.addEventListener("mouseout", function() {
    this.innerText = "IKEA";
    this.style = "cursor: pointer";
});