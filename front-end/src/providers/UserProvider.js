import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userCred) => {
      if (userCred) {
        const { displayName, email } = userCred;
        let token = await userCred.getIdToken()
        setuser({ displayName, email, token });   
      } 
    });
  }, []);


  return (
    <> 
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
};