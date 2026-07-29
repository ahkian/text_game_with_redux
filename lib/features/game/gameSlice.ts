import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GameStatus = 'playing' | 'game over' | 'victory';

interface GameState {
    status: GameStatus;
}

const initialState: GameState = {
    status: 'playing'
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameStatus: (state, action: PayloadAction<GameStatus>) => {
            state.status = action.payload;
        }
    }
})

export const { setGameStatus } = gameSlice.actions;
export default gameSlice.reducer;