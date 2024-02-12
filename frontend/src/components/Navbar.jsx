import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"
import "../App.css";

function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <Link to="/">
                        <img src={homeIcon} alt={homeIcon}/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
