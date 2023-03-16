import "./App.css";
import NavBar from "./navigation/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import Admin from "./pages/tracker/admin";
import axios from "axios";

function App() {

  axios.defaults.baseURL = `${window.location.origin}/api`
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
