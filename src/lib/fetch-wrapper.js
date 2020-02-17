import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import absoluteUrl from "./absolute-url";
import redirectTo from "./redirect-to";

const fetchWrapper = (url, req, res) => {
  if (req) {
    url = absoluteUrl(url, req);
  }

  return fetch(url, {
    credentials: "include",
    headers: { cookie: req?.headers?.cookie }
  }).then(response => {
    if (response.status === 401) redirectTo("/api/v1/login/authsch", res);
    else if (response.status === 403) redirectTo("/forbidden", res);
    else if (response.status === 404) redirectTo("/not-found", res);
    else if (!response.ok) redirectTo("/error", res);
    else return response.json();
  });
};

export default fetchWrapper;
