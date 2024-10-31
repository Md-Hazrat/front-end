// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signup"); // Redirect to signup after logout
  };

  return (
    <div>
      <ul
        className="nav-ul"
        style={{
          padding: 5,
          margin: 0,
          backgroundColor: "skyblue",
        }}
      >
        <li>
          <Link to="/">Products</Link>
        </li>
        {auth && (
          <>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/update">Update Product</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        <li>
          {auth ? (
            <span onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </span>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
