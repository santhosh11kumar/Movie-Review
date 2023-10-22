import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../Utils";
import { useCall } from "../../Hooks/useCall";
import { Image_URL } from "../../Utils";
import { Breathing } from 'react-shimmer'
import "./MovieDet.css"

function MovieDet() {
    const { id } = useParams();
    const url = API_URL + id + `?` + API_KEY;
    const { Data, isLoading } = useCall(url);

    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={Image_URL + Data.backdrop_path + `?` + API_KEY}></img>
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        {isLoading ? < Breathing width={300} height={300} className="cards" /> :
                            <div className="movie__posterBox">
                                <img className="movie__poster" src={Image_URL + Data.poster_path + `?` + API_KEY} />
                            </div>
                        }
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{Data ? Data.title : ""}</div>
                            <div className="movie__tagline">{Data ? Data.tagline : ""}</div>
                            <div className="movie__rating">
                                {Data ? Data.vote_average : ""} <i class="fas fa-star" />
                                <span className="movie__voteCount">{Data ? `(${Data.vote_count}) votes` : ""}</span>
                            </div>
                            <div className="movie__runtime">{Data ? Data.runtime : ""} mins</div>
                            <div className="movie__releaseDate">Release date {Data ? Data.release_date : ""}</div>
                            <div className="movie__genres">
                                {
                                    Data.length != 0 && Data.genres.map((Genre) => (
                                        <span className="movie__genre" key={Genre.id}>{Genre.name}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{Data.overview}</div>
                        </div>

                    </div>
                </div>
                <div>
                    <p className="movie__heading">Production Companies</p>
                    <div className="movie__production">
                        {
                            Data.length != 0 && Data.production_companies.map((companies) => (

                                companies.logo_path ? (
                                    <div className="productionCompanyImage" key={companies.id}><img className="movie__productionComapany" src={Image_URL + companies.logo_path + `?` + API_KEY}></img> <span>{companies.name}</span></div>
                                ) : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDet;