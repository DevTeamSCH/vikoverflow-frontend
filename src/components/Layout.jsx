import React from 'react';
import { Link } from 'react-router-dom';

import style from './Layout.module.css';

// TEMP
// TODO @chif

function TempNav() {
  return (
    <div className={style.navBar}>
      <Link to='/'>Home</Link>
      <Link to='/questions'>Questions</Link>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className={style.pageContainer}>
      <TempNav />
      {children}
      <a href='/api/v1/logout'>Logout</a>
    </div>
  );
}
