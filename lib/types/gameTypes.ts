export type CharacterClassName = 'Brawler' | 'Engineer' | 'Thief';

export interface ClassStats {
    maxHp: number;
    maxStamina: number;
    maxMana: number;
    basicDamage: number;
}

export interface Character {
    name: string;
    className: CharacterClassName;
    hp: number;
    maxHp: number;
    stamina: number;
    maxStamina: number;
    mana: number;
    maxMana: number;
    basicDamage: number;
}

export const CLASS_DATA: Record<CharacterClassName, ClassStats> = {
    Brawler: {
        maxHp: 200,
        maxStamina: 150,
        maxMana: 0,
        basicDamage: 20
    },
    Engineer: {
        maxHp: 100,
        maxStamina: 50,
        maxMana: 100,
        basicDamage: 10
    },
    Thief: {
        maxHp: 75,
        maxStamina: 100,
        maxMana: 0,
        basicDamage: 5
    }
}
