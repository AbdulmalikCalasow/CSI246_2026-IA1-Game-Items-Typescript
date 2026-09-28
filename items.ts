// items.ts
// Creates and exports game items using the Item interface and ItemType enum

import { ItemType, Item } from "./itemTypes";

// A weapon item
export const magicSword: Item = {
    name: "Magic Sword",
    type: ItemType.Weapon,
    value: 100,
    rarity: "Rare",
    description: "A sword imbued with arcane energy."
};

// An armor item
export const steelArmor: Item = {
    name: "Steel Armor",
    type: ItemType.Armor,
    value: 150,
    rarity: "Common",
    description: "Sturdy armor forged from steel plates."
};

// A potion item
export const healthPotion: Item = {
    name: "Health Potion",
    type: ItemType.Potion,
    value: 25,
    rarity: "Common",
    description: "Restores a small amount of health when consumed."
};