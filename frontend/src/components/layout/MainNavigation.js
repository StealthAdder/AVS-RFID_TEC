import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>AVS-RFID_TEC</div>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/manufacturer_sso'>Manufacturer</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default MainNavigation;
