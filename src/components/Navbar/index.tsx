import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="custom-container py-4 bg-lightViolet" data-cy="navbar">
      {/* This is a simple navbar  */}
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-darkVoilet text-2xl font-bold" data-cy="logo">
          Logo
        </Link>

        {/* Search input */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            name="search"
            data-cy="search-input"
            className="[ max-w-full sm:max-w-xs ]
          [ pr-4 pl-11 py-3 ]
          [ text-greyColor rounded-lg ]"
          />
          <span className="absolute top-3 left-4">
            <FiSearch className="text-greyColor w-5 h-5" />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
