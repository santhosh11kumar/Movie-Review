import { useCall } from "../../Hooks/useCall";
import Movies from "../../Components/MovieList/Movies";
import { Now_playing_URL } from "../../Utils";
import Slides from "../../Components/SlideView/Slides";
import "./Home.css"
import { useState, useEffect } from "react";

function Home() {

    const [data, setData] = useState([]);

    const { Data, isLoading } = useCall(Now_playing_URL);

    useEffect(() => {
        setData(Data);
    }, [Data]);

    return (
        <div className="Home_page">

            {/* corusel */}
            <Slides></Slides>

            <h2 className="list__title" style={{ paddingLeft: 40 }}>{("On Cinemas").toUpperCase()}</h2 >
            {/* Movies */}
            <Movies Movies data={data} isLoading={isLoading} ></Movies>
        </div>
    );
}


export default Home;