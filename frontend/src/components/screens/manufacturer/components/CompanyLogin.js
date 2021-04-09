import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CompanyLogin = () => {
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    const BackendIp = process.env.REACT_APP_BACKEND_IP;

    e.preventDefault();

    const companyLogin = async () => {
      const res = await axios.post(`${BackendIp}/manufacturer_sso/login`, {
        companyName: companyName,
        password: password,
      });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.data); // something is not right will check later
        console.log('got token', res.data.data);
      } else {
        alert(res.error);
      }
    };
    companyLogin();

    setCompanyName('');
    setPassword('');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>Company Name</label>
        <input
          type='text'
          placeholder='Company Name'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' className='btn btn-block' value='Login' />
      </form>
    </>
  );
};

export default CompanyLogin;
