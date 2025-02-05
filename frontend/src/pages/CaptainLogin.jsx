import React, {useState} from "react";
import glideLogo from "../assets/glide_logo.png";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-20 mb-5" src={glideLogo} alt="Glide Logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2 ">Captain's Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="example@email.com"
          />

          <h3 className="text-lg font-medium mb-2 ">Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            placeholder="Password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded-3xl px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join as a CAPTAIN?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-3xl px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
