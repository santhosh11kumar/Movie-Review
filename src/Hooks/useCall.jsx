import { useState, useEffect } from "react";


export const useCall = (Api) => {
    const [Data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        get_data();
    }, [Api]) // whenever api changes the call for data is made


    async function get_data() {
        try {
            const url = await fetch(Api);
            const json_data = await url.json();
            json_data.results ? setData(json_data.results) : setData(json_data);
            setLoading(false);
        }
        catch (e) {
            alert("Error")
        }
    }
    return { Data, isLoading };
};

