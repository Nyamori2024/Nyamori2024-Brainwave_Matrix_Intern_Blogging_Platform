import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between">
            <Link to="/" className="font-bold">Blogging Platform</Link>
            <div>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;
