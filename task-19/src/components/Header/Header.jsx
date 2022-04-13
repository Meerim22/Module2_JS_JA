import { NavLink } from "react-router-dom";
import "./header.scss";

const activeLink = ({ isActive }) =>
    isActive ? "navlink active-link" : "navlink";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a className="nav__logo" href="#"><span class="nav__logo-icon">MJ</span> <span class="nav__logo-h">Mika J</span></a>
                <div className="nav__menu">
                    <button class="nav__logo-btn">FrontEnd <span class="nav__logo-h">разработчик</span></button>
                    <ul className="nav__menu-ul">
                        <li className="nav__menu-item active" type="button">
                            <NavLink to="/" className={activeLink}>Home</NavLink>
                        </li>
                        <li className="nav__menu-item" type="button">
                            <NavLink to="/about" className={(isActive) => isActive ? "nav-link active-link" : "nav-link"} >About</NavLink>
                        </li>
                        <li class="nav__menu-item" type="button">
                            <NavLink to="/projects" className={(isActive) => isActive ? "nav-link active-link" : "nav-link"} >Projects</NavLink>
                        </li>
                        <li className="nav__menu-item" type="button">
                        <NavLink to="/contacts" className={(isActive) => isActive ? "nav-link active-link" : "nav-link"} >Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
