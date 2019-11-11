import React from 'react';
import {Link} from "react-router-dom";

export const ForbiddenPage = () => {
  return <div><h1>Forbidden</h1><Link to='/login'>Back to login page</Link></div>
};
