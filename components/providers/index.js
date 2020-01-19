import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCookie = async () => {
      const response = await fetch("/api/v1/accounts/me");

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }

      setLoading(false);
    };
    checkCookie();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
