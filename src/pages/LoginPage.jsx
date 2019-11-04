import React from 'react';
import { Button } from 'react-bootstrap';

import './LoginPage.css';


export default function LoginPage() {
  return (
    <div class='page-container'>
      <h1 class='welcome'>Welcome to VikOverflow <span className='no-wrap'>pre-release!</span></h1>
      <a href='/api/v1/login/authsch'><Button variant="primary">Login with AuthSCH</Button></a>
    </div>
  );
}
