import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import Answer from "./pages/Answer/Answer";
import Topics from "./pages/Topics/Topics";
import Container from "./pages/Timeline/Container";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const PrivateRoute = () => {
  return localStorage.getItem("userInfo") ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/explore" element={<PrivateRoute />}>
          <Route exact path="/explore" element={<Explore />} />
        </Route>
        <Route exact path="/answer" element={<PrivateRoute />}>
          <Route exact path="/answer" element={<Answer />} />
        </Route>
        <Route exact path="/topics" element={<PrivateRoute />}>
          <Route exact path="/topics" element={<Topics />} />
        </Route>
        <Route exact path="/container" element={<PrivateRoute />}>
          <Route exact path="/container" element={<Container />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
