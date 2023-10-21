
import Cards from "../cards/Cards";
import Shimmer from "../Shimmer/Shimmer";
import "./Movies.css"

function Movies({ data, isLoading }) {
    console.log(isLoading);
    return (
        <>
            {
                isLoading ? <Shimmer></Shimmer> :
                    <div className="movie__list">
                        <div className="list__cards">
                            {
                                (data.map((CardData) => {
                                    return <Cards key={CardData.id} data={CardData}></Cards>
                                }))
                            }
                        </div>
                    </div>

            }
        </>
    )
}
export default Movies;