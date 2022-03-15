import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import "./style/style.css";
import TestPage from "./components/page/TestPage";
import TestRouterPage from "./components/page/TestRouterPage";

function App() {
  return (
      <Routes>
          <Route path="/test-2" element={<TestRouterPage />} />
          <Route path="/" element={<TestPage />} />
      </Routes>
  );
}

export default App;
