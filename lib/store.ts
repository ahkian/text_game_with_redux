import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/player/playerSlice";
import npcReducer from "./features/npc/npcSlice";
import gameReducer from "./features/game/gameSlice";
import { listenerMiddleware } from "./listenerMiddleware";

export const makeStore = () => {
    return configureStore({
        reducer: {
            player: playerReducer,
            npc: npcReducer,
            game: gameReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
        
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];