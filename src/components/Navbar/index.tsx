import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="custom-container py-4 bg-lightGrey" data-cy="navbar">
      {/* This is a simple navbar  */}
      <nav className="flex justify-between items-center flex-wrap gap-y-4">
        <Link to="/" className="text-redColor text-2xl font-bold" data-cy="logo">
          Logo
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
