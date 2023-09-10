import "./App.css";
import NavBar from "./navigation/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import axios from "axios";
import LoginPage from "./pages/login/LoginPage";

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "prod") {
    // prod
    axios.defaults.baseURL = `${window.location.origin}/api`;
  } else {
    // dev
    axios.defaults.baseURL = `http://localhost:3000/api`;
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
