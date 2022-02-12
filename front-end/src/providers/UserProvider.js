import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebase';

export const UserContext = createContext({ user: null });

export default ({ children }) => {
  const [user, setuser] = useState(null);
  const [token, setToken] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged(async (userCred) => {
      if (userCred) {
        const { displayName, email } = userCred;
        userCred.getIdToken().then(token => setToken(token))
        setuser({ displayName, email, token });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};
