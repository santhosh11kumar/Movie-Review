import { createSlice } from "@reduxjs/toolkit";

export const Loading = createSlice({

    name: "loading",
    initialState: false,  // selected things
    reducers: {
        startLoading: (state) => {
            return true;
        },
        stopLoading: (state) => {
            return false;
        }
    }
})

export const { startLoading, stopLoading } = Loading.actions;
export default Loading.reducer;