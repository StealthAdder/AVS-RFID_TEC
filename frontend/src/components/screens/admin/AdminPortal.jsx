import Login from './components/Login/Login';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
const AdminPortal = ({ pageTitle, pageUrl }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loginStatus, setLoginStatus] = useState(true);
  pageTitle('Admin Control Panel');
  pageUrl('/admin');
  return (
    <div>
      {loginStatus && (
        <Login setLoginStatus={setLoginStatus} setIsLogged={setIsLogged} />
      )}
      {isLogged && <Dashboard />}
    </div>
  );
};

export default AdminPortal;
