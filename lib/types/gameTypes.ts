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
    isAlive: boolean;
}

export const CLASS_DATA: Record<CharacterClassName, ClassStats> = {
    Brawler: {
        maxHp: 200,
        maxStamina: 150,
        maxMana: 0,
        basicDamage: 20,
        description: "Whether through cyberware, combat stims, pure hard work and preparation or some combination of those you have become incredibly strong and durable. When trouble starts you rush in and start swinging letting anything short of a shot from an anti-material rifle roll off of you. At least, that's the goal. For now you're just starting out. You can hit harder than most people and take a hit and keep going but you're not bulletproof. Not yet anyway."
    },
    Engineer: {
        maxHp: 100,
        maxStamina: 50,
        maxMana: 100,
        basicDamage: 10,
        description: "You're no superhuman. You don't punch particularly hard. You can't shrug off a bullet. But what you do have is intelligence, and creativity. And in your hands that's deadlier than any muscle bound idiot or asshole with a rifle. You fight and survive by knowing what your enemy will do before they do and constructing a plan or device that makes their victory turn to ash in their mouths. But right now you're still an amateur; recently graduated from what passes for an engineering school in your slum of a neighborhood. In reality it's more like a union hall for engineers and tinkerers but it's where you learned your craft."
    },
    Thief: {
        maxHp: 75,
        maxStamina: 100,
        maxMana: 0,
        basicDamage: 5,
        description: "Others will run directly at danger or kill their enemies from the other side of the city. Not you though. You like silence. Striking from dark corners and killing your foes before they even knew they were in danger. Even better is sowing chaos and getting your enemies to fight each other. At least that's what your mentor tells you. You haven't had the chance to try it out for yourself except in training exercises. But now you'll have your chance."
    }
}
