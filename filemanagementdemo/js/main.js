
console.log("Hello World!");

var div = document.createElement("DIV");

div.setAttribute("class", "container");
div.innerHTML = "<h1>Hello World!</h1>";

document.getElementsByTagName("body")[0].appendChild(div);