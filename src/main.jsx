import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import NotFound from "./components/404.jsx";
import Footer from "./components/Footer.jsx";
import Hooks from "./components/Hooks.jsx";
import UseState from "./components/UseState.jsx";
import UseEffect from "./components/UseEffect.jsx";
import UseTransition from "./components/UseTransition.jsx";
import API from "./components/API.jsx";
import AddUser from "./components/AddUser.jsx";
import AddSkill from "./components/AddSkill.jsx";
import EditUser from "./components/EditUser.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api" element={<API />} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/add-skill" element={<AddSkill/>} />
        <Route path="/user/:id" element={<EditUser/>} />
        <Route path="/hooks" element={<Hooks />}>
          <Route path="useState" element={<UseState/>} />
          <Route path="useEffect" element={<UseEffect/>} />
          <Route path="useTransition" element={<UseTransition/>} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>,
);
