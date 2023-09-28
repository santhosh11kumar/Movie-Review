import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../Utils";
import { useCall } from "../../Hooks/useCall";

function MovieDet() {
    const { id } = useParams();
    console.log(id)
    const url = API_URL + id + `?` + API_KEY;
    console.log(url)

    const data = useCall(url);
    console.log(data)

    return (
        <></>
    )
}

export default MovieDet;