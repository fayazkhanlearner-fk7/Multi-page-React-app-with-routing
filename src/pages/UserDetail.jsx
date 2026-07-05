import { useParams, useNavigate } from 'react-router-dom';
import users from '../data/users';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="container page">
        <h1>User Not Found</h1>
        <button className="btn" onClick={() => navigate('/users')}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container page">
      <h1>User Details</h1>
      <div className="card detail-card">
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <button className="btn" onClick={() => navigate('/users')}>
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;
