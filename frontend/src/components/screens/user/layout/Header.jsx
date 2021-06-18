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
      </nav>
    </header>
  );
};

export default Header;
