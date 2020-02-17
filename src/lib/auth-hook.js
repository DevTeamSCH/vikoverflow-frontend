import fetch from "isomorphic-unfetch";
import { useState, createContext, useContext, useEffect } from "react";

const userContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useAuthProvider();
  return <userContext.Provider value={auth}>{children}</userContext.Provider>;
}

export const useAuth = () => {
  return useContext(userContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      fetch("/api/v1/accounts/me")
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }
    fetchUser();
  }, []);

  return user;
}
