import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../auth/authThunk";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password }));
    navigate('/Home')
  };

  return (
      <form onSubmit={handleSignup} className="px-1">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Create an Account 📝</h2>
        <p className="text-muted small">Join us and organize your books</p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="alert alert-danger py-2 small" role="alert">
          {error}
        </div>
      )}

      {/* Email Field */}
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control shadow-sm rounded"
          id="signupEmail"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="signupEmail">Email address</label>
      </div>

      {/* Password Field */}
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control shadow-sm rounded"
          id="signupPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="signupPassword">Password</label>
      </div>

      {/* Submit Button */}
      <button
        className="btn btn-primary w-100 py-2 fw-semibold rounded-pill"
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default Signup;
