import { createSlice } from "@reduxjs/toolkit";
// import { AppState } from "./store";
// import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    snackbar: {
        message: "",
        timeout: 2000,
        type: "success",
        open: false
    }
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setSnackbar(state, action) {
            let payload = {
                ...action.payload,
                open: true
            }
            state.snackbar= payload;
        },
        close(state) {
            state.snackbar = initialState.snackbar;
        }
    },
    extraReducers: {
        HYDRATE: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})  

export const { setSnackbar, close } = homeSlice.actions;

export const selectHomeState = (state) => state.home.snackbar;

export default homeSlice.reducer;