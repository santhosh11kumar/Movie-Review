import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../Utils";
import { useCall } from "../../Hooks/useCall";
import { Image_URL } from "../../Utils";
import Shimmer from "../../Components/Shimmer/Shimmer";
import "./MovieDet.css"
function MovieDet() {
    const { id } = useParams();
    const url = API_URL + id + `?` + API_KEY;
    console.log(url)
    const data = useCall(url);
    console.log(data)

    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={Image_URL + data.backdrop_path + `?` + API_KEY}></img>
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={Image_URL + data.poster_path + `?` + API_KEY} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{data.title}</div>
                            <div className="movie__tagline">{data.tagline}</div>
                            <div className="movie__rating">
                                {data.vote_average} <i class="fas fa-star" />
                                <span className="movie__voteCount">{`(${data.vote_count})`}votes</span>
                            </div>
                            <div className="movie__runtime">{data.runtime} mins</div>
                            <div className="movie__releaseDate">Release date {data.release_date}</div>
                            <div className="movie__genres">
                                {
                                    data.length != 0 && data.genres.map((Genre) => (
                                        <span className="movie__genre" key={Genre.id}>{Genre.name}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{data.overview}</div>
                        </div>

                    </div>
                </div>
                <div>
                    <p className="movie__heading">Production Companies</p>
                    <div className="movie__production">
                        {
                            data.length != 0 && data.production_companies.map((companies) => (

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