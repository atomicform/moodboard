import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>vibe.af</h1>
            <div className="links">
                <Link to="/">your moods</Link>
                <Link to="/vibe">create new vibe</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;