import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCookie = async () => {
      // csak kliens oldalon fog lefutni +
      // a legfrissebb next verzioban mar polyfillelve is van a fetch
      // szoval csak igy naturba is hivhato :D
      const response = await fetch("/valami-endpoint");

      if (response.ok) {
        const data = await response.json();
        // ha a datat ki kell bontani akkor do it, nem vagom mit ad a backend
        setUser(data);
      }
      setLoading(false);
    };
    checkCookie();
  }, []);

  // if (loading === true) return null;

  // ezt majd atdumaljuk, nem jo megoldas h fullra semmit sem lat az user amig nem fut le az auth check..
  // ami jo megoldas lenne hogy adott helyeken mindig lokalisan oldjuk meg,
  // pl navbarban nem latszik az authhoz kotott gombok stb
  // pelda : https://zeit.co frissitgesd es jobb felul latni fogod mirol beszelek :D

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
