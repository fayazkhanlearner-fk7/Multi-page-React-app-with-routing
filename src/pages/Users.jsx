import { Link } from 'react-router-dom';
import users from '../data/users';

function Users() {
  return (
    <div className="container page">
      <h1>Our Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
