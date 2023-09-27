import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
function NavBar() {
    return (

        <div className="header">
            <div className='headerLeft'>
                <NavLink className="header__icon" to="/"> <img src={logo} width={180} ></img></NavLink >
                <NavLink className='nav_links' to="/movies/popular" style={{ textDecoration: "none" }}>Popular</NavLink>
                <NavLink className='nav_links' to="/movies/top_rated" style={{ textDecoration: "none" }}>TopRated</NavLink>
                <NavLink className='nav_links' to="/movies/upcoming" style={{ textDecoration: "none" }}>UpComing</NavLink>
            </div>
        </div>
    );
}
export default NavBar;