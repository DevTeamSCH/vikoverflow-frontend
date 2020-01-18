import { createContext, useContext, useState, useEffect } from "react";
import {useRouter} from "next/router";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkCookie = async () => {
      const response = await fetch("/api/v1/accounts/me");

      // TODO: Meg kéne csinálni, hogy ez a hibakezelés minden request-nél így legyen
      if (response.status === 401) {
        // TODO: Megjegyezni a jelenlegi url-t és a sikeres bejelentkezés után oda irányítani
        await router.push("/login")
      }
      else if (response.status === 403) {
        await router.push("/forbidden")
      }
      else if (response.status === 404) {
        await router.push("/notfound")
      }
      else if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
      else {
        // TODO: Valamilyen exception / hiba oldal cucc
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
