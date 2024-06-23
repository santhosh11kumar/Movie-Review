
import Cards from "../cards/Cards";
import "./Movies.css"

function Movies({ data, isLoading }) {
    return (
        <>
            <div className="movie__list">
                <div className="list__cards">
                    {
                        (data.map((CardData) => {
                            return <Cards key={CardData.id} data={CardData} isLoading={isLoading}></Cards>
                        }))
                    }
                </div>
            </div>

        </>
    )
}
export default Movies;