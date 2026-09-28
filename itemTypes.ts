// itemTypes.ts
// Defines the ItemType enum and the Item interface used across the game inventory system

// Enum representing the category of a game item
export enum ItemType {
    Weapon = "Weapon",
    Armor = "Armor",
    Potion = "Potion"
}

// Interface defining the shape of a game item
export interface Item {
    name: string;         // display name of the item
    type: ItemType;        // category the item belongs to
    value: number;         // numeric worth, used for comparing and sorting
    rarity: string;        // how common or rare the item is
    description: string;   // short blurb about the item
}