import { addToShoppingList, setPriority } from "./model";
import { renderShoppingList } from "./view";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

itemInput.addEventListener("keyup", (evt) => {
  if (evt.key == "Enter") {
    // Add to shopping List
    addToShoppingList(evt.target.value);
    evt.target.value = "";

    // Update View
    renderShoppingList();
  }
});

shoppingListDiv.addEventListener("click", function (evt) {
  if (evt.target.parentElement.classList.contains("priority-control")) {
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");

    // Set Priority
    setPriority(itemId, priority);
    // Update View
    renderShoppingList();
  }
});
