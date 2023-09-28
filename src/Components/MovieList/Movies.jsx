
import Cards from "../cards/Cards";
import Shimmer from "../Shimmer/Shimmer";
import "./Movies.css"

function Movies({ data }) {
    return (
        <>
            <div className="movie__list">
                <div className="list__cards">{
                    data.length === 0 ? (<Shimmer></Shimmer>)
                        :
                        (
                            data.map((CardData) => {
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