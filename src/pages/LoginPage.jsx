import React from 'react';
import { Button } from 'react-bootstrap';

import style from './LoginPage.module.css';


export default function LoginPage() {
  return (
    <div className={style.pageContainer}>
      <h1 className={style.welcome} >Welcome to VikOverflow <span className={style.nowrap}>pre-release!</span></h1>
      <a href='/api/v1/login/authsch'><Button variant="primary">Login with AuthSCH</Button></a>
    </div>
  );
}
