import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, API_URL, Image_URL } from "../../Utils";
import { Breathing } from 'react-shimmer';
import { toast } from 'react-toastify';
import "./MovieDet.css";

function MovieDet() {
    const { id } = useParams();
    const url = `${API_URL}${id}?${API_KEY}`;
    const [movieData, setMovieData] = useState(null);
    const [formData, setFormData] = useState({ email: '', name: '', comment: '' });
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMovieData();
    }, []);

    useEffect(() => {
        if (movieData) {
            fetchComments();
        }
    }, [movieData]); // Fetch comments when movieData changes

    const fetchMovieData = async () => {
        try {
            const response = await axios.get(url);
            setMovieData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Failed to fetch movie data:', error);
            toast.error('Failed to fetch movie data');
        }
    };

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/v2/${movieData.title}/comments`);
            console.log(response);
            setCommentCount(response.data.commentCount);
            setComments(response.data.comments);

        } catch (error) {
            console.error('Failed to fetch comments:', error);
            toast.error('Failed to fetch comments');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { movieName: movieData.title, ...formData };

        try {
            const response = await axios.post(`http://localhost:5000/v2/comments/`, userData);
            console.log(response.status)
            if (response.status === 200) {
                toast.success('Comment added successfully');
                fetchComments(); // Refresh comments after adding
                setFormData({ email: '', name: '', comment: '' }); // Clear form data
            }
        } catch (error) {
            console.error('Failed to add comment:', error);
            toast.error('Failed to add comment');
        }
    };

    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={`${Image_URL}${movieData?.backdrop_path}?${API_KEY}`} alt="Backdrop" />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        {isLoading ? <Breathing width={300} height={300} className="cards" /> :
                            <div className="movie__posterBox">
                                <img className="movie__poster" src={`${Image_URL}${movieData?.poster_path}?${API_KEY}`} alt="Poster" />
                            </div>
                        }
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{movieData ? movieData.title : ""}</div>
                            <div className="movie__tagline">{movieData ? movieData.tagline : ""}</div>
                            <div className="movie__rating">
                                {movieData ? movieData.vote_average : ""} <i className="fas fa-star" />
                                <span className="movie__voteCount">{movieData ? `(${movieData.vote_count}) votes` : ""}</span>
                            </div>
                            <div className="movie__runtime">{movieData ? movieData.runtime : ""} mins</div>
                            <div className="movie__releaseDate">Release date {movieData ? movieData.release_date : ""}</div>
                            <div className="movie__genres">
                                {movieData && movieData.genres.map(Genre => (
                                    <span className="movie__genre" key={Genre.id}>{Genre.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{movieData ? movieData.overview : ""}</div>
                        </div>
                    </div>
                </div>
                <div className="movie__production">
                    <p className="movie__heading">Production Companies</p>
                    {movieData && movieData.production_companies.map(company => (
                        <div className="productionCompanyImage" key={company.id}>
                            {company.logo_path && (
                                <img className="movie__productionCompany" src={`${Image_URL}${company.logo_path}?${API_KEY}`} alt="Production Company Logo" width={250} />
                            )}
                            <span>{company.name}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Comment:</label>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="movie__comments">
                    <h3>Comments ({commentCount})</h3>
                    {comments.map((comment, index) => (
                        <div className="comment" key={index}>
                            <div className="userdetails">
                                <p>@{comment.name}</p>
                                <p>{formatDate(comment.createdAt)}</p>
                            </div>
                            <p className="commentbyuser">{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);

    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30; // Assuming 30 days per month approximation

    // Calculate different time intervals
    const diffMinutes = Math.floor(diffTime / minute);
    const diffHours = Math.floor(diffTime / hour);
    const diffDays = Math.floor(diffTime / day);
    const diffMonths = Math.floor(diffTime / month);

    // Format based on the interval
    if (diffMonths > 0) {
        return `${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
    } else if (diffDays > 0) {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffMinutes > 0) {
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else {
        return `Just now`;
    }
}
export default MovieDet;
