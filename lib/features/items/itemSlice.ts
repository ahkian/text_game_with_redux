export interface Item {
    name: string;
    description: string;
    value: number;
    weight?: number;
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