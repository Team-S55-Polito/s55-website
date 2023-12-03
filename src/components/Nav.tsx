import "./nav.scss";
import logo from "../assets/teams55-logo.png";

export default function Nav() {
    return (
        <nav>
            {/* Navbar header */}
            <a href="#home" className="nav--header">
                <img className="nav--logo" src={logo} alt="World Logo" />
                <h4 className="nav--title">Team S55</h4>
            </a>

            {/* Burger icon */}
            <div>
                <input type="checkbox" id="burger-toggle" />
                <label htmlFor="burger-toggle" id="burger" className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                {/* Navbar menu */}
                <div id="navbar--menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
