import { Link } from "react-router";
import "../App.css";

export default function NavBar() {
  return (
    <nav>
      <h1>WILD SERIES</h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/programs">Séries</Link>
        </li>
        <li>
          <Link to="/categories">Catégories</Link>
        </li>
      </ul>
    </nav>
  );
}
