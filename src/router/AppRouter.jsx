import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import NewBlog from "../pages/NewBlog";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route  element={<PrivateRouter />} >
          <Route path="newblog" element={<NewBlog/>} />
          <Route path="detail" element={<Detail/>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
