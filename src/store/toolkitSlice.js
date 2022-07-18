import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        r_playlist: []
    },
    reducers: {
        changePropsSongInReducer(state, action) {
            let updatedTodos = {...action.payload}
            return { ...state, r_todos: updatedTodos }
        },
    }
})

export default toolkitSlice.reducer

export const {changePropsSongInReducer} = toolkitSlice.actions