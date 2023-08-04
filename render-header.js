let header = document.createElement("header");

let headerHeading = document.createElement("h1");
headerHeading.textContent = "RECIPE WORLD";

let navigationElement = document.createElement("nav");

let ulElement = document.createElement("ul");

let homeLi = document.createElement("li");
let homeLink = document.createElement("a");
homeLink.href = "home.html";
homeLink.textContent = "HOME";
homeLi.appendChild(homeLink);

let recipesLi = document.createElement("li");
let recipesLink = document.createElement("a");
recipesLink.href = "recipie-list.html";
recipesLink.textContent = "RECIPES";
recipesLi.appendChild(recipesLink);

let suggestLi = document.createElement("li");
let suggestLink = document.createElement("a");
suggestLink.href = "recipie-suggestion.html";
suggestLink.textContent = "SUGGEST";
suggestLi.appendChild(suggestLink);

ulElement.appendChild(homeLi);
ulElement.appendChild(recipesLi);
ulElement.appendChild(suggestLi);

navigationElement.appendChild(ulElement);

header.appendChild(headerHeading);
header.appendChild(navigationElement);

document.body.prepend(header);
