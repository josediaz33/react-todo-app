import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ marginBottom: '20px', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '15px' }}>
                Home (To-Do List)
            </Link>
            <Link to="/stats">
                Stats
            </Link>
        </nav>
    );
}