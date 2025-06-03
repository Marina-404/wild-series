import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <h1>WILD SERIES</h1>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/programs">Séries</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Découvrez les <br /> meilleures séries <br />
          du moments
        </p>
        <button type="button">Explorer</button>
        <Outlet />
      </main>
    </>
  );
}

export default App;
