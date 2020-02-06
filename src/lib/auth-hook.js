import fetch from "isomorphic-unfetch";
import { useState } from "react";
import absoluteUrl from "./absolute-url";

function useAuth() {
  const [user, setUser] = useState(null);

  fetch("/api/v1/accounts/me").then(res => {
    if (res.ok) {
      res.json().then(data => setUser(data));
    } else {
      console.log(res);
    }
  });

  return user;
}

export default useAuth;
