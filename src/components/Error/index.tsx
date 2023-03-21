import React from "react";
import Navbar from "../Navbar";
import ErrorImg from "../../images/err.svg";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="custom-container my-28">
        <img src={ErrorImg} alt="Error image" className="w-3/5 mx-auto" />
        <h1 className="text-4xl text-redColor font-bold text-center mt-10">
          An unexpected error occured
        </h1>
        <Link
          to="/"
          className="mt-10 [ py-2.5 px-4 ] 
        [ bg-blueColor text-white text-sm font-semibold ]
        [ border border-blueColor ]
        rounded-lg mx-auto w-max block"
        >
          Go Home
        </Link>
      </main>
    </>
  );
};

export default Error;
