import React from "react";
import Form from "./components/Form";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </>
  );
};

export default App;
