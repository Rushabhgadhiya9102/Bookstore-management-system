import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth/authThunk";
import { PiHandWavingFill } from "react-icons/pi";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    toast.success("Logging Successfull")
  };

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }
  }, [user, navigate]);

  return (
    <form onSubmit={handleLogin} className="px-1">
      
      {/* ---------- Heading ------------ */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Login <PiHandWavingFill color="orange" /></h2>
        <p className="text-muted small">Log in to access your library</p>
      </div>

      {/* --------------- Error Alert ------------- */}
      {error && (
        <div className="alert alert-danger py-2 small" role="alert">
          {error}
        </div>
      )}

      {/* -------------- Email Field --------------- */}
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control shadow-sm rounded"
          id="emailInput"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="emailInput">Email address</label>
      </div>

      {/* --------------- Password Field --------------- */}
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control shadow-sm rounded"
          id="passwordInput"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="passwordInput">Password</label>
      </div>

      {/* ------------- Submit Button -------------- */}
      <button
        className="btn btn-primary w-100 py-2 fw-semibold rounded-pill"
        type="submit"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
