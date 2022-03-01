import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Experimental } from "../pages/Experimental";

// <Route path="/experimental" element={<Experimental/>} />

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/experimental" element={<Experimental/>} />
            </Routes>
        </Router>
    )
}