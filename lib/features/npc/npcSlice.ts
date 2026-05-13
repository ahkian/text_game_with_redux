import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterClassName, CLASS_DATA } from "@/lib/types/gameTypes";

export interface NPC extends Character {
    id: string;
    approvalOfPC: number;
    isMet: boolean;
    isAlive: boolean;
}

interface NPCstate {
    entities: Record<string, NPC>;
    ids: string[]
}

const initialState: NPCstate = {
    entities: {

    },
    ids: []
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
                state.ids.push(id)
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
        }
        // mark NPC as dead
        //change approval
        //meet NPC
    }
})
