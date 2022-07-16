import {createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    isPlay: false
}

export const startMusic = createAction('PLAY')

export default createReducer(initialState,{
    [startMusic]: function (state) {
        console.log('REDUX SHIT')
    }
})