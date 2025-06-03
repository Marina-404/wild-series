import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
