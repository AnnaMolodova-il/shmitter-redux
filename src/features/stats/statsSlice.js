import {createSlice} from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: (state, action) => {
            const {statsType, sum} = action.payload;

            if (!(statsType in state) || typeof sum !== 'number') {
                return;
            }

            state[statsType] = Math.max(0, state[statsType] + sum);
        }
    }
})

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;
