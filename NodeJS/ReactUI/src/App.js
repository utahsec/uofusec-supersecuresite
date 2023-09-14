import "./App.css";
import NavBar from "./navigation/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import axios from "axios";
import AdminLoginPage from "./pages/AdminLogin/AdminLoginPage";
import UserLoginPage from "./pages/UserLogin/UserLoginPage";

function App() {
  if (process.env.NODE_ENV === "dev") {
    // dev
    axios.defaults.baseURL = `http://localhost:3000/api`;
  } else {
    // prod
    axios.defaults.baseURL = `${window.location.origin}/api`;
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/userlogin" element={<UserLoginPage />} />
          <Route exact path="/adminlogin" element={<AdminLoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
