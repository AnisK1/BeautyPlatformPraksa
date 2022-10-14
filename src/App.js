import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

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
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="AddTreatment" element={<AddTreatment />} />

      <Route path="Reservation" element={<Reservation />} />

      <Route path="MainPage2" element={<MainPage2 />} />

      <Route path="Location" element={<Location />} />

      <Route path="Treatments" element={<Treatments />} />

      <Route path="Therapists" element={<Therapists />} />

      <Route path="UsersList" element={<UsersList />} />

      <Route path="ResetPassword" element={<ResetPassword />} />

      <Route path="AdminPage" element={<AdminPage />} />

      <Route path="register" element={<Register />} />

      <Route path="forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
