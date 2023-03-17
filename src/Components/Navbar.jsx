import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://lh3.googleusercontent.com/a/AGNmyxYB34_PDuSpvRwMDVWvdlpEeGClF2tabnUXxdblGA=s288"
          alt=""
        />
        <span>Sanjay</span>
        <button>log out</button>
      </div>
    </div>
  );
};

export default Navbar;
