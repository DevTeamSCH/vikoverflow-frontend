import fetch from "isomorphic-unfetch";

const isServer = typeof window === "undefined";

const BASE = isServer ? "http://proxy:5000" : "http://localhost:5000";

export default {
  get: async url => {
    try {
      const response = await fetch(`${BASE}${url}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
};
