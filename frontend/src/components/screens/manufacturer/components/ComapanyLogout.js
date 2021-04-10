import axios from 'axios';
import React from 'react';

const ComapanyLogout = () => {
  //const BackendIp = process.env.REACT_APP_BACKEND_IP;

  const logoutUser = async () => {
    //await axios.get(`${BackendIp}/manufacturer_sso/logout`);
    localStorage.removeItem('token');
  };
  return (
    <div>
      <input
        type='submit'
        className='btn btn-block'
        value='Logout'
        onClick={logoutUser}
      />
    </div>
  );
};

export default ComapanyLogout;
