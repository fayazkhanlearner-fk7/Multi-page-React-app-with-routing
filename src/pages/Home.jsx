import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container page">
      <h1>Welcome to MyApp 👋</h1>
      <p>
        This is a simple multi-page React application built with React Router.
        Explore the app using the buttons below or the navbar above.
      </p>
      <div className="button-group">
        <Link to="/about" className="btn">
          Go to About
        </Link>
        <Link to="/users" className="btn btn-outline">
          View Users
        </Link>
      </div>
    </div>
  );
}

export default Home;
