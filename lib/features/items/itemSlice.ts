import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
    name: string;
    description: string;
    value: number;
    weight?: number;
    type: string
}

export interface Weapon extends Item {
    damage: number;

}

export interface HealingItem extends Item {
    healing: number;
}

export interface Booster extends Item {
    staminaChange: number;
}

interface ItemType {
    items: (Item | Weapon | HealingItem | Booster)[]
}
const initialState: ItemType = {
    items: [
        {
            name: "pipe",
            description: "A short length of steel pipe good for use as a club.",
            value: 5,
            weight: 1,
            type: "weapon",
            damage: 2
        },

    ]
}