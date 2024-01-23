// import React from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import General from "./Components/General/General";
import Contacts from "./Components/contacts/Contacts";
import AboutUs from "./Components/aboutUs/aboutUs";
import Reserve from "./Components/reserve/Reserve";
import Account from "./Components/account/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="general" element={<General />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="personal" element={<Account />} />

      </Route>
    </Routes>
  );
}

export default App;
