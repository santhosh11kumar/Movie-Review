import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/Slices/Loading"
import Shimmer from "../Components/Shimmer/Shimmer";


export const useCall = (Api) => {
    const [Data, setData] = useState([]);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading);

    useEffect(() => {
        get_data();
    }, [Api]) // whenever api changes the call for data is made


    async function get_data() {
        try {
            dispatch(startLoading());
            const url = await fetch(Api);
            const json_data = await url.json();
            json_data.results ? setData(json_data.results) : setData(json_data);

            dispatch(stopLoading());
        }
        catch (e) {
            alert("Error")
        }
    }
    return Data;
};

