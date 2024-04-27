import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/quiz/:id"  element={<Quiz/>}/>
            </Route>
        
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
