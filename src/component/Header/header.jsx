import { Link } from "react-router-dom";
import "../../styles/all.css"
import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="links">
        <Link to="/addposts"><i class="fa-solid fa-pen-to-square" style={{"margin":"10px"}}></i>Add Posts</Link>
        <Link to="/allposts"><i class="fa-solid fa-book" style={{"margin":"10px"}}></i>All Posts</Link>
      </div>
    </header>
  );
}

export default Header;
