import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
function NavBar() {
    return (

        <div className="header">
            <div className='headerLeft'>
                <NavLink className="header__icon" to="/"> <img src={logo} width={120} ></img></NavLink >
                <NavLink className='nav_links' to="/movieType/popular" style={{ textDecoration: "none" }}>Popular</NavLink>
                <NavLink className='nav_links' to="/movieType/top_rated" style={{ textDecoration: "none" }}>TopRated</NavLink>
                <NavLink className='nav_links' to="/movieType/upcoming" style={{ textDecoration: "none" }}>UpComing</NavLink>
            </div>
        </div>
    );
}
export default NavBar;