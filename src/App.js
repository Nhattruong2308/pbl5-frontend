
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Login from "./pages/website/Login";
import Welcome from "./pages/website/Welcome";
import Signup from "./pages/website/Signup";
import Navbar from "./components/website/Navbar";
import FilmHome from "./pages/website/FilmHome";
import FilmAll from "./pages/website/FilmAll";
import TheLoai from "./pages/website/TheLoai";
import Showtimes from "./components/website/Showtimes";
import Dashboard from "./pages/admin/Dashboard";
import Revenue from "./pages/admin/Revenue";
import Film from "./pages/admin/Film";
import Category from "./pages/admin/Category";
import Users from "./pages/admin/Users";
import './App.css';

function App() {
  return (
    <Box fontFamily='Poppins'>
   
      <Box>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admin" element={<Dashboard/>}>
            <Route path="revenue" element={<Revenue />} />
            <Route path="film" element={<Film/>} />
            <Route path="category" element={<Category/>} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/home" element={<Navbar/>}>
            <Route path="" element={<FilmHome />} />
            <Route path="phim" element={<FilmAll />} />
            <Route path="TheLoai" element={<TheLoai />} />
            <Route path="Ve" element={<Showtimes />} />
            <Route path="TuyenDung" element={<TheLoai />} />
            <Route path="tintuc" element={<TheLoai />} />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
