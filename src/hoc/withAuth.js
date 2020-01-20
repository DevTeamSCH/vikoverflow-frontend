import React from "react";
//
import { useAuth } from "../components/providers";

export default Component => props => {
  const { user } = useAuth();
  if (user) {
    return <Component {...props} />;
  }
  return null;
};
