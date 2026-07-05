import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container page">
      <h1>About This App</h1>
      <p>
        MyApp is a beginner-friendly demo project that shows how to build a
        multi-page application using React and React Router. It includes
        navigation, dynamic routes, and a clean, responsive design.
      </p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}

export default About;
