import { useCall } from "../../Hooks/useCall";
import Movies from "../../Components/MovieList/Movies";
import { Now_playing_URL } from "../../Utils";
import Slides from "../../Components/SlideView/Slides";
import "./Home.css"

function Home() {
    const data = useCall(Now_playing_URL); // theatere data

    return (
        <div className="Home_page">

            {/* corusel */}
            <Slides></Slides>

            <h2 className="list__title" style={{ paddingLeft: 40 }}>{("On Cinemas").toUpperCase()}</h2 >
            {/* Movies */}
            <Movies Movies data={data} ></Movies>
        </div>
    );
}


export default Home;