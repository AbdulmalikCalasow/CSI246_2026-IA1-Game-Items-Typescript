"use strict";
// items.ts
// Creates and exports game items using the Item interface and ItemType enum
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthPotion = exports.steelArmor = exports.magicSword = void 0;
const itemTypes_1 = require("./itemTypes");
// A weapon item
exports.magicSword = {
    name: "Magic Sword",
    type: itemTypes_1.ItemType.Weapon,
    value: 100,
    rarity: "Rare",
    description: "A sword imbued with arcane energy."
};
// An armor item
exports.steelArmor = {
    name: "Steel Armor",
    type: itemTypes_1.ItemType.Armor,
    value: 150,
    rarity: "Common",
    description: "Sturdy armor forged from steel plates."
};
// A potion item
exports.healthPotion = {
    name: "Health Potion",
    type: itemTypes_1.ItemType.Potion,
    value: 25,
    rarity: "Common",
    description: "Restores a small amount of health when consumed."
};
//# sourceMappingURL=items.js.map