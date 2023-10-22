import { NavLink } from "react-router-dom";
import { Image_URL } from "../../Utils";
import "./cards.css";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Breathing } from 'react-shimmer'


function Cards({ data, isLoading }) {
    let image = Image_URL + data.poster_path;
    const words = data.overview.split(' ');
    let description = words.slice(0, 30).join(' ')



    return (
        <>

            {
                isLoading ? < Breathing width={200} height={300} className="cards" /> : <NavLink to={`/movieDetail/${data.id}`}>
                    <div className="cards" style={{ textDecoration: "none", color: "white" }}>
                        <img className="cards__img" src={image} ></img>

                        <div className="cards__overlay">

                            <p className="card__title">{data.title}</p>

                            <div>
                                <span className="card__runtime">{data.release_date}</span>
                                <span className="card__rating" >{data.vote_average}  <FaStar className="star-icon" /></span>
                            </div>

                            <div className="card__description">{description} <span className="Read_more">  ...Read More </span></div>

                        </div>

                    </div>
                </NavLink >
            }

        </>
    );
}
export default Cards; 