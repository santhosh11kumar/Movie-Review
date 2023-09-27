import { useState } from "react";
import { useEffect } from "react";

export const useCall = (Api) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        get_data();
    }, [])

    async function get_data() {
        try {
            const url = await fetch(Api);
            const json_data = await url.json();
            setData(json_data.results);
        }
        catch (e) {

        }
    }
    return Data;
};

