import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import { BsPersonCircle } from "react-icons/bs";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-vh-100  d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="container">
        <div className="row shadow-lg rounded-4 overflow-hidden bg-white w-75 mx-auto">
          
          {/* Left Side Image / Promo */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-primary text-white p-5">
            <div className="text-center">
              <h2 className="fw-bold mb-3">
                {isLogin ? "Welcome Back!" : "Join Our Book Club"}
              </h2>
              <p>
                {isLogin
                  ? "Log in to access your personal dashboard, explore books, and manage your collection."
                  : "Sign up now and start organizing your favorite reads with ease."}
              </p>
              <BsPersonCircle size={100}/>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 p-5">

            {isLogin ? <Login /> : <Signup />}

            <hr className="my-4" />

            <p className="text-center small text-muted">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                className="btn btn-link p-0 ms-2"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
