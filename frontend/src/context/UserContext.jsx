import React , { useState } from "react";

export const UserDataContext = React.createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <UserDataContext.Provider value={[userData, setUserData]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
