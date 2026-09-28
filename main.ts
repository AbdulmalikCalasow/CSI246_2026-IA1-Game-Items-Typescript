// Imports items, prints details, compares items, and sorts an inventory by value

import { Item } from "./itemTypes";
import { magicSword, steelArmor, healthPotion } from "./items";

// Prints the details of a single item
function printItemDetails(item: Item): void {
    console.log(`${item.name} (${item.type}) - Value: ${item.value}`);
}

// Compares two items by value and logs which is more/less valuable
function compareItems(itemA: Item, itemB: Item): void {
    if (itemA.value === itemB.value) {
        console.log(`${itemA.name} and ${itemB.name} have the same value`);
    } else if (itemA.value < itemB.value) {
        console.log(`${itemA.name} is less valuable than ${itemB.name}`);
    } else {
        console.log(`${itemA.name} is more valuable than ${itemB.name}`);
    }
}

// Sorts an inventory array by value, ascending
// Copies the array first so sorting doesn't mutate the original inventory
function sortByValueAscending(inventory: Item[]): Item[] {
    return [...inventory].sort((a, b) => a.value - b.value);
}

// Sorts an inventory array by value, descending
// Copies the array first so sorting doesn't mutate the original inventory
function sortByValueDescending(inventory: Item[]): Item[] {
    return [...inventory].sort((a, b) => b.value - a.value);
}

// Run some tests

console.log("Item Details:");
printItemDetails(magicSword);
printItemDetails(steelArmor);
printItemDetails(healthPotion);

console.log("\nComparing Items:");
compareItems(magicSword, steelArmor);

// Build an inventory array
const inventory: Item[] = [];
inventory.push(magicSword, steelArmor, healthPotion);

console.log("\nInventory sorted ascending by value:");
const ascending = sortByValueAscending(inventory);
ascending.forEach(printItemDetails);

console.log("\nInventory sorted descending by value:");
const descending = sortByValueDescending(inventory);
descending.forEach(printItemDetails);