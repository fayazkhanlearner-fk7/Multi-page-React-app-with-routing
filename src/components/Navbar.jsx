import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkStyle = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <div className="nav-links">
        <NavLink to="/" end className={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>
        <NavLink to="/users" className={linkStyle}>
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
