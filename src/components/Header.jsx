import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../auth/authThunk";
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/");
    toast.success("Logout Successfull")
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary-subtle fixed-top w-100">
          <div className="container">
            <a className="navbar-brand text-primary fw-semibold" href="#">
              Chapter & Verse
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <button className="btn btn-outline-primary" onClick={handleLogout}>
                  Logout <IoLogOutOutline size={20} />
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
