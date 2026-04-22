import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Character, CharacterClassName, CLASS_DATA} from '../../types/gameTypes';

export interface PlayerState extends Character {
    dollars: number;
}

const defaultClass: CharacterClassName = 'Brawler';
const initialStats = CLASS_DATA[defaultClass];

const initialState: PlayerState = {
    name: 'TBD',
    className: defaultClass,
    ...initialStats,
    hp: initialStats.maxHp,
    stamina: initialStats.maxStamina,
    mana: initialStats.maxMana,
    dollars: 100
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        //set initial player character
        setPlayerClass: (state, action: PayloadAction<{name: string, className: CharacterClassName}>) => {
            const {name, className} = action.payload;
            const classStats = CLASS_DATA[className];

            state.name = name;
            state.className = className;

            state.maxHp = classStats.maxHp;
            state.hp = classStats.maxHp;
            state.maxStamina = classStats.maxStamina;
            state.stamina = classStats.maxStamina;
            state.maxMana = classStats.maxMana;
            state.mana = classStats.maxMana;
            state.basicDamage = classStats.basicDamage;
        },
        //subtract damage taken from HP
        takeDamage: (state, action: PayloadAction<number>) => {
            state.hp = Math.max(0, state.hp - action.payload);
        },
        //heal damage from healing action, healing item or doctor
        healDamage: (state, action: PayloadAction<number>) => {
            state.hp = Math.min(state.maxHp, state.hp + action.payload)
        },
        //spend gain money
        updateFunds: (state, action: PayloadAction<number>) => {
            state.dollars += action.payload;
        },
        //use special abilities 
        spendResources: (state, action: PayloadAction<{ stamina?: number; mana?: number }>) => {
            if (action.payload.stamina){
                state.stamina = Math.max(0, state.stamina - action.payload.stamina);
            }
            if(action.payload.mana){
                state.mana = Math.max(0, state.mana - action.payload.mana);
            }
        },
        //full rest resets all character values to max except for money
        restPlayer: (state) => {
            state.hp = state.maxHp;
            state.stamina = state.maxStamina;
            state.mana = state.maxMana;
        }
    }
})

export const {
    setPlayerClass,
    takeDamage,
    updateFunds,
    spendResources,
    restPlayer
} = playerSlice.actions;

export default playerSlice.reducer;