import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterClassName, CLASS_DATA } from "@/lib/types/gameTypes";

export interface NPC extends Character {
    id: string;
    approvalOfPC: number;
    isMet: boolean;
    
}

interface NPCstate {
    entities: Record<string, NPC>;
}

const initialState: NPCstate = {
    entities: {
        "mugger": {
            "id": "1",
            "approvalOfPC": 0,
            "isMet": false,
            "name": "Mugger",
            "className": 'Brawler',
            "hp": 50,
            "maxHp": 50,
            "stamina": 50,
            "maxStamina": 50,
            "mana": 0,
            "maxMana": 0,
            "basicDamage": 5,
            "isAlive": true,
        }
    }
}

const npcSlice = createSlice({
    name: "npcs",
    initialState,
    reducers: {
        //create NPC
        makeNPC: (state, action: PayloadAction<NPC>) => {
            const npcData = action.payload;
            const id = npcData.id;
            const npcList = state.entities;

            if (!npcList[id]){
                npcList[id] = npcData;
            }
        },
        // decrement stat
        // amount passed in must be signed if decrement
        changeStat: (state, action: PayloadAction<{id:string, stat:string, amount:number}>) => {
           const { id, stat, amount } = action.payload;
           const selectedNpc = state.entities[id];
           
           if(selectedNpc && stat in selectedNpc){
            const key = stat as keyof NPC
            const currVal = selectedNpc[key]

            if (typeof currVal === 'number'){
                (selectedNpc[key] as number) += amount

                if (stat === 'hp' && selectedNpc.hp <= 0){
                    selectedNpc.isAlive = false;
                    selectedNpc.hp = 0
                }
            }
           }
        },
        // mark NPC as dead
        markAsDead: (state, action: PayloadAction<{id:string, stat:string}>) => {
            state.entities[action.payload.id].isAlive = false
        },
        //meet NPC
        markAsMet: (state, action: PayloadAction<{id:string, stat:string}>) => {
            state.entities[action.payload.id].isMet = true
        }
    }
})

export const {
    makeNPC,
    changeStat,
    markAsDead,
    markAsMet
} = npcSlice.actions;

export default npcSlice.reducer;