import React from 'react';

const ComapanyLogout = ({ compName }) => {
  //const BackendIp = process.env.REACT_APP_BACKEND_IP;

  const logoutUser = async () => {
    //await axios.get(`${BackendIp}/manufacturer_sso/logout`);
    localStorage.removeItem('token');
    localStorage.removeItem('companyName');
    compName('');
  };
  return (
    <div>
      <input
        type='submit'
        className='avs manuf-dash-title'
        value='Logout'
        onClick={logoutUser}
      />
    </div>
  );
};

export default ComapanyLogout;
