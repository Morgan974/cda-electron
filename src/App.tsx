import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import "./style/style.css";
import LoginPage from "./components/page/LoginPage";
import AuthApi from "./config/AuthApi";
import AdminPage from "./components/page/AdminPage";

AuthApi.setup();

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthApi.isAuthenticated);

    return (
      <Routes>
          <Route path="/admin" element={
              <AdminPage
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
              />
          } />
          <Route path="/" element={
              <LoginPage
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
              />
          } />
      </Routes>

  );
}

export default App;
