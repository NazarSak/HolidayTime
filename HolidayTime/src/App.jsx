// import React from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import General from "./Components/General/General";
import Contacts from "./Components/contacts/Contacts";
import AboutUs from "./Components/aboutUs/aboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="general" element={<General />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="aboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
