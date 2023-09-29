import { configureStore } from "@reduxjs/toolkit";
import { Loading } from "./Slices/Loading";

const store = configureStore({
    reducer: {
        loading: Loading.reducer,
    },
});

export default store;