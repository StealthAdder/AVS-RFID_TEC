import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="header">
      {/* <h1>Manufacturer Console</h1> */}
      {/* <Button text="Add" /> */}
      {/* <Link to="/manufacturer_console">Manufacturer Console</Link> */}
      {/* <Link to="/register_driver">Driver Registration</Link> */}
      <a className="avs-icon avs">icon</a>
      <p className="avs-title avs">AVS-RFID_TEC</p>
      <a className="login-icon avs">login-icon</a>
    </header>
  );
};

export default Header;
