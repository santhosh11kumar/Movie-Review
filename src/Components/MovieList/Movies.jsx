
import Cards from "../cards/Cards";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Shimmer from "../Shimmer/Shimmer";
import "./Movies.css"
import { useState } from "react";

function Movies({ data }) {
    const isLoading = useSelector((state) => state.loading);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        console.log(isLoading); // Log the loading state whenever it changes
        setLoad(isLoading);
    }, [isLoading]);
    return (
        <>
            <div className="movie__list">
                <div className="list__cards">
                    {
                        isLoading ? (<Shimmer></Shimmer>) : (data.map((CardData) => {
                            return <Cards key={CardData.id} data={CardData}></Cards>
                        }))
                    }
                </div>
            </div>
        </>
    )
}
export default Movies;