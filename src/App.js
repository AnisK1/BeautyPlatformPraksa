import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import "./App.css";
import Reservation from "./components/pages/Reservation";
import DateTime from "./components/pages/DateTime";
import AddTreatment from "./components/pages/AddTreatment";
import AdminPage from "./components/pages/AdminPage";
import UsersList from "./components/Modals/UsersList";
import ResetPassword from "./components/pages/ResetPassword";
import MainPage2 from "./components/pages/MainPage2";
import Location from "./components/pages/Location";
import Therapists from "./components/pages/Therapists";
import Treatments from "./components/pages/Treatments";

function App() {
  const token = useSelector((state) => state.tokenValue);
  console.log("grob te", token);

  if (token === "") {
    return (
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="register" element={<Register />} />

        <Route path="ResetPassword" element={<ResetPassword />} />

        <Route path="forgotPassword" element={<ForgotPassword />} />

        <Route path="MainPage2" element={<Login />} />
      </Routes>
    );
  } else if (token !== "") {
    return (
      <Routes>
        <Route path="Reservation" element={<Reservation />} />

        <Route path="AddTreatment" element={<AddTreatment />} />

        <Route path="MainPage2" element={<MainPage2 />} />

        <Route path="Location" element={<Location />} />

        <Route path="Treatments" element={<Treatments />} />

        <Route path="Therapists" element={<Therapists />} />

        <Route path="UsersList" element={<UsersList />} />
      </Routes>
    );
  }
}

export default App;
