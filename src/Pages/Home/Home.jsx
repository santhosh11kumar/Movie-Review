import { useCall } from "../../Hooks/useCall";
import Movies from "../../Components/MovieList/Movies";
import { Now_playing } from "../../Utils";

function Home() {
    const now_playing = Now_playing;
    const TheatereData = useCall(now_playing);
    console.log(TheatereData)

    return (
        <>
            {/* corusel */}
            <div></div>

            {/* Movies */}
            <Movies TheatereData={TheatereData}></Movies>
        </>
    );
}


export default Home;