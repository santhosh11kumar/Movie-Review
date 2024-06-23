import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Popular_URL } from "../../Utils";
import { useCall } from "../../Hooks/useCall";
import "./Slides.css";
import { Image_URL } from "../../Utils";
import { NavLink } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

function Slides() {
    let { Data, isLoading } = useCall(Popular_URL);
    return (
        <>  <div className="poster">
            <Carousel
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showThumbs={false}
            >
                {Data.map(data => (
                    <NavLink key={data.id} to={`movieDetail/${data.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div >
                            <div className="posterImage">
                                <img src={Image_URL + data.backdrop_path}></img>
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{data.title}</div>
                                <div className="posterImage__runtime">
                                    <span>{data.release_date}</span>
                                    <span className="posterImage__rating">{data.vote_average}  <FaStar className="star-icon" /></span>
                                </div>
                                <div className="posterImage__description">{data.overview} </div>
                            </div>

                        </div>
                    </NavLink>

                ))}

            </Carousel>
        </div>
        </>
    )
}
export default Slides;

