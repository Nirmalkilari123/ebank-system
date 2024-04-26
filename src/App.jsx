import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import CreditCard from "./components/CreditCard";
import ContactUs from "./components/ContactUs";
import Loans from "./components/Loans";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="creditcard" element={<CreditCard />} />
      <Route path="loans" element={<Loans />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
