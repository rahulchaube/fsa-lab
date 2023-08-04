'use strict'
let recipieInstructions = [
    "4 eggs (at room temperature)",
    "3/4 cup sugar",
    "8 tablespoon butter (unsalted and melted )",
    "1 teaspoon vanilla extract",
    "3/4 cup all-purpose flour",
    "2 cups milk (lukewarm *)",
    "powdered sugar (for dusting)"
];

let instructionsList = document.getElementById("instructions-list");

for (let step of recipieInstructions){
    let listItem = document.createElement('li');
    listItem.textContent = step;
    instructionsList.appendChild(listItem);
}