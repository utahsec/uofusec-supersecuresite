import "./App.css";
import NavBar from "./navigation/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import axios from "axios";
import LoginPage from "./pages/tracker/LoginPage";

function App() {

  axios.defaults.baseURL = `${window.location.origin}/api`
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
