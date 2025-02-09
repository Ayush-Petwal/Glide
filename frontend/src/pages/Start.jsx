import React from "react";
import { Link } from "react-router-dom";
import glideLogo from '../assets/glide_logo.png'; // Ensure the path is correct
import bgImg from '../assets/bg.png'; // Ensure the path is correct

const Start = () => {

  return (
    <div>
      <div className=" bg-cover bg-center h-screen pt-8 w-full flex justify-between flex-col" style={{ backgroundImage: `url(${bgImg})` }}>
        <img
          className="w-20 ml-8"
          src= { glideLogo }
          alt="Glide Logo"
        />
        <div className=" bg-white pb-7 py-4 px-4 ">
          <h2 className=" text-3xl font-bold ">Get started with Glide!</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-3xl mt-5 "
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;

// bg img url : https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5310f182519763.652f3606b64b0.jpg
// logo url : https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png