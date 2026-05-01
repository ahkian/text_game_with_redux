export type CharacterClassName = 'Brawler' | 'Engineer' | 'Thief';

export interface ClassStats {
    maxHp: number;
    maxStamina: number;
    maxMana: number;
    basicDamage: number;
    description: string;
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
        basicDamage: 20,
        description: "Built for a world that hits hard. You possess a rare physical resilience—the kind of durability that makes you an immovable object in a crowded street or a chaotic raid. Whether you use that power to settle debts with your fists or simply to stand your ground as a protector who refuses to swing back, you are the anchor in every storm."
    },
    Engineer: {
        maxHp: 100,
        maxStamina: 50,
        maxMana: 100,
        basicDamage: 10,
        description: "A systems architect who understands that the weakest link in any security protocol is the human using it. You treat reality like a circuit board, rewriting both technical and social systems to suit your needs. While you aren't built for a stand-up fight, you excel at exploiting environmental and psychological vulnerabilities to create innovative, 'impossible' solutions."
    },
    Thief: {
        maxHp: 75,
        maxStamina: 100,
        maxMana: 0,
        basicDamage: 5,
        description: "This is your classic rogue character. They are good at sneaking and social engineering. In combat they excel at a highly damaging sneak attack and getting away before they can be counter attacked."
    }
}
