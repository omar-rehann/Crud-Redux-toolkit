import "../../styles/all.css"

import "./eror.css";

function Eror() {
  return (
    <div className="error-page">
      <h4>404</h4>
      <h5>Page Not Found</h5>
      <p>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="">Go Back Home</a>
    </div>
  );
}

export default Eror;
