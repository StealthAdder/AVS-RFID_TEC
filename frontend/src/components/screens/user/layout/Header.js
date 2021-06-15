import classes from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>User Portal</div>
      <nav>
        <ul>
          <li>
            <Link to='/userportal'>Home</Link>
          </li>
        </ul>
        <ul>
          <Link to='/userportal/login'>Login</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
