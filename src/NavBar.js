import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home |</Link>
            <Link to="/About">About |</Link>
            <Link to="/Blog">Blog |</Link>
            <Link to="/users">User |</Link>

        </nav>
    )
}
export default NavBar;