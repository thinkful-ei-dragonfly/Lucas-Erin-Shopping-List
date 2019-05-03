'use strict';

const STORE = [
  { id: cuid(), name: 'apples', checked: false},
  { id: cuid(), name: 'oranges', checked: false},
  { id: cuid(), name: 'milk', checked: true},
  { id: cuid(), name: 'bread', checked: false},
];

function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function generateShoppingItemsString(shoppingList) {
  console.log("generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  return items.join('');
}
function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemString = generateShoppingItemsString(STORE);

  // isert this html string to the DOM
  $('.js-shopping-list').html(shoppingListItemString);
}


function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
