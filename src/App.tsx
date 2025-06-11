import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound.tsx";
import SplashScreen from './components/SplashScreen';
import MenuCustomization from './pages/menu/MenuCustomization';
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SplashScreen />} />
        <Route path="/home" element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/menucustomize/" element={
            <MainLayout>
              <MenuCustomization />
            </MainLayout>
          }
        />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
