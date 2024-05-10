import React,{useEffect} from "react";
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
import Result from "../pages/Result";
import Videos from "../components/Videos";
import Beta from "../pages/Beta";
import About from "../pages/About";
import Faculties from "../pages/Faculties";
import Tutorials from "../pages/Tutorials";

function App() {
  useEffect(() => {
    document.title = "SweQuizer"; // Set your desired title here
  }, []);
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/faculties" element={<Faculties />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/beta" element={<Beta />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/videos/:topicName" element={<Videos />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
