import { createListenerMiddleware } from "@reduxjs/toolkit";
import { takeDamage, markAsDead } from "./features/player/playerSlice";
import { setGameStatus } from "./features/game/gameSlice";
import type { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: takeDamage,
    effect: (action, listenerApi) => {
        const state = listenerApi.getState() as RootState;
        if (state.player.hp <= 0 && state.player.isAlive){
            listenerApi.dispatch(markAsDead());
            listenerApi.dispatch(setGameStatus('game over'))
        }
    }
})