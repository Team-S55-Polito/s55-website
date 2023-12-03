import "./const.scss";
import logo from "../assets/teams55-logo.png";

export default function Construction() {
    return (
        <div className="construction">
            <img
                src={logo}
                className="logo s55"
                alt="Team s55 logo"
            />
            <h1>Team S55 beta website</h1>
            <p className="read-the-docs">
                This page is under construction. Please check back later.
            </p>
        </div>
    );
}


