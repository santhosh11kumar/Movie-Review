
import Cards from "../cards/Cards";
import Shimmer from "../Shimmer/Shimmer";
import "./Movies.css"

function Movies(data) {
    let TheatereData = data.TheatereData;
    return (
        <>
            <div className="movie__list">
                <h2 className="list__title">{("On Cinemas").toUpperCase()}</h2>
                <div className="list__cards">{
                    TheatereData.length === 0 ?
                        (
                            <Shimmer></Shimmer>
                        )
                        :
                        (
                            TheatereData.map((CardData) => {
                                return <Cards key={CardData.id} data={CardData}></Cards>
                            })
                        )
                }
                </div>

            </div>
        </>
    )
}
export default Movies;