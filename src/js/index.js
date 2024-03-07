import Item from "./Item";
const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

itemInput.addEventListener("keyup", (evt) => {
  if (evt.key == "Enter") {
    evt.target.value = "";
  }
});
