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
            damage: 3
        },
        {
            name: "box cutter",
            description: "A small basic knife that's easy to explain as a work tool while still being usable as a weapon.",
            value: 5,
            weight: 1,
            type: "weapon",
            damage: 2
        },
        {
            name: "screwdriver",
            description: "A true dual use tool. It can be stabbed into a tender spot and then used to tighten a screw on your latest invention.",
            value: 5,
            weight: 0,
            type: "weapon",
            damage: 1
        },
        {
            name: "wound-b-gone",
            description: "Despite its name this item does not actually immediately heal wounds. It accelerates healing over time and in the short-term it numbs sensation so you can ignore the wound. Warning over use can cause permanent nerve damage.",
            value: 7,
            weight: 1,
            type: "healing item",
            healing: 20
        }

    ]
}

const itemSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        makeItem: (state, action: PayloadAction<Item>) => {
            const itemData = action.payload
            state.items = [...state.items, itemData]
        }
    }
})

export const {
    makeItem
} = itemSlice.actions

export default itemSlice.reducer