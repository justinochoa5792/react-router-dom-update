import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
// Components
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link style={{ padding: "0 10px" }} to="/about">
          About
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/profile/:username" element={<Profile />}></Route>
        <Route exact path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
