import { useParams } from "react-router-dom";
import { useCall } from "../../Hooks/useCall";
import { API_URL, API_KEY } from "../../Utils";
import Movies from "../../Components/MovieList/Movies";

function MoviesCat() {
    const { type } = useParams()
    let url = API_URL + type + `?` + API_KEY;

    let { Data, isLoading } = useCall(url);

    return (
        <>
            <h2 className="list__title" style={{ paddingLeft: 40 }}>{type.toUpperCase()}</h2 >
            <Movies data={Data} isLoading={isLoading}></Movies>
        </>
    )
}
export default MoviesCat;