import React, { useState , useContext } from "react";
import glideLogo from "../assets/glide_logo.png"; // Ensure the path is correct
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [userData , setUserData] = useState({});

  const { userData, setUserData } = useContext(UserDataContext);

  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      if(response.status === 200){
        const data = response.data;
        setUserData(data.user);
        navigate('/home');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen"> 
      <div>
        <img className="w-20 mb-5" src={glideLogo} alt="Glide Logo" />
        <form onSubmit={(e) => submitHandler(e)} >
          <h3 className="text-lg font-medium mb-2 ">User's Email</h3>
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
        <p className="text-center">New here?{" "}<Link to = '/signup' className="text-blue-600">Create New Account</Link> </p>
      </div>
      <div>
        <Link to = '/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-3xl px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
