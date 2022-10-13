import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import DateTime from "./components/pages/DateTime";
import AddTreatment from "./components/pages/AddTreatment";
import AdminPage from "./components/pages/AdminPage";
import UsersList from "./components/Modals/UsersList";
import ResetPassword from "./components/pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="AddTreatment" element={<AddTreatment />} />

      <Route path="MainPage" element={<MainPage />} />

      <Route path="UsersList" element={<UsersList />} />

      <Route path="ResetPassword" element={<ResetPassword />} />

      <Route path="AdminPage" element={<AdminPage />} />

      <Route path="register" element={<Register />} />

      <Route path="forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
